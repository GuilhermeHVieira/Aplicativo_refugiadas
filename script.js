function logar(){

  var Nome = document.getElementById("Nome").value
  var Senha = document.getElementById("Senha").value

  if(Nome == "Usuário1" && Senha == "senha1"){
    alert('sucesso')
   window.location.href = "home.html"
  }else{
    alert('Usuário ou senha incorretos')
  }
}
function salvar(){
  var email = document.getElementById("email").value
  var senha = document.getElementById("senha").value

  localStorage.setItem("login", email)
  localStorage.setItem("senha", senha)
}