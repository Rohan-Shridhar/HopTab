document.getElementById("addBtn").addEventListener("click", showAddCard);
document.getElementById("exeAdd").addEventListener("click", exeAddApp);

let url, name, hostName, subDomain, img;
const card = document.querySelector(".addCard");
const skillicons = ["ableton","activitypub","actix","adonis","ae","aiscript","alpinejs","anaconda","androidstudio","angular","ansible","apollo","apple","appwrite","arch","arduino","astro","atom","au","autocad","aws","azul","azure","babel","bash","bevy","bitbucket","blender","bootstrap","bsd","bun","c","cs","cpp","crystal","cassandra","clion","clojure","cloudflare","cmake","codepen","coffeescript","css","cypress","d3","dart","debian","deno","devto","discord","bots","discordjs","django","docker","dotnet","dynamodb","eclipse","elasticsearch","electron","elixir","elysia","emacs","ember","emotion","express","fastapi","fediverse","figma","firebase","flask","flutter","forth","fortran","gamemakerstudio","gatsby","gcp","git","github","githubactions","gitlab","gmail","gherkin","go","gradle","godot","grafana","graphql","gtk","gulp","haskell","haxe","haxeflixel","heroku","hibernate","html","htmx","idea","ai","instagram","ipfs","java","js","jenkins","jest","jquery","kafka","kali","kotlin","ktor","kubernetes","laravel","latex","less","linkedin","linux","lit","lua","md","mastodon","materialui","matlab","maven","mint","misskey","mongodb","mysql","neovim","nestjs","netlify","nextjs","nginx","nim","nix","nodejs","notion","npm","nuxtjs","obsidian","ocaml","octave","opencv","openshift","openstack","p5js","perl","ps","php","phpstorm","pinia","pkl","plan9","planetscale","pnpm","postgres","postman","powershell","pr","prisma","processing","prometheus","pug","pycharm","py","pytorch","qt","r","rabbitmq","rails","raspberrypi","react","reactivex","redhat","redis","redux","regex","remix","replit","rider","robloxstudio","rocket","rollupjs","ros","ruby","rust","sass","spring","sqlite","stackoverflow","styledcomponents","sublime","supabase","scala","sklearn","selenium","sentry","sequelize","sketchup","solidity","solidjs","svelte","svg","swift","symfony","tailwind","tauri","tensorflow","terraform","threejs","twitter","ts","ubuntu","unity","unreal","v","vala","vercel","vim","visualstudio","vite","vitest","vscode","vscodium","vue","vuetify","wasm","webflow","webpack","webstorm","windicss","windows","wordpress","workers","xd","yarn","yew","zig"]

function showAddCard(){
    card.hidden = false;
}
function exeAddApp(){
    getAppURL();
    getAppIcon();
    addApp();
    card.hidden = true;
}
function getAppURL(){
    url = document.getElementById("url").value;
    console.log(`URL: ${url}`);
    name = document.getElementById("name").value;
    console.log(`App name: ${name}`);
}

function getAppIcon(){
    hostName = new URL(url).hostname;
    console.log(`Host: ${hostName}`);

    getSubdomain();

    let flag = 1;
    for(let i = 0; i<skillicons.length; i++){
        if(subDomain === skillicons[i]){
            flag = 0;
            img = `https://skillicons.dev/icons?i=${subDomain}`;
        }
    }
    if(flag === 1){
        img = `https://www.google.com/s2/favicons?domain=${hostName}&sz=32`;
    }
    console.log(`App icon: ${img}`);
}

function getSubdomain(){
    let flag = 1;
    for(let i = 0; i<4; i++){
        if(i<3 && hostName[i] !== "w"){
            flag = 0;
            break;
        }
    } 

    if(flag == 1){
        subDomain = hostName.split(".")[1];
    }else{
        subDomain = hostName.split(".")[0];
    }
    console.log(`Sub Domain: ${subDomain}`);
}

function addApp(){
    document.querySelector(".main").innerHTML += `<div class="app">
                <a href="${url}" target="_blank">
                    <img src="${img}">
                </a>
                <p>${name}</p>
            </div>`;
}