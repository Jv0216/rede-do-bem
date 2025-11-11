// ======== Rede do Bem - Voluntários ========

// Seleciona os elementos da página
const volForm = document.getElementById("volForm");
const volList = document.getElementById("volList");
const volSuccess = document.getElementById("volSuccess");

// Recupera voluntários já salvos
let voluntarios = JSON.parse(localStorage.getItem("voluntarios")) || [];

// Função para renderizar a lista de voluntários
function renderVoluntarios() {
  volList.innerHTML = "";

  if (voluntarios.length === 0) {
    volList.innerHTML = "<p style='text-align:center; color:#64748b;'>Nenhum voluntário cadastrado ainda.</p>";
    return;
  }

  voluntarios.forEach((v) => {
    const card = document.createElement("div");
    card.classList.add("vol-card");

    card.innerHTML = `
      <h4>${v.nome}</h4>
      <p><strong>Cidade:</strong> ${v.cidade}</p>
      <p><strong>Área:</strong> ${v.area.charAt(0).toUpperCase() + v.area.slice(1)}</p>
      <p><em>${v.mensagem || "Sem mensagem adicional"}</em></p>
    `;

    volList.appendChild(card);
  });
}

// Função para lidar com envio do formulário
volForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("vname").value.trim();
  const email = document.getElementById("vemail").value.trim();
  const cidade = document.getElementById("vcity").value.trim();
  const area = document.getElementById("varea").value;
  const mensagem = document.getElementById("vmessage").value.trim();

  if (!nome || !email || !cidade) {
    alert("Por favor, preencha todos os campos obrigatórios!");
    return;
  }

  const novoVoluntario = { nome, email, cidade, area, mensagem };

  voluntarios.push(novoVoluntario);
  localStorage.setItem("voluntarios", JSON.stringify(voluntarios));

  // Limpa o formulário
  volForm.reset();

  // Mostra mensagem de sucesso
  volSuccess.style.display = "block";
  setTimeout(() => (volSuccess.style.display = "none"), 3000);

  // Atualiza a lista
  renderVoluntarios();
});

// Inicializa a lista ao carregar a página
renderVoluntarios();
