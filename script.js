//your JS code here. If required.
let removeBtn = document.getElementById("removeBtn");
let select = document.getElementById("colorSelect");

function removeOption(){
	select.remove(select.selectedIndex);
}