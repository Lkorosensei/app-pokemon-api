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

let boiteImagePokemon = document.createElement("div");
document.querySelector("h1").appendChild(boiteImagePokemon);

let menuSelectNamePoke = document.createElement("select");
let selectTitreChoisirPoke = document.createElement("option")
selectTitreChoisirPoke.innerText = "Choisir votre Pokemon";
document.querySelector("div:nth-child(2)").appendChild(menuSelectNamePoke)
menuSelectNamePoke.appendChild(selectTitreChoisirPoke)
dataFetch.forEach(pokemon => {
    let namePoke = document.createElement("option");
    namePoke.innerText = pokemon.name;
    console.log("Nom pokemon : ",pokemon.name);
    menuSelectNamePoke.appendChild(namePoke)
});
// menuSelectNamePoke.addEventListener("change", function () {
//     let pokemonDemande = dataFetch.find((dataFetchPokemon) => dataFetchPokemon.name == menuSelectNamePoke.value);
//     boiteImagePokemon.innerHTML = "";
//     let imagePokemon = document.createElement("img");
//     imagePokemon.src = pokemonDemande.image;
//     console.log(imagePokemon);
//     boiteImagePokemon.appendChild(imagePokemon);
// })

// console.log(" (nom type) : ", dataFetch[].apiTypes[0].name); // noms type pokemon


menuSelectNamePoke.addEventListener("change", function () {
    // J'affiche mes pokemon sur mon site
    let imagePokemon = document.createElement("img");
    imagePokemon.src = dataFetch[menuSelectNamePoke.selectedIndex-1].image;
    boiteImagePokemon.innerHTML = ""; 
    boiteImagePokemon.appendChild(imagePokemon);
    // J'affiche le nom de mes pokemon
    let nomPokemon = document.createElement("li")
    nomPokemon.innerText = "Nom : " + dataFetch[menuSelectNamePoke.selectedIndex-1].name;
    document.querySelector(".donnees-pokemon").innerHTML = "";
    document.querySelector(".donnees-pokemon").appendChild(nomPokemon)
    // J'affiche le type de mon pokemon
    let typePokemon = document.createElement("li")
    let tableauType = [];
    dataFetch[menuSelectNamePoke.selectedIndex-1].apiTypes.forEach(type => {
        tableauType.push(type.name);    
        console.log("Mon type est : ", type.name);
        typePokemon.innerText = "Types : " + tableauType.join(" et ");
        document.querySelector(".donnees-pokemon").appendChild(typePokemon)
    // J'affiche les évolutions de mon Pokémon
    let evolutionPokemon = document.createElement("li");
    dataFetch[menuSelectNamePoke.selectedIndex-1].apiEvolutions.forEach(evolution => {
        evolutionPokemon.innerText = "Evolution : " + evolution.name;
        document.querySelector("li:last-child").appendChild(evolutionPokemon)
    });
    
    })
    

    
    
   
});


