# CSS No-no animation

check it out: https://gleydsonbrito.github.io/no-no-animation/

##CSS

```
...
.form-login {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #FFF;
  width: 20%;
  border: 2px solid gray;
  border-radius: 10px;
  padding: 40px; 
}

.nono {
  animation-name: no-no;
  animation-duration: 0.3s;
  animation-timing-function: linear;
  border: 2px solid red;

}

@keyframes no-no {
  0% {left: 0px;}
  20% {left: -20px;}
  40% {left: 20px;}
  60% {left: -20px;}
  80% {left: 20px;}
  100% {left: 0px;}
}

.form-login input, button {
  margin-bottom: 10px;
}

.form-login input {
  border: none;
  border-bottom: 1px solid gray;
  font-size: medium;
  line-height: 15px;
  outline: none;
}

.form-login button {
  border: none;
  padding: 8px 0;
  border-radius: 3px;
  font-size: medium;
  background-color: lightblue;
}

.form-login button:hover {
  background-color:cornflowerblue;
  font-weight: bold;
  color: #fff;
  transition: all 0.3s;
  transform: scale(1.03);
}
```

##script
```
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
```
