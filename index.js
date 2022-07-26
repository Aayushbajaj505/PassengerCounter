
/*jshint esversion: 6 */
let count = 0;
let countEl=document.getElementById("count-el");
let saveEl=document.getElementById("save-el");
function increment() {
    count += 1;
    countEl.innerText=count;
    // set countEl's innerText to the count
}
function save() {
    let op=count+" - ";
    saveEl.textContent+=op;
    count=0;
    countEl.innerText=count;
}

