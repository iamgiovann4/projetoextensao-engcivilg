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
        <cite style="font-size: 14px;">Maria Clara — estudante de Engenharia Civil</cite>'
      </blockquote>
      
      <p>A chuva acabou tornando a visita ainda mais importante. Em vez de adiarmos a atividade, entendemos que aquele também era um momento interessante para observar o bairro em uma condição diferente e, principalmente, manter o contato que havíamos planejado com a comunidade.</p>

      <p>Ao final de cada entrevista, também entregamos aos moradores o folder que havíamos preparado anteriormente, com informações sobre as áreas de risco do bairro, sinais de alerta, orientações de prevenção e contatos de emergência. Assim, além de coletarmos informações, também conseguimos levar um pouco do conhecimento desenvolvido pelo projeto até as pessoas.</p>
      
      <p>Nessa primeira etapa das entrevistas, conseguimos conversar com cerca de 13 moradores. Cada relato trouxe uma percepção diferente sobre o bairro e ajudou a complementar aquilo que conseguimos enxergar apenas por meio das análises técnicas.</p>

      <p>Mais do que preencher questionários, essa visita nos permitiu ouvir quem vive diariamente naquela realidade. Aos poucos, estamos juntando o conhecimento aprendido em sala de aula, nossas observações em campo e a experiência dos próprios moradores para construir uma visão cada vez mais completa sobre o bairro Olaria.</p>
    `,
  },

  {
    id: 6,
    titulo:
      "Experiência com moradores orienta melhorias no questionário de entrevistas",
    categoria: "PREVENÇÃO",
    data: "05 de outubro de 2026",
    descricao:
      "Após a segunda visita, compartilhamos nossas experiências e aprimoramos o questionário para as próximas entrevistas.",
    img: "img/noticia52.jpeg",
    conteudo: `
      <p class="subtitulo"><strong><i>Após a segunda visita ao bairro Olaria, nos reunimos em sala de aula, no dia 5 de outubro, para compartilhar as experiências das entrevistas com os moradores. A partir dos relatos dos grupos, identificamos alguns pontos que poderiam ser melhorados no questionário utilizado durante a visita, buscando tornar as próximas entrevistas mais simples, organizadas e confortáveis para os participantes.</i></strong></p>
      
      <p>Durante a aula, cada grupo teve a oportunidade de contar como foi a experiência de conversar com os moradores, compartilhar suas impressões sobre a visita e comentar as dificuldades encontradas durante as entrevistas. Esse momento foi importante para entendermos como o questionário funcionou na prática e quais aspectos precisavam de ajustes.</p>
      
      <p>Ao reunirmos os relatos, percebemos que o formulário estava muito extenso e que algumas perguntas acabavam deixando os moradores um pouco desconfortáveis. Além disso, notamos que a sequência de determinadas questões poderia ser melhor organizada para que a conversa acontecesse de maneira mais natural.</p>

      <p>Diante dessas observações, o professor propôs que fizéssemos uma revisão do questionário, reduzindo a quantidade de perguntas e reformulando aquelas que poderiam ser mais claras e objetivas. Para isso, o formulário foi dividido em três partes, e cada grupo ficou responsável por analisar uma delas.</p>
      
      <p>Durante a atividade, discutimos quais perguntas realmente eram necessárias, quais poderiam ser retiradas e como poderíamos melhorar a forma de abordar determinados assuntos. Também reorganizamos a ordem das questões, procurando criar uma sequência mais lógica, em que uma pergunta se relacionasse com a seguinte, evitando mudanças muito repentinas de assunto.</p>

      <blockquote class="p-3 my-4 rounded-3 border-start border-4" style="background-color: var(--creme); border-color: var(--verde-escuro) !important;">
        <p class="mb-0 fw-semibold" style="color: var(--verde-escuro); text-align: left;">
          “Depois de conversar com os moradores, percebemos que algumas perguntas precisavam ser melhoradas. Essa experiência nos ajudou a tornar o questionário mais simples e confortável para as próximas entrevistas.”
        </p>
        <cite style="font-size: 14px;">Giovanna Nicolau — estudante de Engenharia Civil</cite>'
      </blockquote>

      <p>Ao final, cada grupo apresentou suas sugestões ao professor, para que pudéssemos avaliar se as alterações estavam coerentes com os objetivos do projeto e se o questionário continuava reunindo as informações necessárias para nossas análises.</p>
      
      <p>Essa atividade nos mostrou a importância de colocar em prática aquilo que planejamos em sala de aula. Foi a partir do primeiro contato com os moradores que conseguimos perceber dificuldades que talvez não tivéssemos identificado apenas durante a elaboração do formulário.</p>

      <p>Com essa experiência, conseguimos aperfeiçoar o questionário e nos preparar melhor para a próxima visita ao bairro Olaria, buscando tornar as entrevistas mais naturais e respeitosas, sem deixar de coletar informações importantes para o desenvolvimento do projeto.</p>
    `,
  },

  {
    id: 7,
    titulo:
      "Estudantes preparam atividade de cartografia social para escola de ensino médio",
    categoria: "PREVENÇÃO",
    data: "26 de outubro de 2026",
    descricao:
      "Organizamos os materiais e planejamos uma atividade de cartografia social que será realizada com alunos do ensino médio.",
    img: "img/noticia52.jpeg",
    conteudo: `
      <p class="subtitulo"><strong><i>Em sala de aula, nos organizamos para preparar uma atividade de cartografia social que será realizada com alunos do ensino médio. Dividimos as tarefas entre os grupos e desenvolvemos os materiais que serão utilizados na escola E.E. Benedita Pinto Ferreira, buscando tornar a atividade mais dinâmica e participativa.</i></strong></p>
      
      <p>Para organizar a atividade, cada grupo ficou responsável por uma parte da preparação. O primeiro elaborou a apresentação que será utilizada para explicar aos alunos o que é a cartografia social e como a atividade irá funcionar. O segundo ficou responsável pela preparação do mapa, enquanto o terceiro desenvolveu as legendas que serão utilizadas pelos estudantes durante a atividade.</p>
      
      <p>A proposta é utilizar o mapa e as legendas para que os alunos possam representar suas percepções sobre o território onde vivem, compartilhando seus conhecimentos e experiências sobre o local. Dessa forma, buscamos conhecer melhor a visão dos estudantes e entender como eles percebem os espaços ao seu redor.</p>

      <p>Depois que os materiais ficaram prontos, cada grupo apresentou o que havia desenvolvido para os demais colegas e para o professor. Esse momento foi importante para conferirmos se todas as partes estavam organizadas e se os materiais funcionariam bem juntos durante a atividade.</p>
      
      <p>Além disso, o professor nos orientou sobre como deveríamos conduzir a cartografia social na escola, explicando a dinâmica da atividade e como poderíamos auxiliar os alunos durante sua realização.</p>

      <blockquote class="p-3 my-4 rounded-3 border-start border-4" style="background-color: var(--creme); border-color: var(--verde-escuro) !important;">
        <p class="mb-0 fw-semibold" style="color: var(--verde-escuro); text-align: left;">
          “Preparar essa atividade nos ajudou a entender melhor como funciona a cartografia social e como podemos trabalhar com os alunos para conhecer a visão deles sobre o lugar onde vivem.”
        </p>
        <cite style="font-size: 14px;">Yasmin Paz — estudante de Engenharia Civil</cite>'
      </blockquote>

      <p>Durante o planejamento, também precisamos antecipar a data da visita à escola, devido à aplicação do Provão Paulista, que estava prevista para começar nas escolas. Com essa mudança, reorganizamos nosso cronograma para que a atividade pudesse acontecer antes do período de avaliações.</p>
      
      <p>Essa preparação foi importante para alinharmos os materiais, esclarecermos nossas dúvidas e nos organizarmos para o contato com os estudantes. Agora, com as atividades planejadas, esperamos colocar em prática o que desenvolvemos em sala de aula e conhecer um pouco mais sobre o território a partir da percepção dos próprios alunos.</p>
    `,
  },
];

// Disponível no escopo global
if (typeof window !== "undefined") {
  window.noticiasDados = noticiasDados;
}
