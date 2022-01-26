var inputtext = document.querySelector("input");
var addbutton = document.querySelector("button");
var tododata = document.querySelector('.todos');
var count=0;

addbutton.addEventListener('click',function() {
    var data=inputtext.value;
    var para = document.createElement("p");
    para.setAttribute("key",count);
    para.append(data);
    tododata.append(para);
    inputtext.value="";
    count=count+1

    para.addEventListener('click',function(){
        para.remove()
    })
        
})


    





