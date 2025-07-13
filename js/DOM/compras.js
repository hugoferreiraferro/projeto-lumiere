const form = document.getElementById("payment-form");
const modal = document.getElementById("payment-modal");
const modalContent = document.getElementById("modal-content");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const selected = document.querySelector('input[name="payment"]:checked');
  if (!selected) {
    alert("Por favor, selecione uma forma de pagamento.");
    return;
  }

  let content = "";
  switch (selected.value) {
    case "credit":
    case "debit":
      content = `
          <h3>Dados do Cartão</h3>
          <label for="card-number">Número do Cartão</label>
          <input type="text" id="card-number" placeholder="0000 0000 0000 0000" />
          <label for="name">Nome no Cartão</label>
          <input type="text" id="name" placeholder="Nome completo" />
          <label for="valid">Validade</label>
          <input type="text" id="valid" placeholder="MM/AA" />
          <label for="cvv">CVV</label>
          <input type="text" id="cvv" placeholder="123" />
          <button class="close-modal" onclick="closeModal()">Fechar</button>
        `;
      break;
    case "pix":
      content = `
          <h3>Pagamento via Pix</h3>
          <p>Escaneie o QR Code abaixo:</p>
          <img class="qr" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=chavepix123" alt="QR Code Pix" />
          <button class="close-modal" onclick="closeModal()">Fechar</button>
        `;
      break;
    case "boleto":
      content = `
          <h3>Gerar Boleto Bancário</h3>
          <label for="email">Informe seu e-mail</label>
          <input type="email" id="email" placeholder="seu@email.com" />
          <button class="close-modal" onclick="closeModal()">Fechar</button>
        `;
      break;
  }

  modalContent.innerHTML = content;
  modal.style.display = "flex";
});

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};
