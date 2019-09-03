let selectedaction = localStorage.getItem('action');
let selectedUnit = document.querySelector("#unit-selected-text")
selectedUnit.innerHTML = selectedaction;

if(selectedaction==="Cost Estimate Order") {
    document.getElementById("unit-selected").style.backgroundColor = '#2129ff';
} else if(selectedaction==="Maintenance Order"){
    document.getElementById("unit-selected").style.backgroundColor = '#00b800';
}

descInpt.addEventListener("keyup", function(){
    console.log(descInpt.value)
    if (descInpt.value !== ""){
        $('#nextBtn a').removeClass( 'disabled'); 
        localStorage.setItem('description', descInpt.value);
    }
})

if (localStorage.getItem("description") !== null) {
    $('#nextBtn a').removeClass( 'disabled'); 
}

function onLogout(){
    localStorage.removeItem("unit")
    localStorage.removeItem("qrcode")
    localStorage.removeItem("group")
    localStorage.removeItem("type")
    localStorage.removeItem("year")
    localStorage.removeItem("warranty")
    window.location.href = "../index.html";
}