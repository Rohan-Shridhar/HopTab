document.getElementById("addBtn").addEventListener("click", showAddCard);
document.getElementById("exeAdd").addEventListener("click", exeAddApp);

let url, name, hostName, subDomain;

function showAddCard(){
    document.querySelector(".addCard").hidden = false ;
}
function exeAddApp(){
    getAppURL();


}
function getAppURL(){
    url = document.getElementById("url").value;
    console.log(`URL: ${url}`);
    name = document.getElementById("name").value;
    console.log(`App name : ${name}`);
    getAppIcon();
    addApp();
}

function getAppIcon(){
    hostName = new URL(url).hostname;
    console.log(`Host : ${hostName}`);
    subDomain = hostName.split(".")[0];
    console.log(`Sub Domain : {subDomain}`);
}

function addApp(){
    document.querySelector(".main").innerHTML += `<div class="app">
                <a href="${url}" target="_blank">
                    <img src="https://www.google.com/s2/favicons?domain=${hostName}&sz=32">
                </a>
                <p>${name}</p>
            </div>`;
}