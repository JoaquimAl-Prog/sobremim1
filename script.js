// ==========================================================================
// 1. ARRAY INICIAL DE TECNOLOGIAS E PROJETOS
// ==========================================================================
const itensIniciais = [
  {
    id: 1,
    titulo: "HTML5 & CSS3",
    categoria: "Front-end",
    descricao: "Construção de layouts responsivos, modernos e acessíveis.",
    nivel: "Avançado (70%)",
  },
  {
    id: 2,
    titulo: "JavaScript (ES6+)",
    categoria: "Front-end",
    descricao: "Manipulação do DOM, requisições assíncronas e lógica dinâmica.",
    nivel: "Intermediário (45%)",
  },
  {
    id: 3,
    titulo: "Git & GitHub",
    categoria: "Ferramentas",
    descricao: "Controle de versão, gerenciamento de repositórios e branches.",
    nivel: "Avançado (78%)",
  },
];

// ==========================================================================
// 2. USO DO SPREAD OPERATOR (...) PARA EXPANDIR O ARRAY
// ==========================================================================
const meusItens = [
  ...itensIniciais,
  {
    id: 4,
    titulo: "APIs REST & Node.js",
    categoria: "Back-end",
    descricao: "Conceitos de rotas, consumo e integração de serviços back-end.",
    nivel: "Iniciante (30%)",
  },
  {
    id: 5,
    titulo: "TypeScript",
    categoria: "Front-end",
    descricao: "Tipagem estática para maior segurança e escalabilidade no JS.",
    nivel: "Intermediário (43%)",
  },
];

// Seleção do Container Principal no DOM
const techContainer = document.getElementById("tech-list");

// ==========================================================================
// 3. FUNÇÃO DE RENDERIZAÇÃO DINÂMICA
// ==========================================================================
function renderizarItens(lista) {
  techContainer.innerHTML = ""; 

  lista.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("tech-card");

    card.innerHTML = `
      <div>
        <span class="tech-category">${item.categoria}</span>
        <h3>${item.titulo}</h3>
        <p>${item.descricao}</p>
      </div>
      <span class="tech-level">${item.nivel}</span>
    `;

    techContainer.appendChild(card);
  });
}

// Renderização Inicial
renderizarItens(meusItens);

// ==========================================================================
// 4. LÓGICA DE FILTRAGEM VIA BOTÕES
// ==========================================================================
const botoesFiltro = document.querySelectorAll(".btn-filter");

botoesFiltro.forEach((botao) => {
  botao.addEventListener("click", () => {
    // Atualiza visualmente qual botão está ativo
    botoesFiltro.forEach((btn) => btn.classList.remove("active"));
    botao.classList.add("active");

    const categoria = botao.getAttribute("data-categoria");

    if (categoria === "Todos") {
      renderizarItens(meusItens);
    } else {
      // filtrar apenas a categoria selecionada
      const filtrados = meusItens.filter(
        (item) => item.categoria === categoria,
      );
      renderizarItens(filtrados);
    }
  });
});
