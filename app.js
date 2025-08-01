let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function (){
  let li = document.createElement("li");
  li.textContent = inp.value + " ";
  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");


  li.appendChild(delBtn);
  ul.appendChild(li);
  inp.value = "";
});

ul.addEventListener("click",function(event){
  if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});


