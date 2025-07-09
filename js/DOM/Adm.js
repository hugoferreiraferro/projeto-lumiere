const cadastro = document.getElementById("Cadastro");
const videosWorkshop = document.getElementById("videosWorkshop");
const formCadastro = document.getElementById("formCadastro");
const containerAddVideios = document.getElementById("containerAddVideios");

videosWorkshop.addEventListener("click", (e) => {
  e.preventDefault();
  formCadastro.style.display = "none";
  containerAddVideios.style.display = "block";
});
cadastro.addEventListener("click", (e) => {
  e.preventDefault();
  containerAddVideios.style.display = "none";
  formCadastro.style.display = "block";
});
