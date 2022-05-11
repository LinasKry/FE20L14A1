//var text = document.querySelectorAll("input")[0];
var text1 = document.querySelectorAll("input")[0];
var text2 = document.querySelectorAll("input")[1];
var text3 = document.querySelectorAll("input")[2];
var submit = document.querySelectorAll("input")[3];

function delrow() {
  document.getElementById("tbl").deleteRow(-1);
}
function delrow1() {
  document.getElementById("tbl").deleteRow(1);
}
submit.addEventListener("click", function addrow() {
  var text1 = document.querySelectorAll("input")[0].value;
  var text2 = document.querySelectorAll("input")[1].value;
  var text3 = document.querySelectorAll("input")[2].value;
  var table = document.getElementById("tbl");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = text1;
  cell2.innerHTML = text2;
  cell3.innerHTML = text3;
  text1.value = "";
});
