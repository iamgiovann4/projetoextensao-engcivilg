/**
 * Projeto de Extensão Olaria - IFSP Caraguatatuba
 * Base de dados das notícias com IDs manuais e conteúdos completos
 */

const noticiasDados = [
  {
    id: 1,
    titulo:
      "Primeiros passos no bairro Olaria",
    categoria: "EDUCAÇÃO",
    data: "17 de agosto de 2026",
    descricao:
      "Nosso trabalho começou em sala de aula, com estudo do bairro, planejamento das visitas e preparação dos materiais do projeto.",
    img: "img/noticia1.png",
    conteudo: `
      <p class="subtitulo">
        <strong><i>Nosso projeto começou em sala de aula, antes mesmo da primeira visita ao bairro Olaria. Nos primeiros encontros, começamos a estudar a região, entender melhor os principais problemas existentes no bairro e organizar como seriam realizadas as próximas etapas do trabalho.</i></strong>
      </p>

      <p>
        Durante essa análise inicial, buscamos compreender principalmente as áreas com maior possibilidade de alagamentos e deslizamentos, que estão entre os principais riscos encontrados no bairro. A partir das informações estudadas, também definimos o ponto de encontro que seria utilizado pelo grupo para o início das atividades de campo.
      </p>

      <p>
        Outro ponto importante foi entender a classificação das áreas de risco. Durante o projeto, trabalhamos com níveis como R1, R2, R3 e R4, utilizados para indicar o grau de risco existente em determinada área. Com base nessas classificações e nas informações levantadas, começamos a definir quais locais seriam visitados e acompanhados ao longo do projeto.
      </p>

      <p>
        Após entender melhor o bairro e selecionar as áreas que fariam parte das próximas etapas, começamos a preparar os materiais que seriam utilizados nas visitas. Foram elaborados dois questionários diferentes. O primeiro será aplicado aos moradores, com perguntas que nos ajudem a entender a experiência de quem vive no local, principalmente em relação a ocorrências de alagamentos, deslizamentos e outros problemas percebidos pela comunidade. O segundo questionário foi preparado para ser preenchido por nós durante as visitas técnicas. Nele, registraremos informações sobre as condições encontradas em cada área, como características do terreno, construções, drenagem, vegetação e outros elementos que possam ajudar na análise do local.
      </p>

      <p>
        Também começamos a organizar a comunicação do projeto. Criamos a página no Instagram e planejamos a primeira publicação, com a intenção de apresentar nosso trabalho, registrar as atividades realizadas e aproximar a comunidade das diferentes etapas do projeto.
      </p>

      <blockquote class="p-3 my-4 rounded-3 border-start border-4" style="background-color: var(--creme); border-color: var(--verde-escuro) !important;">
        <p class="mb-0 fw-semibold" style="color: var(--verde-escuro);">
          “Antes de ir a campo, precisávamos entender o bairro, conhecer os riscos existentes e preparar uma forma organizada de registrar tudo o que encontrássemos durante as visitas.”
          <cite>(Giovanna Nicolau — aluna autora do projeto)</cite>
        </p>
      </blockquote>

      <p>
        Essa primeira etapa foi essencial para organizar o nosso trabalho. Quando chegássemos ao bairro, já teríamos locais definidos para observar, materiais preparados para coletar informações e uma ideia mais clara sobre os principais riscos que precisariam ser analisados. Com esse planejamento concluído, o próximo passo seria sair da sala de aula e conhecer de perto as áreas estudadas, iniciando as visitas técnicas pelo bairro Olaria.
      </p>
    `,
  },

  {
    id: 2,
    titulo:
      "Ideal apoia o Projeto Olaria",
    categoria: "PARCERIA",
    data: "24 de agosto de 2026",
    descricao:
      "A empresa Ideal apoiou nosso projeto com o patrocínio das camisetas utilizadas pelos alunos durante as atividades de campo.",
    img: "img/noticia2.jpeg",
    conteudo: `
      <p class="subtitulo"><strong><i>Nosso projeto também conta com a colaboração de parceiros. A empresa Ideal apoiou a iniciativa por meio do patrocínio das camisetas que serão utilizadas pelos alunos durante as atividades realizadas no bairro Olaria.</i></strong></p>
      
      <p>As camisetas farão parte da identificação visual da equipe durante as visitas de campo, ajudando na organização do grupo e facilitando o reconhecimento dos estudantes pelos moradores da comunidade. Para nós, isso ajuda não apenas na organização do grupo, mas também na aproximação com os moradores. Quando estamos circulando pelo bairro, a camiseta facilita a identificação de quem faz parte do projeto e ajuda a apresentar nossa presença na comunidade de uma maneira mais organizada.</p>
      
      <p>Esse apoio chega em um momento importante do projeto, em que estamos nos preparando para iniciar as atividades diretamente no bairro. Entre as próximas etapas está a visita técnica acompanhada pela Defesa Civil, quando teremos a oportunidade de conhecer de perto algumas das áreas que serão estudadas ao longo do trabalho. Além de contribuir com a identificação da equipe, a parceria mostra como empresas também podem participar de iniciativas desenvolvidas dentro da universidade e voltadas diretamente para a comunidade.</p>
      
      <blockquote class="p-3 my-4 rounded-3 border-start border-4" style="background-color: var(--creme); border-color: var(--verde-escuro) !important;">
        <p class="mb-0 fw-semibold" style="color: var(--verde-escuro);">
          “Nosso projeto é construído com a participação de diferentes pessoas e instituições. IFSP, comunidade, Defesa Civil e parceiros podem contribuir para que as ações saiam do planejamento e cheguem ao território.”
          <cite>(Luana de Melo — aluna)</cite>
        </p>
      </blockquote>
      
      <p>O objetivo do projeto é aproximar o conhecimento desenvolvido no curso de Engenharia Civil da realidade do bairro Olaria, buscando compreender melhor as áreas que precisam de atenção e contribuir para futuras ações de prevenção.</p>
      
      <p>Agradecemos à Ideal pelo apoio ao projeto e por contribuir com uma iniciativa desenvolvida por estudantes e voltada para a comunidade.</p>

      <img src=img/parceiro.png style="width: 100px "></img>
    `,
  },

  {
    id: 3,
    titulo:
      "Primeira visita técnica com a Defesa Civil",
    categoria: "PREVENÇÃO",
    data: "31 de agosto de 2026",
    descricao:
      "Ao lado da Defesa Civil, percorremos pontos do bairro para conhecer de perto áreas que precisam de maior atenção.",
    img: "img/noticia3.jpeg",
    conteudo: `
      <p class="subtitulo"><strong><i>Depois da preparação em sala de aula, chegou o momento de conhecer de perto alguns dos locais que estávamos estudando. Nossa primeira visita técnica pelo bairro Olaria foi realizada com o acompanhamento da Defesa Civil.</i></strong></p>
      
      <p>Durante o percurso, fomos levados a pontos escolhidos previamente pela própria Defesa Civil, considerando áreas que já demandam maior atenção e acompanhamento.   A visita durou aproximadamente três horas. Durante esse período, percorremos diferentes trechos do bairro e observamos características do terreno, das construções, das encostas, da vegetação e de outros elementos importantes para o desenvolvimento do projeto.</p>
      
      <p>Estar no local foi essencial para relacionarmos aquilo que havíamos estudado em sala de aula com situações reais. Mapas, imagens e informações técnicas nos ajudam a ter uma visão inicial, mas a visita permitiu perceber detalhes e características do território que só conseguimos compreender com mais clareza quando estamos em campo.</p>
      
      <p>Durante a atividade, utilizamos as camisetas do projeto, o que facilitou a identificação da nossa equipe enquanto circulávamos pelo bairro e também ajudou na aproximação com a comunidade.</p>
      
      <blockquote class="p-3 my-4 rounded-3 border-start border-4" style="background-color: var(--creme); border-color: var(--verde-escuro) !important;">
        <p class="mb-0 fw-semibold" style="color: var(--verde-escuro);">
          “Sair da sala de aula e conhecer o território de perto fez toda a diferença. Conseguimos enxergar situações que, antes, conhecíamos apenas por mapas, imagens e relatos.”
          <cite>(Giovana Corazza — aluna)</cite>
        </p>
      </blockquote>
      
      <p>Essa visita faz parte da iniciativa “Prevenção de Desastres no Bairro Olaria”, que busca aproximar os conhecimentos da Engenharia Civil da realidade da comunidade. Nosso propósito é compreender melhor as áreas de risco e, junto com a Defesa Civil e os moradores, contribuir para ações de prevenção.</p>
      
      <p>Os registros realizados durante o percurso serão utilizados nas próximas etapas do projeto. A partir deles, vamos organizar as informações coletadas, comparar as observações de campo com os estudos feitos anteriormente e aprofundar a análise dos pontos visitados.</p>
    `,
  },

  // {
  //   id: 4,
  //   titulo:
  //     "O que encontramos em campo: pontos de atenção no bairro Olaria",
  //   categoria: "ENGENHARIA",
  //   data: "29 de agosto de 2026",
  //   descricao:
  //     "Durante a visita, registramos situações relacionadas a encostas, drenagem, construções, vegetação e condições do espaço urbano.",
  //   img: "img/noticia3.jpg",
  //   conteudo: `
  //     <p class="lead">Durante nossa visita técnica pelo bairro Olaria, acompanhados pela Defesa Civil, registramos diferentes situações que chamaram nossa atenção e que agora fazem parte do material de estudo do projeto.</p>
      
  //     <p>Ao longo do percurso, observamos como características do terreno, ocupação das encostas, drenagem, vegetação e construções se relacionam dentro do bairro. Para nós, foi uma oportunidade de enxergar na prática temas que fazem parte da Engenharia Civil.</p>
      
  //     <p>Em alguns pontos, encontramos terrenos bastante inclinados e áreas com plantações de bananeiras. Esse tipo de local merece atenção principalmente em períodos de chuva, quando o terreno pode ficar mais úmido e escorregadio.</p>
      
  //     <p>Também observamos residências construídas próximas a encostas e em terrenos com bastante declive, algumas delas próximas à rodovia. Em determinados locais, encontramos ainda árvores inclinadas próximas às casas.</p>
      
  //     <p>Durante o trajeto, registramos também <strong>muros com trincas, áreas com solo exposto e terrenos onde já ocorreram demolições</strong>. Esses pontos foram fotografados e anotados para que possamos estudar cada situação com mais cuidado nas próximas etapas.</p>
      
  //     <p>Outro assunto que apareceu bastante durante a visita foi a <strong>drenagem da água da chuva</strong>. Encontramos locais onde o escoamento merece atenção e observamos uma galeria que, segundo as informações recebidas durante a visita, pode apresentar dificuldades em determinadas situações de maior volume de água.</p>
      
  //     <p>Também vimos terrenos baldios com presença de lixo. Além da questão ambiental, resíduos descartados de forma inadequada podem chegar aos sistemas de drenagem e prejudicar o escoamento da água.</p>
      
  //     <p>Em outro ponto, observamos uma caixa-d'água instalada sobre uma residência com tubulações direcionadas para o terreno. Situações como essa também entram em nossa análise, principalmente quando há presença frequente de água em terrenos inclinados.</p>
      
  //     <blockquote class="p-3 my-4 rounded-3 border-start border-4" style="background-color: var(--creme); border-color: var(--verde-escuro) !important;">
  //       <p class="mb-0 fw-semibold" style="color: var(--verde-escuro);">"Cada ponto observado em campo ajuda a gente a entender melhor como o bairro funciona e quais situações precisam ser estudadas com mais atenção."</p>
  //     </blockquote>
      
  //     <p>Além dessas questões, também registramos situações relacionadas à acessibilidade e às condições dos espaços públicos. A visita mostrou para nós que analisar um bairro envolve olhar para diferentes aspectos ao mesmo tempo.</p>
      
  //     <p>Agora, todo esse material será organizado para as próximas etapas do projeto. Nossa intenção é continuar estudando esses pontos, relacionar as observações com o conhecimento técnico e aprofundar as análises com o apoio da Defesa Civil.</p>
  //   `,
  // },
];

// Disponível no escopo global
if (typeof window !== "undefined") {
  window.noticiasDados = noticiasDados;
}
