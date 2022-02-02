

var input_data= document.querySelector("input");
var addbtn=document.querySelector(".todoslist");
var tododata=document.querySelector(".todospending");
var tododatacompleted=document.querySelector(".todoscompleted");

addbtn.addEventListener('click',fetchapi())


function fetchapi(){

    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res=>res.json())
    .then(data=>fetchdata(data))   
}
function fetchdata(data){
    for (i=0;i<data.length;i++){
        each=data[i]
        if (each.completed===true){
            let para=document.createElement('p');
            para.innerHTML=each.title;
            para.style.color='red';
            tododatacompleted.appendChild(para);
        }
        else if(each.completed===false){
            let para=document.createElement('p');
            para.innerHTML=each.title;
            para.style.color='green';
            tododata.appendChild(para);
        }
    }
}