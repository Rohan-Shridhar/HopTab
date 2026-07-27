document.getElementById("addBtn").addEventListener("click", showAddCard);
document.getElementById("exeAdd").addEventListener("click", exeAddApp);

function showAddCard(){
    document.querySelector(".addCard").hidden = false ;
}
function exeAddApp(){
    getAppURL();


}
function getAppURL(){
    let url = document.getElementById("url").value;
    console.log(url);
}
function addApp(){
    document.querySelector(".main").innerHTML += `<div class="app">
                <a href="https://github.com/rohan-shridhar" target="_blank">
                    <img src="https://www.google.com/s2/favicons?domain=github.com&sz=32">
                </a>
                <p>Github</p>
            </div>`;
}