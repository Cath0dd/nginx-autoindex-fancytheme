let form = document.createElement("form"),
    input = document.createElement("input"),
    btn = document.createElement("button");
btn.innerHTML = "Clear";
btn.id = "clear";
input.name = "filter";
input.id = "search";
input.placeholder = "Type to search...";
form.appendChild(input);
form.appendChild(btn);
document.querySelector("h1").after(form);
let listItems = [].slice.call(document.querySelectorAll("#list tbody tr"));
input.addEventListener("keyup", function () {
    let b,
        c = "(^|.*[^\\pL])" + this.value.trim().split(/\s+/).join("([^\\pL]|[^\\pL].*[^\\pL])") + ".*$",
        d = RegExp(c, "i");
    listItems.forEach(function (a) {
        a.removeAttribute("hidden");
    });
    listItems
        .filter(function (a) {
            b = a.querySelector("td").textContent.replace(/\s+/g, " ");
            return !d.test(b);
        })
        .forEach(function (a) {
            a.hidden = !0;
        });
});
btn.addEventListener("click", (b) => {
    b.preventDefault();
    input.value = "";
    listItems.forEach(function (c) {
        c.removeAttribute("hidden");
    });
});
