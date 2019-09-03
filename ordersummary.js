const items = [
    "unit", "issue", "descripttion", "deadline", "company", "images"
]      
const summary = [
    "unit", "issue", "deadline", "company"
]      

let selectedaction = localStorage.getItem('action');
let selectedUnit = document.querySelector("#unit-selected-text")
selectedUnit.innerHTML = selectedaction;
let transfertext = 
`
Ticket ID 0000001 transfered to `+localStorage.getItem("company")+`
`

if(selectedaction==="Cost Estimate Order") {
    document.getElementsByTagName("TITLE")[0].textContent = `Cost Order Summary`;
    document.getElementsByTagName("P")[0].textContent = `Cost Order Summary`;
    document.querySelector(".transfer-text").textContent = ``+ transfertext +` for cost order`;
    document.getElementById("cancelBtn").textContent = `CANCEL ORDER`;
    document.getElementById("unit-selected").style.backgroundColor = '#2129ff';
} else if(selectedaction==="Maintenance Order"){
    document.querySelector(".transfer-text").textContent = ``+ transfertext +` for maintenance`
    document.getElementById("unit-selected").style.backgroundColor = '#00b800';
}
let listContainer = document.querySelector("#menu-list")
function showItem(item){
    let result = localStorage.getItem(item)
    listContainer.innerHTML += 
        `
            <div class="layer-list-item ripple">
                <span>
                    <p class="list-item-subtext text-muted">`+item+`</p>
                    <p class="list-item-maintext">`+result+`</p>
                <span>
            </div>
        `
}
summary.forEach(function(item){
    showItem(item)
})
listContainer.innerHTML += 
    `
        <div class="image-list-item ripple">
            <div class="mr-2">
                <p class="list-item-subtext text-muted">Description</p>
                <p class="list-item-maintext">`+localStorage.getItem("description")+`</p>
            <div>
        </div>
    `
listContainer.innerHTML += 
    `
        <div class="image-list-item ripple">
            <span>
                <p class="list-item-subtext text-muted">image(s)</p>
                <div id="imgPreview"></div>
            <span>
        </div>
    `
let images = JSON.parse(localStorage.getItem("images"))
images.forEach(function(image){
    imgPreview.innerHTML += 
    `
    <img src="`+image+`" height="100" alt="Image preview..." class="p-2">
    `
})

function onLogout(){
    items.forEach(function(item){
        localStorage.removeItem(item)
    })
    window.location.href = "../index.html";
}

function getCompany(){
    window.location.href = "./maintenancecompany.html";
}