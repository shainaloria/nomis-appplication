const unit = {
    "country1": {
        "region1": {
            "city1": [
                "Restaurant1", "Restaurant2", "Restaurant3"
            ],
            "city2": [
                "Restaurant4", "Restaurant5"
            ]
        },
        "region2": {
            "city3": [
                "Restaurant6", "Restaurant7", "Restaurant8"
            ],
            "city4": [
                "Restaurant9", "Restaurant10"
            ]
        }
    },
    "country2": {
        "region3": {
            "city5": [
                "Restaurant11", "Restaurant12", "Restaurant13"
            ],
            "city6": [
                "Restaurant14", "Restaurant15"
            ]
        }
    }
}

const menu = {
    "Device Registration":8, 
    "Cost Estimate Order":7, 
    "Maintenance Order":7,
    "Transfer to Storage":0, 
    "View Device Information":0, 
    "Open Maintenance Orders":0
}

let selectedaction = localStorage.getItem('action');
let selectedUnit = document.querySelector("#unit-selected-text")
selectedUnit.innerHTML = selectedaction;

if(selectedaction==="Cost Estimate Order") {
    document.getElementById("unit-selected").style.backgroundColor = '#2129ff';
    document.getElementById("next-btn").setAttribute("href","./issueselection.html")

} else if(selectedaction==="Maintenance Order"){
    document.getElementById("unit-selected").style.backgroundColor = '#00b800';
}

window.addEventListener('load', getUnit(unit));

function getPath(obj, val, path) {
    let listContainer = document.querySelector("#menu-list") 
    path = path || "";
    let fullpath = "";
    for (let b in obj) {
        if (obj[b] === val) {
            listContainer.innerHTML += 
                `
                    <div class="layer-list-item ripple" data-value="`+val+`">
                        <i class="fas fa-chevron-right layered-list-item-icon"></i>
                        <span>
                            <p class="list-item-maintext">`+val+`</p>
                            <p class="list-item-subtext text-muted">`+path+`</p>
                        <span>
                    </div>
                `
        }
        else if (typeof obj[b] === "object") {
            if (path == "") fullpath = getPath(obj[b], val, b) || fullpath;
            else fullpath = getPath(obj[b], val, path + ", " + b) || fullpath;
        }
    }
    return fullpath;
}

let list = document.querySelector("#menu-list")
function getUnit(location){ 
    Object.keys(location)
    .forEach(a => {
        if (location[a] instanceof Object){
            console.log(a)
            // location += ", " + a
            getUnit(location[a])
            // console.log(location[a])
        } else {
            getPath(unit, location[a])
            console.log(location[a])
        }
    });
}

let items = document.querySelectorAll(".layer-list-item")
items.forEach(function(item){
    item.addEventListener("click", function(){
        let value = this.querySelector(".list-item-maintext").innerHTML
        console.log(value)
        localStorage.setItem('unit', value);
        if (localStorage.getItem("action") == "Device Registration"){
            setTimeout(function () {
                window.location.href = "./devicegroup.html";
            }, 400);
        }
        else if (localStorage.getItem("action") == "Cost Estimate Order"){
            setTimeout(function () {
                window.location.href = "./issueselection.html";
            }, 400);
        } else if (localStorage.getItem("action") == "Maintenance Order"){
            setTimeout(function () {
                window.location.href = "./issueselection.html";
            }, 400);
        } else if (localStorage.getItem("action") == "Transfer to Storage") {
            document.querySelector("#alert-text").innerHTML = `Transfer device to `+value+`?`
            $('#alert').modal('toggle');
        } else {
            setTimeout(function () {
                window.location.href = "./unitselection.html";
            }, 400);
        }
    })
})

let indicator = document.querySelector("#page-indicator")
for (page=0; page<menu[localStorage.getItem("action")]; page++){
    indicator.innerHTML += 
    `
    <span class="dot"></span>
    `
}

function onTransfer (){
    window.location.href = "./transfersummary.html";
}

if (localStorage.getItem("unit") !== null) {
    $('#nextBtn a').removeClass( 'disabled'); 
    if (localStorage.getItem("action") == "Device Registration")
        $('#nextBtn a').attr("href", "./devicegroup.html")
    else if (localStorage.getItem("action") === "Cost Estimate Order" || "Maintenance Order")
        $('#nextBtn a').attr("href", "./issueselection.html")
}

function onLogout(){
    localStorage.removeItem("unit")
    window.location.href = "../index.html";
}