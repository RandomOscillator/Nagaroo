const inp = document.getElementById('inp');
const add = document.getElementById('add');
const list= document.getElementById('list');
const del = document.getElementById('del');
const ed= document.getElementById('ed');

add.onclick = function (e)
{
    const todoText =inp.value;
    const li = document.createElement('li');
    li.innerText = todoText;

    li.onclick = function(e){
        console.log(e.target);
        // e.target.remove();
    }

    

    list.append(li);

    inp.value= "";

}