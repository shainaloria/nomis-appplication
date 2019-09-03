const groups = [
    "Device Registration", "Cost Estimate Order", "Maintenance Order",
    "Transfer to Storage", "View Device Information", "Open Maintenance Orders"
    ]
    let gridContainer = document.querySelector("#menu-list")
    
    
    groups.forEach(function(group){
        var page = ["devicetype", "unitselection", "unitselection","unitselection","deviceinformation","unitselection"];
        var i = groups.indexOf(group);
        gridContainer.innerHTML += 
        `
        <div class="col-6 p-0">
            <div class="grid-item text-center ripple  pt-3" onClick="goToPage('./`+ page[i] +`.html', '`+group+`')">
                <img src="../assets/images/menu/`+group+`.png" 
                onerror="this.onerror=null;this.src='../assets/images/groups/Default.png';"
                height="56px">
                <p class="grid-item-text">`+group+`</p>
            </div>
        </div>
        `

    })

    function goToPage(page, action){
        localStorage.setItem('action', action);
        setTimeout(function () {
            window.location.href = page;
        }, 400);
    }

    function onLogout(){
        localStorage.removeItem("qrcode")
        window.location.href = "../index.html";
    }