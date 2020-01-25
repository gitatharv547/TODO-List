var addTodo = document.getElementById('add');
addTodo.addEventListener('click', addItem);
var ul = document.getElementById('myList');
var li;
var input = document.getElementById('input');

function addItem() {

    var value = input.value;

    if (value === '') {
        return false;
    } else {
        var nw = document.createElement('li');
        var myValue = document.createTextNode(value);

        var label = document.createElement('label');
        label.appendChild(myValue);
        var checkBox = document.createElement('input')
        checkBox.type = 'checkbox';
        nw.appendChild(checkBox);
        nw.appendChild(label);
        ul.insertBefore(nw, ul.children[0]);
    }

}

var removeTodo = document.getElementById('remove')
removeTodo.addEventListener('click', removeItem);

function removeItem() {
    li = ul.children;
    for (var i = 0; i < li.length; i++) {
        while (li[i].children[0].checked) {
            ul.removeChild(li[i]);
        }
    }
}