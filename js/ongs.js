// ======== Rede do Bem - Página ONGs ========

// Lista de ONGs (você pode adicionar mais livremente)
const ongs = [
  {
    nome: "EducaMais",
    cidade: "Rio de Janeiro",
    tipo: "educacao",
    descricao: "Promove acesso à educação e cursos gratuitos para jovens de baixa renda.",
    imagem: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=60"
  },
  {
    nome: "Cuidar é Viver",
    cidade: "São Paulo",
    tipo: "saude",
    descricao: "Oferece atendimentos médicos e psicológicos voluntários em comunidades.",
    imagem: "https://i.imgur.com/UIyguyZ.jpeg"
  },
  {
    nome: "Lar Esperança",
    cidade: "Belo Horizonte",
    tipo: "abrigo",
    descricao: "Abrigo para crianças em situação de vulnerabilidade social.",
    imagem: "https://i.imgur.com/ArVFGvA.jpeg"
  },
  {
    nome: "Mãos Amigas",
    cidade: "Fortaleza",
    tipo: "saude",
    descricao: "Campanhas de vacinação e ações de saúde preventiva em bairros carentes.",
    imagem: "https://i.imgur.com/3oucW3U.jpeg"
  },
  {
    nome: "Futuro Brilhante",
    cidade: "Curitiba",
    tipo: "educacao",
    descricao: "Oferece reforço escolar e capacitação profissional para adolescentes.",
    imagem: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60"
  },
  {
    nome: "Casa do Sol",
    cidade: "Recife",
    tipo: "abrigo",
    descricao: "Abrigo e reabilitação para pessoas em situação de rua.",
    imagem: "https://i.imgur.com/u8EKX3Q.jpeg"
  }
];

// Seleciona os elementos
const ongsList = document.getElementById("ongsList");
const searchCity = document.getElementById("searchCity");
const filterType = document.getElementById("filterType");

// Função para renderizar os cards
function renderOngs(lista) {
  ongsList.innerHTML = "";

  if (lista.length === 0) {
    ongsList.innerHTML = "<p style='text-align:center; color:#64748b;'>Nenhuma ONG encontrada.</p>";
    return;
  }

  lista.forEach(ong => {
    const card = document.createElement("div");
    card.classList.add("ong-card");

    card.innerHTML = `
      <img src="${ong.imagem}" alt="${ong.nome}" class="ong-img">
      <div class="ong-info">
        <h3>${ong.nome}</h3>
        <p>${ong.descricao}</p>
        <div class="ong-tags">
          <span class="ong-tag">${ong.cidade}</span>
          <span class="ong-tag">${ong.tipo.charAt(0).toUpperCase() + ong.tipo.slice(1)}</span>
        </div>
      </div>
    `;

    ongsList.appendChild(card);
  });
}

// Função de filtro
function filtrarOngs() {
  const cidade = searchCity.value.toLowerCase();
  const tipo = filterType.value;

  const filtradas = ongs.filter(ong => {
    const matchCidade = ong.cidade.toLowerCase().includes(cidade);
    const matchTipo = tipo === "all" || ong.tipo === tipo;
    return matchCidade && matchTipo;
  });

  renderOngs(filtradas);
}

// Eventos
searchCity.addEventListener("input", filtrarOngs);
filterType.addEventListener("change", filtrarOngs);

// Inicializa a página
renderOngs(ongs);
