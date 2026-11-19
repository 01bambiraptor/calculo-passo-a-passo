# Cálculo passo a passo

> Do Pré-Cálculo ao Cálculo 1, sem pular degrau.

Plataforma de estudo pras três disciplinas de base de Cálculo da UFPR: **Pré-Cálculo (CM310)**, **Introdução ao Cálculo (CM300)** e **Cálculo 1 (CM311)**.

## Como abrir

É só abrir o `index.html` no navegador. Não precisa instalar nada e funciona sem internet (sem internet, a fonte dos títulos troca pela fonte padrão do sistema).

## Como está organizado

- `index.html`: página inicial, com as 3 disciplinas, o mapa "quais assuntos preciso dominar?" e a lista de todos os assuntos.
- `cm310.html`, `cm300.html`, `cm311.html`: a trilha de cada disciplina, na ordem da ementa.
- `tema-<assunto>.html`: uma página por assunto. Cada assunto é escrito uma vez só e aparece em todas as disciplinas que usam ele.
- `dados.js`: o mapa de tudo. Lista os assuntos, o que cada um precisa antes e a ordem de cada disciplina. **Pra marcar um assunto como pronto, é só colocar `pronto:true` nele.**
- `comum.css` e `comum.js`: visual e comportamento comuns (robozinho, modo normal/socrático, botões de revelar).

## Cada assunto tem

1. **O que precisa saber antes**, com link.
2. **O mapa da página.**
3. **Caminho principal em dois modos:** normal (resumo curto + animação passo a passo) e socrático (passos de bebê com perguntinhas). A escolha fica lembrada no navegador.
   - **Saiba mais:** caixinhas opcionais pra ir um pouco mais fundo, sem sair da disciplina. Não contam no progresso.
4. **Parte interativa**, quando ajuda a enxergar.
5. **Exercícios das listas da UFPR**, com resolução passo a passo ("Passo N", "Onde estou", a conta por extenso e o que não está escrito mas existe).
6. **Treino com exercícios gêmeos**, gerados na hora.
7. **Está com dificuldade?**, apontando qual assunto revisar.

## Progresso (0 a 100%)

Cada assunto tem marcos com pesos, definidos em `dados.js`: caminho principal 40%, parte interativa 10%, exercícios da lista 40% (o aluno marca "acertei" ou "errei, mas entendi") e treino 10%. O progresso de uma disciplina é a média dos assuntos dela. Por enquanto fica salvo no navegador.

## Conferência das contas

Toda resolução é conferida com código antes de entrar no site: a expressão original e a simplificada são calculadas em dezenas de valores de *x* e precisam dar igual. Quando a lista tem gabarito, a resposta também é comparada com ele.

## Créditos

As ementas e a maior parte dos exercícios vêm das listas do Departamento de Matemática da UFPR. Onde as listas não cobriam o assunto, os exercícios foram criados pro site e estão marcados como "exercício do site". Quando a lista não tem gabarito, a resposta foi conferida com código.

**Não substitui o material dos professores, nem as aulas.** É uma ferramenta pra ajudar a enxergar.

O robozinho é o mesmo do site de Algoritmos II.

<sub>A estrutura e o código do site foram criados com apoio de IA.</sub>
