var $side = document.getElementById("side");
(function body_padding() {
  document.body.style.paddingLeft = $side.offsetWidth;
})();


//show side info
let userImg = document.querySelector(".imguser");

userImg.onclick = function(){
  document.querySelector(".side").classList.add("show-side");
  document.querySelector(".side").firstElementChild.addEventListener('click', function(){
    this.parentNode.classList.remove("show-side")
  })
}

//print scren
function printScreen() {
  window.print()
}

//delet el 
let inpChek = document.querySelectorAll("input[type='checkbox']");
let cils = document.querySelectorAll(".cils").length - 1; 

//change num-el
(function () {
  document.querySelector(".el-num").innerHTML = cils 
})();


function del (){
  inpChek.forEach(el =>{
    if(el.checked == true){
      el.parentNode.parentNode.parentNode.remove();
    }
    let cils = document.querySelectorAll(".cils").length - 1;
    document.querySelector(".el-num").innerHTML = cils;
  })
}

//get first char in name

(function () {
  let names = document.querySelectorAll(".cils .name");
  names.forEach(name =>{
    name.previousElementSibling.innerHTML = name.textContent.substr(0,1);
  })
})();