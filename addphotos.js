let images = [];
let preview = document.querySelector('#preview'); 
function previewFile(){
preview.innerHTML += ""
let files = document.querySelector('input[type=file]').files; 

    console.log(files[0])
    for (i=0; i<(files.length && 5); i++){
        read(files[i])

    }
}
function read(file){

let reader  = new FileReader();
reader.onloadend = function () {
    preview.innerHTML += 
    `
        <img src="`+reader.result+`" height="100" alt="Image preview..." class="p-2">
    `
    images.push(reader.result)
    console.log(images)
    localStorage.setItem('images', JSON.stringify(images));
}

    if (file) {
        reader.readAsDataURL(file);
    }
}

let imageBtn = document.querySelector("#image-button")
imageBtn.addEventListener("click", function(){
    addImg.click()
})

let selectedaction = localStorage.getItem('action');
let selectedUnit = document.querySelector("#unit-selected-text")
selectedUnit.innerHTML = selectedaction;

if(selectedaction==="Cost Estimate Order") {
    document.getElementById("unit-selected").style.backgroundColor = '#2129ff';
} else if(selectedaction==="Maintenance Order"){
    document.getElementById("unit-selected").style.backgroundColor = '#00b800';
}

function onLogout(){
    window.location.href = "../index.html";
}