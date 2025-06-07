const btnSimModal = document.getElementById("sim_modal");
const respostaCliente = document.getElementById("res_sim_cliente");
const resCodigo = document.getElementById("res_contado");
const link = document.getElementById("link_contado");
const displayUm = document.querySelector(".displayNoneUm");
const displayDois = document.querySelector(".displayNoneDois");
let contato = "https://wa.me/5511999999999";
btnSimModal.addEventListener("click", () => {
  respostaCliente.textContent = "Sim";
  setTimeout(() => {
    displayUm.style.display = "block";
  }, 1000);
  setTimeout(() => {
    resCodigo.textContent = "Clique no link a seguir.";
  }, 1500);
  setTimeout(() => {
    displayDois.style.display = "block";
  }, 2000);
  setTimeout(() => {
    displayDois.style.display = "none";
  }, 2500);
  setTimeout(() => {
    link.textContent = "Whatsapp";
    link.href = contato;
  }, 2500);
  setTimeout(() => {
    link.textContent = "";
    resCodigo.textContent = "";
    respostaCliente.textContent = "";
  }, 10000);
});

//  botão "Sobre" que leva à seção "Sobre" da página

const btnSobre = document.getElementById("btnSobre");
btnSobre.addEventListener("click", () => {
  const alvoScroll = document.querySelector(".sobre_textos");
  alvoScroll.scrollIntoView({ behavior: "smooth" });
});
