document.getElementById("addBtn").addEventListener("click", addApp);

function addApp(){
    document.querySelector(".main").innerHTML += `<div class="app">
                <a href="https://github.com/rohan-shridhar" target="_blank">
                    <img src="https://www.google.com/s2/favicons?domain=github.com&sz=32">
                </a>
                <p>Github</p>
            </div>`;
}