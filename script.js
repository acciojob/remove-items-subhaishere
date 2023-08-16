//your JS code here. If required.
function removeSelectedColor() {
    var colorSelect = document.getElementById("colorSelect");
    var selectedIndex = colorSelect.selectedIndex;

    if (selectedIndex !== -1) { // Check if an option is selected
        colorSelect.remove(selectedIndex);
    }
}