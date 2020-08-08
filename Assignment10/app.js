var inbox_count = 0;
function create() {
    inbox_count++;
    document.getElementById("toDo").style.display = "block";

    var ul = document.getElementById("toDo");
    var val = document.getElementById("newTodo").value;

    var li = document.createElement("li");
    var liText = document.createTextNode(val);

    var del = document.createElement("button");
    del.setAttribute("class", "btn btn-sm btn-light");
    del.setAttribute("onclick", "del(this)");

    var i = document.createElement("i");
    i.setAttribute("class", "fa fa-trash");

    var edit = document.createElement("button");
    edit.setAttribute("class", "btn btn-sm btn-light");
    edit.setAttribute("onclick", "edit(this)");

    var edit_i = document.createElement("i");
    edit_i.setAttribute("class", "fa fa-edit");

    var fav = document.createElement("button");
    fav.setAttribute("class", "btn btn-sm btn-light");
    fav.setAttribute("onclick", "favs(this)");

    var fav_i = document.createElement("i");
    fav_i.setAttribute("class", "fa fa-star");

    del.appendChild(i);
    edit.appendChild(edit_i);
    fav.appendChild(fav_i);

    li.appendChild(liText);
    li.appendChild(del);
    li.appendChild(edit);
    li.appendChild(fav);

    ul.appendChild(li);

    document.getElementById("newTodo").value = "";
}

function del(e) {
    inbox_count--;
    e.parentNode.remove();
}

function edit(data) {
    var val = data.parentNode.firstChild.nodeValue;
    var ip = prompt("Enter the edited value", val);

    data.parentNode.firstChild.nodeValue = ip;
}
var fav_count = 0;
function favs(e) {
    var inbox_li = document.getElementById("toDo");
    var fav_li = document.getElementById("fav");

    if( e.style.color == "gold" ) {
        fav_count--;
        inbox_count++;
        inbox_li.appendChild(e.parentNode);
        e.style.color = "black";
        if( fav_count == 0 ) {
            fav_li.style.display = "none";
        }
    } else {
        fav_count++;
        inbox_count--;
        fav_li.appendChild(e.parentNode);
        fav_li.style.display = "block";
        e.style.color = "gold";
        if( inbox_count == 0 ) {
            inbox_li.style.display = "none";
        }
    }
    
}
