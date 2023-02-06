const  itemButtons = document.getElementsByClassName('category-btn');
function displayCategory() {
    for(var i=0; i<itemButtons.length; i++) {
        itemButtons[i].onclick = function(e) {
            this.classList.toggle('btn-is__active');
        } 
    }
}
     
       
       // hiện ra thanh chọn giá
function selectPrice() {
    const properSection =  document.querySelector('.subcategory-contain');
    properSection.onclick = function() {
    document.querySelector('.subcategory-contain__subproper').classList.toggle('is__subproper');

    }
}


      //
const valueItem = document.getElementsByClassName('subproper-item');
function updateValue() {
    for(var i=0; i<valueItem.length; i++) {
        valueItem[i].onclick = function() {
            document.getElementById("selection-input").value = this.textContent.trim();

        }
    }
} 
window.onload = function() {
    displayCategory();
    selectPrice();
    updateValue();
} 
 