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

      <p>Durante essa fase de preparação, também tivemos a oportunidade de participar de um <a href="https://www.ifspcaraguatatuba.edu.br/noticias/alunos-de-engenharia-civil-participam-de-curso-de-reducao-de-riscos-e-desastres" target="_blank">evento organizado pelo CEMADEN Educação</a>, junto com professores da rede estadual de ensino, na sede da Unidade Regional de Ensino de Caraguatatuba. Durante o encontro, aprendemos mais sobre prevenção e redução de riscos de desastres e conseguimos relacionar vários dos assuntos discutidos com o que já estávamos estudando no projeto. Essa experiência também ajudou a ampliar nossa visão antes do início das visitas de campo.</p>

      <p>
        Após entender melhor o bairro e selecionar as áreas que fariam parte das próximas etapas, começamos a preparar os materiais que seriam utilizados nas visitas. Foram elaborados dois questionários diferentes. O primeiro será aplicado aos moradores, com perguntas que nos ajudem a entender a experiência de quem vive no local, principalmente em relação a ocorrências de alagamentos, deslizamentos e outros problemas percebidos pela comunidade. O segundo questionário foi preparado para ser preenchido por nós durante as visitas técnicas. Nele, registraremos informações sobre as condições encontradas em cada área, como características do terreno, construções, drenagem, vegetação e outros elementos que possam ajudar na análise do local.
      </p>

      <p>
        Também começamos a organizar a comunicação do projeto. Criamos a página no Instagram e planejamos a primeira publicação, com a intenção de apresentar nosso trabalho, registrar as atividades realizadas e aproximar a comunidade das diferentes etapas do projeto.
      </p>

      <blockquote class="p-3 my-4 rounded-3 border-start border-4" style="background-color: var(--creme); border-color: var(--verde-escuro) !important;">
        <p class="mb-0 fw-semibold" style="color: var(--verde-escuro); text-align: left;">
          “Antes de ir a campo, precisávamos entender o bairro, conhecer os riscos existentes e preparar uma forma organizada de registrar tudo o que encontrássemos durante as visitas.”
        </p>
        <cite style="font-size: 14px;">Giovanna Nicolau — estudante de Engenharia Civil e desenvolvedora do site</cite>
      </blockquote>

      <p>
        Essa primeira etapa foi essencial para organizar o nosso trabalho. Quando chegássemos ao bairro, já teríamos locais definidos para observar, materiais preparados para coletar informações e uma ideia mais clara sobre os principais riscos que precisariam ser analisados. Com esse planejamento concluído, o próximo passo seria sair da sala de aula e conhecer de perto as áreas estudadas, iniciando as visitas técnicas pelo bairro Olaria.
      </p>
    `,
  },

  {
    id: 2,
    titulo:
      "Empresas parceiras apoiam o Projeto Olaria",
    categoria: "PARCERIA",
    data: "24 de agosto de 2026",
    descricao:
      "A empresa Ideal apoiou nosso projeto com o patrocínio das camisetas utilizadas pelos alunos durante as atividades de campo.",
    img: "img/noticia2.jpeg",
    conteudo: `
      <p class="subtitulo"><strong><i>Nosso projeto também conta com a colaboração de parceiros que acreditam na iniciativa e contribuem para que nossas ações aconteçam de forma ainda mais organizada e próxima da comunidade. A empresa Ideal apoiou a iniciativa por meio do patrocínio das camisetas utilizadas pelos alunos durante as atividades realizadas no bairro Olaria. Além disso, a Litoral Madeiras passou a integrar essa rede de parceiros, contribuindo com a doação dos bonés utilizados pela equipe durante as ações do projeto.</i></strong></p>
      
      <p>As camisetas farão parte da identificação visual da equipe durante as visitas de campo, ajudando na organização do grupo e facilitando o reconhecimento dos estudantes pelos moradores da comunidade. Para nós, isso ajuda não apenas na organização do grupo, mas também na aproximação com os moradores. Quando estamos circulando pelo bairro, a camiseta facilita a identificação de quem faz parte do projeto e ajuda a apresentar nossa presença na comunidade de uma maneira mais organizada.</p>

      <p>A parceria com a Litoral Madeiras também contribuiu para a identificação e padronização visual da equipe. A empresa realizou a doação dos bonés utilizados pelos integrantes do projeto durante as atividades de campo, complementando as camisetas e facilitando o reconhecimento dos estudantes pela comunidade.</p>
      
      <p>Essas parcerias chegam em um momento importante do projeto, em que estamos nos preparando para iniciar as atividades diretamente no bairro. Entre as próximas etapas está a visita técnica acompanhada pela Defesa Civil, quando teremos a oportunidade de conhecer de perto algumas das áreas que serão estudadas ao longo do trabalho. Além de contribuir com a identificação da equipe, a parceria mostra como empresas também podem participar de iniciativas desenvolvidas dentro da universidade e voltadas diretamente para a comunidade.</p>
      
      <blockquote class="p-3 my-4 rounded-3 border-start border-4" style="background-color: var(--creme); border-color: var(--verde-escuro) !important;">
        <p class="mb-0 fw-semibold" style="color: var(--verde-escuro); text-align: left;">
          “Nosso projeto é construído com a participação de diferentes pessoas e instituições. IFSP, comunidade, Defesa Civil e parceiros podem contribuir para que as ações saiam do planejamento e cheguem ao território.”
        </p>
        <cite style="font-size: 14px;">Giovana Corazza — estudante de Engenharia Civil</cite>
      </blockquote>
      
      <p>O objetivo do projeto é aproximar o conhecimento desenvolvido no curso de Engenharia Civil da realidade do bairro Olaria, buscando compreender melhor as áreas que precisam de atenção e contribuir para futuras ações de prevenção.</p>
      
      <p>Agradecemos à Ideal e à Litoral Madeiras pelo apoio ao projeto e por contribuírem com uma iniciativa desenvolvida por estudantes e voltada para a comunidade.</p>

      <div > 
        <a href="https://idealgrupo.com.br/" target="_blank"><img src=img/parceiro2.png style="width: 100px "></img></a>
        <a href="https://idealgrupo.com.br/" target="_blank"><img src=img/parceiro.png style="width: 100px "></img></a>
      </div>
     
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
        <p class="mb-0 fw-semibold" style="color: var(--verde-escuro); text-align: left;">
          “Sair da sala de aula e conhecer o território de perto fez toda a diferença. Conseguimos enxergar situações que, antes, conhecíamos apenas por mapas, imagens e relatos.”
        </p>
        <cite style="font-size: 14px;">Yasmin Paz — estudante de Engenharia Civil</cite>
      </blockquote>
      
      <p>Essa visita faz parte da iniciativa “Prevenção de Desastres no Bairro Olaria”, que busca aproximar os conhecimentos da Engenharia Civil da realidade da comunidade. Nosso propósito é compreender melhor as áreas de risco e, junto com a Defesa Civil e os moradores, contribuir para ações de prevenção.</p>
      
      <p>Os registros realizados durante o percurso serão utilizados nas próximas etapas do projeto. A partir deles, vamos organizar as informações coletadas, comparar as observações de campo com os estudos feitos anteriormente e aprofundar a análise dos pontos visitados.</p>
    `,
  },

  {
    id: 4,
    titulo:
      "Alunos preparam folders para as próximas visitas",
    categoria: "ENGENHARIA",
    data: "21 de setembro de 2026",
    descricao:
      "Em uma atividade prática, os estudantes criaram materiais informativos que serão utilizados no contato com os moradores da comunidade.",
    img: "img/noticia4.jpg",
    conteudo: `
      <p class="subtitulo"><strong><i>Para nos prepararmos para o próximo contato com os moradores do bairro Olaria, tivemos uma aula diferente e bastante prática. Fomos divididos em três grupos e cada grupo ficou responsável por elaborar uma proposta de folder sobre o projeto e a prevenção de desastres.</i></strong></p>
      
      <p>A ideia era criar um material que levasse informações importantes para os moradores, mas de uma forma simples e próxima. Por isso, em vez de fazermos algo muito simétrico e certinho, trabalhamos com recortes, colagens e diferentes formas de organizar os elementos. A proposta era justamente deixar o folder mais espontâneo e visual, buscando chamar a atenção e facilitar nossa aproximação com a comunidade.</p>
      
      <p>Durante a atividade, cada grupo pôde pensar livremente na composição do seu material, escolhendo como distribuir os textos, imagens e demais elementos. Mesmo trabalhando a partir das mesmas informações principais, surgiram propostas diferentes, mostrando como um mesmo conteúdo pode ser apresentado de várias maneiras.</p>

      <blockquote class="p-3 my-4 rounded-3 border-start border-4" style="background-color: var(--creme); border-color: var(--verde-escuro) !important;">
        <p class="mb-0 fw-semibold" style="color: var(--verde-escuro); text-align: left;">
          “Foi uma atividade bem diferente do que estamos acostumados. Tivemos que pensar não só nas informações que queríamos passar, mas também em como fazer isso de uma maneira que chamasse a atenção e fosse fácil para os moradores entenderem.”
        </p>
        <cite style="font-size: 14px;">Luana de Melo — estudante de Engenharia Civil</cite>
      </blockquote>
      
      <p>Além da parte criada por cada grupo, algumas informações precisavam estar presentes no material, como os mapas das áreas de risco, orientações de prevenção, sinais de alerta, contatos de emergência e o QR Code do Instagram do projeto. O folder também apresenta o Projeto de Extensão dos alunos de Engenharia Civil do IFSP – Campus Caraguatatuba e identifica o bairro Olaria como local das nossas atividades.</p>
      
      <p>Um dos pontos mais importantes dessa atividade foi pensar em quem receberá esse material. Como o folder será entregue durante nossas visitas ao bairro, buscamos organizar as informações de uma maneira que pudesse auxiliar a conversa com os moradores, tornando assuntos relacionados às áreas de risco e à prevenção mais fáceis de visualizar e compreender.</p>

      <p>Depois de finalizarmos a proposta, o folder foi digitalizado e seguimos para a preparação dos materiais. Imprimimos, recortamos e dobramos cada um deles para deixar tudo pronto para nossa próxima visita ao bairro.</p>

      <p>Essa etapa também fez parte da experiência. Depois de passarmos pela criação manual, pudemos acompanhar o material saindo do papel e chegando à sua versão final, que será levada para a comunidade durante as próximas atividades de campo.</p>

      <p>Foi uma aula trabalhosa, mas também muito legal. Além de colocarmos a criatividade em prática, conseguimos preparar um material que será importante para apresentarmos o projeto e iniciarmos uma aproximação ainda maior com os moradores do Olaria.</p>

      <p>Agora, com os folders prontos, seguimos para a próxima etapa do projeto: voltar ao bairro, conversar com os moradores e utilizar o material que nós mesmos desenvolvemos para apoiar esse primeiro contato.</p>
    `,
  },

    {
    id: 5,
    titulo:
      "Segunda visita ao bairro Olaria aproxima estudantes e moradores",
    categoria: "PREVENÇÃO",
    data: "28 de setembro de 2026",
    descricao:
      "Mesmo com a chuva, realizamos entrevistas com moradores, distribuímos os folders e analisamos as condições do bairro.",
    img: "img/noticia5.jpeg",
    conteudo: `
      <p class="subtitulo"><strong><i>Na nossa segunda visita ao bairro Olaria, tivemos um contato ainda mais próximo com os moradores. Mesmo com a chuva, fomos até a comunidade para realizar as primeiras entrevistas, observar as condições do local e entender melhor como algumas situações de risco fazem parte da rotina de quem vive no bairro.</i></strong></p>
      
      <p>Para realizar a atividade, fomos divididos em grupos e seguimos por diferentes pontos do bairro. Nosso objetivo era conversar diretamente com os moradores e reunir informações que complementassem tudo o que já havíamos observado e estudado nas etapas anteriores do projeto.</p>
      
      <p>Durante cada entrevista, preenchíamos dois questionários diferentes. O primeiro era respondido a partir da conversa com o próprio morador, com perguntas sobre sua experiência no bairro, situações já vivenciadas e percepções sobre os problemas existentes no local.</p>

      <p>O segundo questionário era preenchido por nós, estudantes de Engenharia Civil, a partir da nossa própria observação técnica do entorno. Analisamos aspectos como condições dos taludes, possíveis pontos de alagamento, sinais de umidade nos muros e nas residências, características do terreno e outras situações que poderiam indicar algum tipo de risco.</p>

      <blockquote class="p-3 my-4 rounded-3 border-start border-4" style="background-color: var(--creme); border-color: var(--verde-escuro) !important;">
        <p class="mb-0 fw-semibold" style="color: var(--verde-escuro); text-align: left;">
          “Uma coisa é analisar o bairro como estudante de Engenharia, outra é ouvir quem mora ali todos os dias. Conversando com os moradores, conseguimos perceber detalhes que só a análise técnica não mostraria.”
        </p>
        <cite style="font-size: 14px;">Maria Clara — estudante de Engenharia Civil</cite>
      </blockquote>
      
      <p>A chuva acabou tornando a visita ainda mais importante. Em vez de adiarmos a atividade, entendemos que aquele também era um momento interessante para observar o bairro em uma condição diferente e, principalmente, manter o contato que havíamos planejado com a comunidade.</p>

      <p>Ao final de cada entrevista, também entregamos aos moradores o folder que havíamos preparado anteriormente, com informações sobre as áreas de risco do bairro, sinais de alerta, orientações de prevenção e contatos de emergência. Assim, além de coletarmos informações, também conseguimos levar um pouco do conhecimento desenvolvido pelo projeto até as pessoas.</p>
      
      <p>Nessa primeira etapa das entrevistas, conseguimos conversar com cerca de 15 moradores. Cada relato trouxe uma percepção diferente sobre o bairro e ajudou a complementar aquilo que conseguimos enxergar apenas por meio das análises técnicas.</p>

      <p>Mais do que preencher questionários, essa visita nos permitiu ouvir quem vive diariamente naquela realidade. Aos poucos, estamos juntando o conhecimento aprendido em sala de aula, nossas observações em campo e a experiência dos próprios moradores para construir uma visão cada vez mais completa sobre o bairro Olaria.</p>
    `,
  },
];

// Disponível no escopo global
if (typeof window !== "undefined") {
  window.noticiasDados = noticiasDados;
}
