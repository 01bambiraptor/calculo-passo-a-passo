/* Cálculo passo a passo · comportamento comum
   - robozinho no canto (o mesmo do site de Algoritmos II), com balão de fala
   - troca entre modo normal e modo socrático (lembrado no navegador)
   - botões de "mostrar resposta" e "ver resolução" */
(function(){
"use strict";
const reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;

const ROBO = `<g class="corpo">
  <ellipse cx="30" cy="57" rx="14" ry="2.5" fill="#2f5d7c" opacity=".18"/>
  <line x1="30" y1="10" x2="30" y2="5" stroke="#8fa9bd" stroke-width="2" stroke-linecap="round"/>
  <circle class="luzA" cx="30" cy="4.5" r="3.2" fill="#ffb98a"/>
  <rect x="20" y="36" width="20" height="17" rx="7" fill="#eef4f9" stroke="#9db6c9" stroke-width="1.3"/>
  <circle cx="30" cy="44" r="3.2" fill="#2fbfe9"/>
  <path d="M21 41 Q14 45 15 51" stroke="#c9d8e4" stroke-width="4" stroke-linecap="round" fill="none"/>
  <g class="braco"><path d="M39 41 Q46 37 47 30" stroke="#c9d8e4" stroke-width="4" stroke-linecap="round" fill="none"/><circle cx="47" cy="28.5" r="3" fill="#ffb98a"/></g>
  <rect x="13" y="10" width="34" height="25" rx="11" fill="#f6f9fc" stroke="#9db6c9" stroke-width="1.3"/>
  <rect x="17" y="15" width="26" height="15" rx="7" fill="#1f4560"/>
  <g class="olhos"><circle cx="24.5" cy="22.5" r="3.1" fill="#7fe3ff"/><circle cx="35.5" cy="22.5" r="3.1" fill="#7fe3ff"/>
    <circle cx="23.6" cy="21.6" r="1" fill="#fff"/><circle cx="34.6" cy="21.6" r="1" fill="#fff"/></g>
  <path d="M18 13 Q24 11 31 11.5" stroke="#fff" stroke-width="1.6" stroke-linecap="round" fill="none" opacity=".8"/>
 </g>`;

/* robozinho pequeno pros balões do modo socrático */
window.roboGrande = function(cls){
  return `<svg class="robo ${cls||''}" viewBox="10 0 40 60" aria-hidden="true">${ROBO}</svg>`;
};
/* progresso de estudo guardado no navegador: lista de marcos feitos por tema */
window.progresso = {
  le(tema){ try{ return JSON.parse(localStorage.getItem('prog-'+tema)||'[]'); }catch(e){ return []; } },
  feito(tema, marco){ return this.le(tema).includes(marco); },
  marca(tema, marco){
    try{ const l=this.le(tema); if(!l.includes(marco)){ l.push(marco); localStorage.setItem('prog-'+tema, JSON.stringify(l)); } }catch(e){}
    document.dispatchEvent(new CustomEvent('progresso', {detail:{tema, marco}}));
  },
  /* marcos têm prefixo do grupo: t-... teoria, r-... interativo, e-... exercícios, x-... treino */
  pctTema(tema){
    const def = (window.TEMAS && TEMAS[tema] && TEMAS[tema].progresso) || null;
    if(!def) return 0;
    const l = this.le(tema); let total = 0;
    for(const g in def){
      const feitos = l.filter(m=>m.split('-')[0]===g).length;
      total += def[g].peso * Math.min(feitos, def[g].n) / def[g].n;
    }
    return Math.round(total);
  }
};
window.miniRobo = function(){
  return `<svg class="mini-robo" viewBox="10 0 40 60" aria-hidden="true">${ROBO}</svg>`;
};

function poeRobo(){
  if(document.querySelector('.canto')) return;
  const fala = document.body.dataset.fala || 'Oi! Eu sou o robozinho. Me toca quando quiser uma dica.';
  const c = document.createElement('div');
  c.className = 'canto';
  c.innerHTML = `<div class="fala" role="status"><button type="button" aria-label="fechar">✕</button><span></span></div>
    <svg class="robo" viewBox="-50 -6 112 66" role="button" tabindex="0" aria-label="robozinho: toque pra ver a dica">${ROBO}</svg>`;
  document.body.appendChild(c);
  const rb = c.querySelector('.robo'), balao = c.querySelector('.fala');
  balao.querySelector('span').innerHTML = fala;
  const oi = ()=>{ if(reduz) return; rb.classList.remove('oi'); void rb.getBoundingClientRect(); rb.classList.add('oi'); };
  const alterna = ()=>{ balao.classList.toggle('aberta'); oi(); };
  rb.addEventListener('click', alterna);
  rb.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); alterna(); } });
  balao.querySelector('button').onclick = ()=>balao.classList.remove('aberta');
  oi();
}

/* modo normal x modo socrático */
function poeModos(){
  const bts = document.querySelectorAll('[data-modo]');
  if(!bts.length) return;
  let modo = 'normal';
  try{ modo = localStorage.getItem('modo-calc') || 'normal'; }catch(e){}
  const aplica = ()=>{
    document.body.classList.toggle('socratico', modo==='socratico');
    bts.forEach(b=>b.classList.toggle('ativo', b.dataset.modo===modo));
  };
  bts.forEach(b=>b.addEventListener('click', ()=>{
    modo = b.dataset.modo;
    try{ localStorage.setItem('modo-calc', modo); }catch(e){}
    aplica();
  }));
  aplica();
}

/* perguntas do modo socrático: troca o marcador pelo robozinho */
function poeMiniRobos(){
  document.querySelectorAll('.pergunta').forEach(p=>{
    if(!p.querySelector('.mini-robo')) p.insertAdjacentHTML('afterbegin', miniRobo());
  });
}

/* botões de revelar */
function poeRevelas(){
  document.addEventListener('click', e=>{
    const r = e.target.closest('.revela');
    if(r){
      const alvo = r.dataset.alvo ? document.getElementById(r.dataset.alvo) : r.parentElement.querySelector('.resposta');
      if(!alvo) return;
      const abre = !alvo.classList.contains('aberta');
      alvo.classList.toggle('aberta', abre);
      r.textContent = abre ? (r.dataset.fecha || 'esconder') : (r.dataset.abre || r.textContent);
    }
  });
  document.querySelectorAll('.revela').forEach(r=>{ r.dataset.abre = r.textContent; });
}


/* cor da disciplina: página de disciplina fixa a sua; página de assunto usa a de onde o aluno veio
   (?d=cm310 no link, ou a última trilha aberta), desde que o assunto apareça nela */
function poeDisciplina(){
  const b = document.body;
  const ler = ()=>{ try{ return localStorage.getItem('disc-calc'); }catch(e){ return null; } };
  const guarda = v=>{ try{ localStorage.setItem('disc-calc', v); }catch(e){} };
  let d = b.dataset.disc || null;
  const m = location.pathname.match(/tema-([\w-]+)\.html$/);
  if(d && !m) guarda(d);
  if(m && window.DISCIPLINAS){
    const onde = Object.keys(DISCIPLINAS).filter(k=>DISCIPLINAS[k].temas.includes(m[1]));
    const q = new URLSearchParams(location.search).get('d');
    if(q && onde.includes(q)) guarda(q);
    d = [q, ler()].find(x=>x && onde.includes(x)) || (onde.length===1 ? onde[0] : null);
    if(d) b.dataset.disc = d;
  }
  if(d && window.DISCIPLINAS && DISCIPLINAS[d])
    document.querySelectorAll('.menu a').forEach(a=>a.classList.toggle('aqui', a.getAttribute('href')===DISCIPLINAS[d].arquivo));
}

function inicia(){ poeDisciplina(); poeRobo(); poeModos(); poeMiniRobos(); poeRevelas(); }
if(document.readyState==='loading') addEventListener('DOMContentLoaded', inicia); else inicia();
})();
