/**
 * Projeto de Extensão Olaria - IFSP Caraguatatuba
 * Base de dados das notícias com IDs manuais e conteúdos completos
 */

const noticiasDados = [
  {
    id: 1,
    titulo:
      "Mapeamento participativo identifica demandas prioritárias da Olaria",
    categoria: "COMUNIDADE",
    data: "12 de abril de 2024",
    descricao:
      "Equipe do IFSP realizou entrevistas e diagnóstico colaborativo no território.",
    img: "img/banner.jpg",
    conteudo: `
      <p class="lead">O projeto iniciou as atividades de campo com um diagnóstico participativo para identificar os principais desafios urbanos, sociais e ambientais apontados pelos próprios moradores do bairro Olaria.</p>
      
      <p>A pesquisa envolveu visitas técnicas de estudantes e docentes dos cursos de Engenharia Civil e áreas correlatas, aplicando questionários e dinâmicas de cartografia social. Foram abordadas questões fundamentais como drenagem urbana, espaços públicos de convivência, acessibilidade e preservação ambiental.</p>
      
      <blockquote class="p-3 my-4 rounded-3 border-start border-4" style="background-color: var(--creme); border-color: var(--verde-escuro) !important;">
        <p class="mb-0 fw-semibold" style="color: var(--verde-escuro);">"O planejamento comunitário precisa partir de quem vive o dia a dia do bairro. A universidade entra como facilitadora técnica desse processo."</p>
      </blockquote>
      
      <p>Os dados coletados estão sendo sistematizados e servirão de base para orientar projetos de intervenção de baixo impacto e melhorias sustentáveis no bairro ao longo do ano.</p>
    `,
  },
  {
    id: 2,
    titulo: "Oficina de bioarquitetura e técnicas construtivas sustentáveis",
    categoria: "TECNOLOGIA",
    data: "18 de abril de 2024",
    descricao:
      "Capacitação prática demonstrou uso de materiais ecológicos e técnicas de baixo custo.",
    img: "img/galeria4.jpg",
    conteudo: `
      <p class="lead">Estudantes de Engenharia Civil e moradores participaram de uma oficina prática sobre técnicas construtivas sustentáveis, focando no reaproveitamento de materiais e eficiência térmica.</p>
      
      <p>A formação abordou o uso de terra crua, técnicas de taipa e rebocos naturais, além de soluções de drenagem e ventilação natural aplicáveis a reformas e melhorias habitacionais na comunidade.</p>
      
      <p>A atividade buscou resgatar saberes tradicionais da própria história da Olaria, integrando-os a conceitos científicos contemporâneos de sustentabilidade na construção civil.</p>
      
      <blockquote class="p-3 my-4 rounded-3 border-start border-4" style="background-color: var(--creme); border-color: var(--verde-escuro) !important;">
        <p class="mb-0 fw-semibold" style="color: var(--verde-escuro);">"Construir com responsabilidade ambiental é democratizar o conforto e a segurança das habitações com economia de recursos."</p>
      </blockquote>
      
      <p>Novos módulos práticos estão previstos para capacitar pedreiros e ajudantes locais em técnicas de bioengenharia.</p>
    `,
  },
  {
    id: 3,
    titulo: "Caminhada cultural valoriza a história da Olaria",
    categoria: "COMUNIDADE",
    data: "25 de abril de 2024",
    descricao: "Atividade destacou memórias, lugares e identidade local.",
    img: "img/noticia3.jpg",
    conteudo: `
      <p class="lead">A caminhada cultural percorreu os principais pontos históricos e de convivência do bairro Olaria, resgatando memórias e fortalecendo a identidade da comunidade local.</p>
      
      <p>Estudantes, professores do IFSP Campus Caraguatatuba e moradores participaram de um percurso guiado por antigos moradores do bairro. Durante o trajeto, foram compartilhadas histórias sobre a ocupação inicial, as tradições culturais, a produção oleira que deu nome à região e as transformações urbanas ao longo das décadas.</p>
      
      <p>A iniciativa faz parte do eixo cultural do Projeto de Extensão Olaria, que visa documentar saberes populares e produzir materiais educativos em parceria com escolas locais.</p>
      
      <blockquote class="p-3 my-4 rounded-3 border-start border-4" style="background-color: var(--creme); border-color: var(--verde-escuro) !important;">
        <p class="mb-0 fw-semibold" style="color: var(--verde-escuro);">"Conhecer a história do lugar onde vivemos é o primeiro passo para valorizar e transformar nosso território."</p>
      </blockquote>
      
      <p>Ao final da atividade, os participantes se reuniram para uma roda de partilha e avaliação das próximas intervenções comunitárias a serem realizadas no segundo semestre.</p>
    `,
  },
  {
    id: 4,
    titulo: "Roda de conversa sobre juventude e futuro",
    categoria: "EDUCAÇÃO",
    data: "02 de maio de 2024",
    descricao:
      "Encontro promoveu diálogo, escuta e novas ideias para a comunidade.",
    img: "img/noticia2.jpg",
    conteudo: `
      <p class="lead">Um espaço de acolhimento, escuta ativa e planejamento coletivo reuniu jovens moradores da Olaria e acadêmicos do IFSP para discutir perspectivas e oportunidades educacionais e profissionais.</p>
      
      <p>O encontro teve como objetivo mapear os principais anseios da juventude do bairro, abordando temas como primeiro emprego, acesso ao ensino técnico e superior público, cursos de capacitação e espaços de lazer e cultura no território.</p>
      
      <p>Durante a dinâmica, foram formados grupos temáticos para propor ações concretas que possam ser desenvolvidas pelo instituto em cooperação com as associações comunitárias e lideranças locais.</p>
      
      <blockquote class="p-3 my-4 rounded-3 border-start border-4" style="background-color: var(--creme); border-color: var(--verde-escuro) !important;">
        <p class="mb-0 fw-semibold" style="color: var(--verde-escuro);">"A juventude não é apenas o futuro da comunidade; ela é o presente capaz de articular melhorias imediatas quando tem voz e suporte."</p>
      </blockquote>
      
      <p>Como resultado prático da reunião, foram definidos temas prioritários para as próximas oficinas de capacitação profissional e inclusão digital no polo comunitário.</p>
    `,
  },
  {
    id: 5,
    titulo: "Plantio de mudas fortalece o compromisso com o meio ambiente",
    categoria: "MEIO AMBIENTE",
    data: "10 de maio de 2024",
    descricao:
      "Estudantes e moradores se unem em ação sustentável na comunidade da Olaria.",
    img: "img/noticia1.jpg",
    conteudo: `
      <p class="lead">Em uma manhã dedicada à sustentabilidade e à conscientização ecológica, dezenas de moradores e voluntários do IFSP uniram forças para plantar mudas nativas da Mata Atlântica no bairro.</p>
      
      <p>A ação teve como foco a recuperação de encostas e margens de cursos d'água locais, além de arborizar espaços de uso comum e incentivar a criação de pequenas hortas domésticas e comunitárias.</p>
      
      <p>Estudantes do curso de Engenharia Civil e áreas afins orientaram sobre técnicas corretas de preparação do solo, compostagem orgânica e manutenção preventiva das espécies plantadas, garantindo um índice saudável de desenvolvimento das plantas.</p>
      
      <blockquote class="p-3 my-4 rounded-3 border-start border-4" style="background-color: var(--creme); border-color: var(--verde-escuro) !important;">
        <p class="mb-0 fw-semibold" style="color: var(--verde-escuro);">"Cuidar do solo e da vegetação nativa é também prevenir deslizamentos e melhorar a qualidade do ar e da vida para todas as famílias do bairro."</p>
      </blockquote>
      
      <p>Todas as mudas foram doadas por viveiros parceiros e pelo viveiro florestal regional, fortalecendo a rede de cooperação institucional em benefício da comunidade da Olaria.</p>
    `,
  },
];

// Disponível no escopo global
if (typeof window !== "undefined") {
  window.noticiasDados = noticiasDados;
}
