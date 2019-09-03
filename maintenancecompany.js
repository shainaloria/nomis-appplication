let selectedaction = localStorage.getItem('action');
let selectedUnit = document.querySelector("#unit-selected-text")
selectedUnit.innerHTML = selectedaction;

if(selectedaction==="Cost Estimate Order") {
    document.getElementsByTagName("TITLE")[0].textContent = `Company`;
    document.getElementsByTagName("P")[0].textContent = `Company`;
    document.getElementsByTagName("P")[1].textContent = `Transfer cost order ticket to Krupp?`;
    document.getElementById("cost-button").remove();
    document.getElementById("unit-selected").style.backgroundColor = '#2129ff';
} else if(selectedaction==="Maintenance Order"){
    document.getElementById("unit-selected").style.backgroundColor = '#00b800';
}

function onTransfer (){
    localStorage.setItem("company", "Krupp")
    window.location.href = "./ordersummary.html";
}

function onSelect(){
    window.location.href = "./selectcompany.html";
}

function onLogout(){
    window.location.href = "../index.html";
}