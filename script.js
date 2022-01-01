var input = document.getElementById("input");
var addBtn = document.querySelector(".inputfield button");
var todo_list = document.querySelector(".todo_list");
var caBtn = document.querySelector(".footer button");
input.onkeyup = ()=>{
    var userData = input.value;
    if(userData.trim() != 0){
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active");
    }
}
showtask();

addBtn.onclick = ()=>{
    var userData = input.value;
    let ls = localStorage.getItem("New Todo");
    if(ls == null){
        listArr = [];
    }else{
        listArr = JSON.parse(ls);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showtask();
}

function showtask(){
    let ls = localStorage.getItem("New Todo");
    if(ls == null){
        listArr = [];
    }else{
        listArr = JSON.parse(ls);
    }
    let newLi = "";
    listArr.forEach((element,index) => {
        newLi += `<li> ${element} <span onclick="deleteTodo(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todo_list.innerHTML = newLi;
    input.value = "";
    addBtn.classList.remove("active");
    var num = document.getElementById("num");
    num.innerText = listArr.length;
    if(listArr.length > 0){
        caBtn.classList.add("active");
    }else{
        caBtn.classList.remove("active");
    }
}

function deleteTodo(index){
    let ls = localStorage.getItem("New Todo");
    listArr = JSON.parse(ls);
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showtask();
}
caBtn.onclick = ()=>{
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showtask();
}