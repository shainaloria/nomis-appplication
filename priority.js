const priorities = [
    "Low", 
    "Medium", 
    "High", 
    "Critical",
    "Planning"
]

let list = document.querySelector("#menu-list") 
priorities.forEach(function(priority){
    list.innerHTML += 
        `
            <div class="list-item ripple" data-value="`+priority+`">
                <i class="fas fa-chevron-right list-item-icon"></i>
                <span>
                    <p class="list-item-text">`+priority+`</p>
                <span>
            </div>
        `
})

let items = document.querySelectorAll(".list-item")
items.forEach(function(item){
    item.addEventListener("click", function(){
        let value = this.querySelector(".list-item-text").innerHTML
        console.log(value)
        localStorage.setItem('priority', value);
        setTimeout(function () {
            window.location.href = "./description.html";
        }, 400);
    })
})

if (localStorage.getItem("priority") !== null) {
    $('#nextBtn a').removeClass( 'disabled'); 
}

let selectedaction = localStorage.getItem('action');
let selectedUnit = document.querySelector("#unit-selected-text")
selectedUnit.innerHTML = selectedaction; 
document.getElementById("unit-selected").style.backgroundColor = '#00b800';

function onLogout(){
    localStorage.removeItem("unit")
    localStorage.removeItem("qrcode")
    localStorage.removeItem("priority")
    window.location.href = "../index.html";
}