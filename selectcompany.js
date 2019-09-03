const priorities = [
    "Comenda", 
    "Fagor", 
    "Kopal", 
    "Metos",
    "Krupp"
]

let list = document.querySelector("#menu-list") 
priorities.forEach(function(priority){
    list.innerHTML += 
        `
            <div class="list-item ripple" data-value="`+priority+`">
                <i class="fas fa-phone btn-icon list-item-icon"></i>
                <i class="fas fa-arrow-right btn-icon list-item-icon mr-5"></i>
                <span>
                    <p class="list-item-text">`+priority+`</p>
                <span>
            </div>
        `
})

 

let items = document.querySelectorAll(".list-item")
items.forEach(function(item){
    item.addEventListener("click", function(e){
        let value = this.querySelector(".list-item-text").innerHTML
        if (e.target.classList.contains("fa-phone")) {
            localStorage.setItem('company', value);
            document.querySelector("#alert-text").innerHTML = `Transfer maintenance order ticket to `+value+`?`
            $('#alert').modal('toggle');
        } else if (e.target.classList.contains("fa-arrow-right")) {
            localStorage.setItem('company', value);
            setTimeout(function () {
                 window.location.href = "./ordersummary.html";
            }, 400);
        }
    })
})


let selectedaction = localStorage.getItem('action');
let selectedUnit = document.querySelector("#unit-selected-text")
selectedUnit.innerHTML = selectedaction;

if(selectedaction==="Cost Estimate Order") {
    document.getElementById("unit-selected").style.backgroundColor = '#2129ff';
} else if(selectedaction==="Maintenance Order"){
    document.getElementById("unit-selected").style.backgroundColor = '#00b800';
}
function onTransfer (){
    window.location.href = "./ordersummary.html";
}

if (localStorage.getItem("priority") !== null) {
    $('#nextBtn a').removeClass( 'disabled'); 
}

function onLogout(){
    localStorage.removeItem("unit")
    localStorage.removeItem("qrcode")
    localStorage.removeItem("priority")
    window.location.href = "../index.html";
}