let options = document.getElementsByClassName("option");
let list = document.getElementById('list');
let selectfield = document.getElementById('selectfield');
let selectText = document.getElementById('text');
let selectimg = document.getElementById('img');

selectfield.onclick = function () {
    list.classList.toggle('hidden');
    selectimg.classList.toggle('rotating')
}
for (option of options) {
    // option.onmouseenter = function () {
    //     option.style.backgroundColor = "white";
    // }
    option.onclick = function () {
        selectText.innerHTML =  this.textContent;
        list.classList.toggle('hidden');
    }
}    

