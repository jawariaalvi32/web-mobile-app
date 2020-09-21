firebase.database().ref('todos').on('child_added', function(data) {
    
    document.getElementById("toDo").style.display = "block";

    var ul = document.getElementById("toDo");

    var li = document.createElement("li");
    var liText = document.createTextNode(data.val().value);

    var del = document.createElement("button");
    del.setAttribute("class", "btn btn-sm btn-light");
    del.setAttribute("id",data.val().key);
    del.setAttribute("onclick", "del('todos', this)");

    var i = document.createElement("i");
    i.setAttribute("class", "fa fa-trash");

    var edit = document.createElement("button");
    edit.setAttribute("class", "btn btn-sm btn-light");
    edit.setAttribute("id", data.val().key);
    edit.setAttribute("onclick", "edit('todos', this)");

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

})

firebase.database().ref('fav').on('child_added', function(data) {
    
    document.getElementById("fav").style.display = "block";

    var ul = document.getElementById("fav");

    var li = document.createElement("li");
    var liText = document.createTextNode(data.val().value);

    var del = document.createElement("button");
    del.setAttribute("class", "btn btn-sm btn-light");
    del.setAttribute("id",data.val().key);
    del.setAttribute("onclick", "del('fav', this)");

    var i = document.createElement("i");
    i.setAttribute("class", "fa fa-trash");

    var edit = document.createElement("button");
    edit.setAttribute("class", "btn btn-sm btn-light");
    edit.setAttribute("id", data.val().key);
    edit.setAttribute("onclick", "edit('fav', this)");

    var edit_i = document.createElement("i");
    edit_i.setAttribute("class", "fa fa-edit");

    var fav = document.createElement("button");
    fav.setAttribute("class", "btn btn-sm btn-light text-warning");
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

})

function create() {
    var val = document.getElementById("newTodo").value;

    var ref = firebase.database().ref('todos');
    var key = ref.push().key;
    var todo = { 
        value: val,
        key: key
    }
    ref.child(key).set(todo);
    
    document.getElementById("newTodo").value = "";
}

function add_favs_or_inbox(ref_val,val) {

    var ref = firebase.database().ref(ref_val);
    var key = ref.push().key;
    var todo = { 
        value: val,
        key: key
    }
    ref.child(key).set(todo);
}


function del(ref_val, e) {
    
    firebase.database().ref(ref_val).child(e.id).remove();
    e.parentNode.remove();
}

function edit(ref_val, data) {
    var val = data.parentNode.firstChild.nodeValue;
    var ip = prompt("Enter the edited value", val);

    data.parentNode.firstChild.nodeValue = ip;

    var ref = firebase.database().ref(ref_val);
    var todo = { 
        value: ip,
        key: data.id
    }
    ref.child(data.id).set(todo);
}


function favs(e) {
    var inbox_li = document.getElementById("toDo");
    var fav_li = document.getElementById("fav");

    if( e.className == "btn btn-sm btn-light text-warning" ) {
        inbox_li.appendChild(e.parentNode);
        del('fav', e.parentNode.childNodes[1]);
        add_favs_or_inbox("todos", e.parentNode.innerText);
    } else {
        fav_li.appendChild(e.parentNode);
        add_favs_or_inbox("fav", e.parentNode.innerText);
        del('todos', e.parentNode.childNodes[1]);
    }
    
}
