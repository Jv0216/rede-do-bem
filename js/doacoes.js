document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("donationForm");
  const successMsg = document.getElementById("donationSuccess");
  const totalRaised = document.getElementById("totalRaised");
  const donationsList = document.getElementById("donationsList");
  const paymentDetails = document.getElementById("paymentDetails");

  let donations = JSON.parse(localStorage.getItem("donations")) || [];
  updateUI();

  document.querySelectorAll(".preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("amount").value = btn.dataset.value;
    });
  });

  document.getElementById("paymentMethod").addEventListener("change", e => {
    const method = e.target.value;
    paymentDetails.innerHTML = "";

    if (method === "pix") {
      const pixCode = "00020126330014BR.GOV.BCB.PIX0114+5599999999995204000053039865405" +
                      document.getElementById("amount").value +
                      "5802BR5925Rede do Bem6009Sao Paulo62070503***6304ABCD";

      paymentDetails.innerHTML = `
        <div class="qr-container">
          <p>Escaneie o QR Code abaixo para doar via PIX:</p>
          <canvas id="pixQr"></canvas>
          <p><small>${pixCode.slice(0, 40)}...</small></p>
        </div>
      `;
      QRCode.toCanvas(document.getElementById("pixQr"), pixCode, { width: 180 });

    } else if (method === "cartao") {
      paymentDetails.innerHTML = `
        <div class="card-fields">
          <input type="text" placeholder="Número do Cartão" maxlength="16" required />
          <input type="text" placeholder="Nome no Cartão" required />
          <input type="text" placeholder="Validade (MM/AA)" maxlength="5" required />
          <input type="text" placeholder="CVV" maxlength="3" required />
        </div>
      `;

    } else if (method === "boleto") {
      const codigo = "23793." + Math.floor(10000000000 + Math.random() * 90000000000) + ".123456789012";
      paymentDetails.innerHTML = `
        <div class="boleto-box">
          <p><strong>Boleto Gerado:</strong></p>
          <p>${codigo}</p>
          <p><em>Válido até ${new Date(Date.now() + 3*86400000).toLocaleDateString()}</em></p>
        </div>
      `;
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("donorName").value;
    const email = document.getElementById("donorEmail").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const method = document.getElementById("paymentMethod").value;

    if (!name || !email || !amount || !method) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    const donation = {
      name,
      email,
      amount,
      method,
      date: new Date().toLocaleString()
    };

    donations.push(donation);
    localStorage.setItem("donations", JSON.stringify(donations));

    successMsg.style.display = "block";
    form.reset();
    paymentDetails.innerHTML = "";
    updateUI();

    setTimeout(() => {
      successMsg.style.display = "none";
    }, 4000);
  });

  function updateUI() {
    const total = donations.reduce((sum, d) => sum + d.amount, 0);
    totalRaised.textContent = `Total Arrecadado: R$${total.toFixed(2)}`;

    donationsList.innerHTML = "";
    donations.slice().reverse().forEach(d => {
      const div = document.createElement("div");
      div.classList.add("donation-item");
      div.innerHTML = `
        💖 <strong>${d.name}</strong> doou <strong>R$${d.amount}</strong> via ${d.method.toUpperCase()} <br>
        <span class="small">${d.date}</span>
      `;
      donationsList.appendChild(div);
    });
  }
});
