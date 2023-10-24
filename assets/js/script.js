console.log("YOUHOOOOOO!");

let dataFetch;
const urlApiPoke = "https://pokebuildapi.fr/api/v1/pokemon/limit/100";
await getDataFetch();
async function getDataFetch() {
    const res = await fetch(urlApiPoke);
    dataFetch = await res.json();
}
console.log("Voici les données récupérées via Fetch : ", dataFetch[0].name);


let selectNamePoke = document.createElement("select");
let selectTitreChoisirPoke = document.createElement("option")
selectTitreChoisirPoke.innerText = "Choisir votre Pokemon";
selectNamePoke.appendChild(selectTitreChoisirPoke)
document.querySelector(".select-pokemon").appendChild(selectNamePoke)
dataFetch.forEach(pokemon => {
    let namePoke = document.createElement("option");
    namePoke.innerText = pokemon.name
    console.log(pokemon.name);
    selectNamePoke.appendChild(namePoke)
});

