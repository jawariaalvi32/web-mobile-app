let myTodo = [];

function refreshTodo() {
    let myList = document.getElementById('toDo');

    document.getElementById('toDo').innerHTML = '';

    myTodo.map(({id, task, isComplete}, i) => {
        let list = document.createElement("li");
        let clickable = document.createElement("button");
        clickable.innerHTML = task;
        clickable.id = `task-${id}`;
        clickable.className = "btn";
        clickable.setAttribute("onclick", `updateTodo(event, ${i})`);
        list.appendChild(clickable);
        list.className = `list_task ${isComplete ? "done" : "notDone"}`;
        myList.appendChild(list);
    });
}

function updateTodo({ target }, i){
    console.log(target.id, i);
    let flag = myTodo[i].isComplete;
    myTodo[i].isComplete = !flag;
    if(myTodo[i].isComplete){
        popup();
    }
    console.log(myTodo[i]);
    let parent = document.getElementById(target.id).parentElement;
    parent.className = `list_task ${myTodo[i].isComplete ? "done" : "notDone"}`;
}

function createTodo({ target }){
    console.log(target.value);
    let newTodo = {
        'id': myTodo.length + 1,
        'task': target.value,
        'isComplete': false
    };
    target.value = '';
    console.log(newTodo);
    myTodo = [...myTodo, newTodo];
    refreshTodo();
}

function popup(){
    document.getElementById('popup').style.cssText = 'display: flex; justify-content: center;';
    // document.getElementById('popup').innerHTML = "Complete";
    // setTimeout(() => {
    //     document.getElementById('popup').style.display = 'none';
    // }, 1500);
}