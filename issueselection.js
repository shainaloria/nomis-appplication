const issues = ["Doesn't warn-up or cool", 
    "Door Glass Broken", 
    "Door Handle Broken", 
    "Door hinges Broken",
    "Electric Shock/ grounding issue",
    "For checking of operation",
    "Missing part", 
    "No lights/ electricity",
    "Other issue/ topic"
]

let list = document.querySelector("#menu-list") 
issues.forEach(function(issue){
    list.innerHTML += 
        `
            <div class="list-item ripple" data-value="`+issue+`">
                <i class="fas fa-chevron-right list-item-icon"></i>
                <span>
                    <p class="list-item-text">`+issue+`</p>
                <span>
            </div>
        `
})

let items = document.querySelectorAll(".list-item")
items.forEach(function(item){
    item.addEventListener("click", function(){
        let value = this.querySelector(".list-item-text").innerHTML
        console.log(value)
        localStorage.setItem('issue', value);
        setTimeout(function () {
            window.location.href = "./description.html";
        }, 400);
    })
})

if (localStorage.getItem("issue") !== null) {
    $('#nextBtn a').removeClass( 'disabled'); 
}

let selectedaction = localStorage.getItem('action');
let selectedUnit = document.querySelector("#unit-selected-text")
selectedUnit.innerHTML = selectedaction; 

if(selectedaction==="Cost Estimate Order") {
    document.getElementById("unit-selected").style.backgroundColor = '#2129ff';
} else if(selectedaction==="Maintenance Order"){
    document.getElementById("unit-selected").style.backgroundColor = '#00b800';
}
function onLogout(){
    localStorage.removeItem("unit")
    localStorage.removeItem("qrcode")
    localStorage.removeItem("issue")
    window.location.href = "../index.html";
}