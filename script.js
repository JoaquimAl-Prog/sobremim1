// ==========================================================================
// HORÁRIO DE ATUALIZAÇÃO
// ==========================================================================
function atualizarHorario() {
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, "0");
  const minutos = String(agora.getMinutes()).padStart(2, "0");
  const horarioFormatado = `${horas}:${minutos}`;
  document.getElementById("horario-atualizado").textContent = horarioFormatado;
}

atualizarHorario();

// ==========================================================================
// PONTO DE LUZ SEGUINDO O CURSOR
// ==========================================================================
const raiz = document.documentElement;
let frameLuz = null;

function atualizarLuzDoCursor(evento) {
  if (frameLuz) {
    cancelAnimationFrame(frameLuz);
  }

  frameLuz = requestAnimationFrame(() => {
    raiz.style.setProperty("--mouse-x", `${evento.clientX}px`);
    raiz.style.setProperty("--mouse-y", `${evento.clientY}px`);
  });
}

window.addEventListener("pointermove", atualizarLuzDoCursor);

// ==========================================================================
// TECNOLOGIAS E PROJETOS
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
    categoria: "Back-end",
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
//  USO DO SPREAD OPERATOR (...) PARA EXPANDIR O ARRAY
// ==========================================================================
const meusItens = [
  ...itensIniciais,
  {
    id: 4,
    titulo: "TypeScript",
    categoria: "Back-end",
    descricao: "Tipagem estática para maior segurança e escalabilidade no JS.",
    nivel: "Intermediário (43%)",
  },
];

// Seleção do Container Principal no DOM
const techContainer = document.getElementById("tech-list");

// ==========================================================================
//  FUNÇÃO DE RENDERIZAÇÃO DINÂMICA
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
//  LÓGICA DE FILTRAGEM VIA BOTÕES
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
