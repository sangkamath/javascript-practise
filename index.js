
/*
alert( Array.from(document.body.childNodes).filter );
// parent of <body> is <html>
alert( document.body.parentNode === document.documentElement ); // true

// after <head> goes <body>
alert( document.head.nextSibling ); // HTMLBodyElement

// before <body> goes <head>
alert( document.body.previousSibling ); // HTMLHeadElement

alert( document.documentElement.parentNode ); // document
alert( document.documentElement.parentElement ); // null


for(let elem of document.body.children) {
    alert(elem);
}

console.log(table);
let td = table.rows[0].cells[1];
td.style.backgroundColor = "red";

var elem = document.body.children;
console.log(elem[0]);
console.log(elem[1]);
console.log(elem[1].children[1]);

let table = document.body.firstElementChild;
let tablebody = table.children[0];
let rows = tablebody.rows;
console.log(tablebody);
console.log(rows);
for(var i= 0; i < rows.length; i++) {
    var currentRow = rows[i];
    var td = currentRow.children[i];
    td.style.backgroundColor = 'red';
}
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
}  
  
The table with id="age-table".
All label elements inside that table (there should be 3 of them).
The first td in that table (with the word “Age”).
The form with name="search".
The first input in that form.
The last input in that form



var tableElem = document.getElementById("age-table");
console.log(tableElem);
var tlabels1 = tableElem.getElementsByTagName("label");
console.log(tlabels1);
var tlabels2 = document.querySelectorAll("#age-table label");
console.log(tlabels2);
var tdOne1 = tableElem.rows[0].cells[0];
var tdOne2 = tableElem.getElementsByTagName("td")[0];
var tdOne3 = tableElem.querySelector("td");
console.log(tdOne1);
console.log(tdOne2);
console.log(tdOne3);
var formsearchOne = document.getElementsByName("search")[0];
var formsearchTwo = document.querySelector('form[name="search"]');
console.log(formsearchOne);
console.log(formsearchTwo);

var inputOne = formsearchOne.getElementsByTagName("input")[0];
var inputTwo = formsearchOne.querySelector("input");
console.log(inputOne);
console.log(inputTwo);
let inputs = formsearchOne.querySelectorAll("input");
console.log(inputs[inputs.length - 1]);

*/

