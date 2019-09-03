let dp = DatePicker("rgb(31, 116, 69)");
$("#date-button").click(function() {
    let date = new Date();
    dp.show(date, function(selected) {
        let date = selected.toLocaleDateString()
        console.log(date)
        localStorage.setItem('deadline', date);
        setTimeout(function () {
            window.location.href = "./msummary.html";
        }, 400);
    });
});

let selectedaction = localStorage.getItem('action');
let selectedUnit = document.querySelector("#unit-selected-text")
selectedUnit.innerHTML = selectedaction;

if(selectedaction==="Cost Estimate Order") {
    document.getElementById("unit-selected").style.backgroundColor = '#2129ff';
} else if(selectedaction==="Maintenance Order"){
    document.getElementById("unit-selected").style.backgroundColor = '#00b800';
}

if (localStorage.getItem("warranty") !== null) {
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