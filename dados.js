/* Cálculo passo a passo · mapa dos temas e das disciplinas
   Cada tema é escrito uma vez só. As disciplinas são "caminhos" que passam
   pelos temas na ordem da ementa. "antes" = o que precisa saber antes. */
window.TEMAS = {
  "numeros-reais":   {titulo:"Números reais e frações", resumo:"Frações, decimais, potências e as operações que aparecem em tudo depois.", antes:[], pronto:true,
    progresso:{t:{n:6,peso:40}, r:{n:1,peso:10}, e:{n:10,peso:40}, x:{n:1,peso:10}}},
  "fatoracao":       {titulo:"Fatoração e simplificação", resumo:"Transformar soma em multiplicação pra conseguir simplificar frações algébricas.", antes:["numeros-reais"], pronto:true,
    progresso:{t:{n:7,peso:40}, r:{n:1,peso:10}, e:{n:7,peso:40}, x:{n:1,peso:10}}},
  "funcoes":         {titulo:"Funções: domínio e imagem", resumo:"O que é função, domínio, imagem, injetora, sobrejetora, par e ímpar.", antes:["numeros-reais"], pronto:true,
    progresso:{t:{n:8,peso:40}, r:{n:1,peso:10}, e:{n:13,peso:40}, x:{n:1,peso:10}}},
  "composicao-inversa":{titulo:"Composição e função inversa", resumo:"Uma função dentro da outra, e como desfazer uma função.", antes:["funcoes"], pronto:true,
    progresso:{t:{n:8,peso:40}, r:{n:1,peso:10}, e:{n:12,peso:40}, x:{n:1,peso:10}}},
  "graficos":        {titulo:"Gráficos e transformações", resumo:"Ler e desenhar gráficos, e o que f(x+a)+b faz com o desenho.", antes:["funcoes"], pronto:true,
    progresso:{t:{n:7,peso:40}, r:{n:1,peso:10}, e:{n:11,peso:40}, x:{n:1,peso:10}}},
  "primeiro-segundo-grau":{titulo:"Funções do 1º e 2º grau", resumo:"Retas, parábolas, equações e inequações.", antes:["fatoracao","graficos"], pronto:true,
    progresso:{t:{n:8,peso:40}, r:{n:1,peso:10}, e:{n:15,peso:40}, x:{n:1,peso:10}}},
  "raiz-modulo":     {titulo:"Raiz quadrada e módulo", resumo:"Raiz como inversa do quadrado, módulo, domínio e gráfico.", antes:["funcoes","primeiro-segundo-grau"], pronto:true,
    progresso:{t:{n:8,peso:40}, r:{n:1,peso:10}, e:{n:12,peso:40}, x:{n:1,peso:10}}},
  "polinomiais-racionais":{titulo:"Polinômios e funções racionais", resumo:"Potências, polinômios, raízes e funções do tipo 1/x.", antes:["fatoracao","primeiro-segundo-grau"], pronto:true,
    progresso:{t:{n:8,peso:40}, r:{n:1,peso:10}, e:{n:11,peso:40}, x:{n:1,peso:10}}},
  "exp-log":         {titulo:"Exponenciais e logaritmos", resumo:"Crescimento exponencial, log como inversa, mudança de base.", antes:["funcoes","composicao-inversa"], pronto:true,
    progresso:{t:{n:8,peso:40}, r:{n:1,peso:10}, e:{n:13,peso:40}, x:{n:1,peso:10}}},
  "trigonometria":   {titulo:"Trigonometria", resumo:"Ângulos em radianos, seno, cosseno, tangente e seus gráficos.", antes:["funcoes","graficos"], pronto:true,
    progresso:{t:{n:8,peso:40}, r:{n:1,peso:10}, e:{n:13,peso:40}, x:{n:1,peso:10}}},
  "inequacoes":      {titulo:"Equações e inequações com funções", resumo:"Resolver desigualdades com sinais, quadros de sinal e intervalos.", antes:["primeiro-segundo-grau"], pronto:true,
    progresso:{t:{n:8,peso:40}, r:{n:1,peso:10}, e:{n:12,peso:40}, x:{n:1,peso:10}}},
  "limites":         {titulo:"Limites e continuidade", resumo:"Chegar perto sem chegar: a ideia que sustenta todo o Cálculo.", antes:["fatoracao","funcoes","polinomiais-racionais"], pronto:true,
    progresso:{t:{n:8,peso:40}, r:{n:1,peso:10}, e:{n:12,peso:40}, x:{n:1,peso:10}}},
  "limites-calc1":   {titulo:"Limites em Cálculo 1", resumo:"Definição com ε e δ, confronto, sen x/x, limites no infinito, continuidade e o número e.", antes:["limites","raiz-modulo"], pronto:true,
    progresso:{t:{n:8,peso:40}, r:{n:1,peso:10}, e:{n:15,peso:40}, x:{n:1,peso:10}}},
  "derivadas":       {titulo:"Derivada e reta tangente", resumo:"Taxa de variação, inclinação da tangente e a definição de derivada.", antes:["limites","primeiro-segundo-grau"], pronto:true,
    progresso:{t:{n:8,peso:40}, r:{n:1,peso:10}, e:{n:13,peso:40}, x:{n:1,peso:10}}},
  "regras-derivacao":{titulo:"Regras de derivação", resumo:"Soma, produto, quociente e regra da cadeia.", antes:["derivadas","composicao-inversa"], pronto:true,
    progresso:{t:{n:8,peso:40}, r:{n:1,peso:10}, e:{n:14,peso:40}, x:{n:1,peso:10}}},
  "derivacao-implicita":{titulo:"Implícita, logarítmica e inversas", resumo:"Cadeia com qualquer coisa dentro, derivação implícita, inversas, arco-tangente e derivação logarítmica.", antes:["regras-derivacao"], pronto:true,
    progresso:{t:{n:8,peso:40}, r:{n:1,peso:10}, e:{n:9,peso:40}, x:{n:1,peso:10}}},
  "tvm-taylor":      {titulo:"Valor Médio, L'Hôpital e Taylor", resumo:"Rolle e Teorema do Valor Médio, regra de L'Hôpital e polinômio de Taylor com resto de Lagrange.", antes:["derivacao-implicita","limites-calc1"], pronto:true,
    progresso:{t:{n:8,peso:40}, r:{n:1,peso:10}, e:{n:13,peso:40}, x:{n:1,peso:10}}},
  "max-min":         {titulo:"Máximos e mínimos", resumo:"Usar a derivada pra achar onde a função sobe, desce e para; concavidade, otimização e esboço.", antes:["tvm-taylor","inequacoes"], pronto:true,
    progresso:{t:{n:8,peso:40}, r:{n:1,peso:10}, e:{n:11,peso:40}, x:{n:1,peso:10}}},
  "primitivas":      {titulo:"Primitivas", resumo:"Derivar ao contrário: tabela, condição inicial, ax + b dentro e substituição.", antes:["regras-derivacao","derivacao-implicita"], pronto:true,
    progresso:{t:{n:8,peso:40}, r:{n:1,peso:10}, e:{n:12,peso:40}, x:{n:1,peso:10}}},
  "integrais-area":  {titulo:"Integrais e área", resumo:"Somas de Riemann, Teorema Fundamental do Cálculo, área entre curvas e aplicações.", antes:["primitivas"], pronto:true,
    progresso:{t:{n:8,peso:40}, r:{n:1,peso:10}, e:{n:13,peso:40}, x:{n:1,peso:10}}}
};

window.DISCIPLINAS = {
  cm310:{codigo:"CM310", nome:"Pré-Cálculo", arquivo:"cm310.html",
    sobre:"Números reais, funções e seus gráficos, e os tipos de função que o Cálculo usa o tempo todo.",
    temas:["numeros-reais","fatoracao","funcoes","composicao-inversa","graficos","primeiro-segundo-grau","polinomiais-racionais","raiz-modulo","exp-log","trigonometria","inequacoes"]},
  cm300:{codigo:"CM300", nome:"Introdução ao Cálculo", arquivo:"cm300.html",
    sobre:"A mesma base do Pré-Cálculo, terminando com a primeira ideia de limite e derivada.",
    temas:["numeros-reais","fatoracao","funcoes","composicao-inversa","graficos","primeiro-segundo-grau","raiz-modulo","polinomiais-racionais","exp-log","trigonometria","limites","derivadas","regras-derivacao"]},
  cm311:{codigo:"CM311", nome:"Cálculo 1", arquivo:"cm311.html",
    sobre:"Limites, derivadas e integrais.",
    temas:["limites","limites-calc1","derivadas","regras-derivacao","derivacao-implicita","tvm-taylor","max-min","primitivas","integrais-area"]}
};

/* todos os pré-requisitos de um tema, do mais básico pro mais perto dele */
window.preRequisitos = function(id){
  const vistos = new Set(), ordem = [];
  (function visita(t){
    (TEMAS[t].antes||[]).forEach(a=>{ if(!vistos.has(a)){ vistos.add(a); visita(a); ordem.push(a); } });
  })(id);
  return ordem;
};
/* em quais disciplinas o tema aparece */
window.ondeAparece = function(id){
  return Object.values(DISCIPLINAS).filter(d=>d.temas.includes(id));
};
/* quais temas usam este */
window.usadoEm = function(id){
  return Object.keys(TEMAS).filter(t=>(TEMAS[t].antes||[]).includes(id));
};

/* progresso de uma disciplina = média dos assuntos dela (assunto ainda não feito conta 0) */
window.pctDisciplina = function(chave){
  const d = DISCIPLINAS[chave];
  if(!window.progresso) return 0;
  return Math.round(d.temas.reduce((s,t)=>s+progresso.pctTema(t),0)/d.temas.length);
};
