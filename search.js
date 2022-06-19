let form = document.createElement('form');
let input = document.createElement('input');
let btn = document.createElement("button");

btn.innerHTML = "Clear";
btn.id = "clear";

input.name = 'filter';
input.id = 'search';
input.placeholder = 'Type to search...';

form.appendChild(input);
form.appendChild(btn);

document.querySelector('h1').after(form);

let listItems = [].slice.call(document.querySelectorAll('#list tbody tr'));

input.addEventListener('keyup', function () {
    let i,
    e = "(^|.*[^\\pL])" + this.value.trim().split(/\s+/).join("([^\\pL]|[^\\pL].*[^\\pL])") + ".*$",
    n = RegExp(e, "i");
    listItems.forEach(function(item) {
        item.removeAttribute('hidden');
    });
    listItems.filter(function(item) {
        i = item.querySelector('td').textContent.replace(/\s+/g, " ");
        return !n.test(i);
    }).forEach(function(item) {
  	    item.hidden = true;
    });
});

btn.addEventListener('click', evt => {
    evt.preventDefault();
    input.value = '';
    listItems.forEach(function(item) {
        item.removeAttribute('hidden');
    });
});