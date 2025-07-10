function abrirModal() {
  document.getElementById("modalCertificado").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modalCertificado").style.display = "none";
}

function baixarImagem() {
  alert("Função de download de imagem ainda não implementada.");
}

function compartilharCertificado() {
  if (navigator.share) {
    navigator
      .share({
        title: "Certificado Lumière Estética",
        text: "Confira meu certificado!",
        url: window.location.href,
      })
      .catch(console.error);
  } else {
    alert("Compartilhamento não suportado neste navegador.");
  }
}
