const user =  document.getElementById("name")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const buttonLogin = document.getElementById("entrar")

buttonLogin.addEventListener("click", function(event) {
  event.preventDefault()
  if(user.value === "" || pass.value === ""){
    form.classList.add("nono")
    setTimeout(() => {
      form.classList.remove("nono")
    }, 300);
  }else {
    alert(`Login sucessfull - ${user.value}`)
  }
})