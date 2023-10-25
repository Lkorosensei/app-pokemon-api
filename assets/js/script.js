console.log("YOUHOOOOOO!");

let dataFetch;
const urlApiPoke = "https://pokebuildapi.fr/api/v1/pokemon/limit/5";
await getDataFetch();
async function getDataFetch() {
    const res = await fetch(urlApiPoke);
    dataFetch = await res.json();
}

console.log("Voici les données récupérées via Fetch : ", dataFetch); // Tableau entier
console.log("Voici les données récupérées via Fetch (nom) : ", dataFetch[0].name); // nom pokemon
console.log("Voici les données récupérées via Fetch (évolution) : ", dataFetch[0].apiEvolutions[0].name); // noms évolutions pokemon
console.log("Voici les données récupérées via Fetch (sprite) : ", dataFetch[0].sprite); // sprite du pokemon jeu
console.log("Voici les données récupérées via Fetch (image) : ", dataFetch[0].image); // image du pokemon
console.log("Voici les données récupérées via Fetch (nom type) : ", dataFetch[0].apiTypes[0].name); // noms type pokemon
console.log("Voici les données récupérées via Fetch (image type) : ", dataFetch[0].apiTypes[0].image); // image type pokemon





let selectNamePoke = document.createElement("select");
let selectTitreChoisirPoke = document.createElement("option")
selectTitreChoisirPoke.innerText = "Choisir votre Pokemon";
document.querySelector(".select-pokemon").appendChild(selectNamePoke)
dataFetch.forEach(pokemon => {
    let namePoke = document.createElement("option");
    namePoke.innerText = pokemon.name;
    console.log("Nom pokemon : ",pokemon.name);
    namePoke.addEventListener("click",function () {
        pokemon.apiEvolutions.forEach(type => {
            console.log("Nom évolutions : ", type.name);
        });
        // document.querySelector(".type-pokemon") 
    })
    selectNamePoke.appendChild(namePoke)
});


