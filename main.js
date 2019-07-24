function oldfetch(ejemplo) {
    fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
    method: "Get",
    headers: {
        "X-API-KEY": "dCpvKNKoJwqTIfHErrWzFSIUakuG3ZaTbcLxbu8k"
    }
    })
    .then(function(response) {
   return response.json()
    // return es para retornar la informacion de la sedunda promesa(es necesario ponerlo para sacar el siguiente .then fuera)
    // este then se llama callback
    
    })
    .then (function(data){
    console.log(data.results[0].members);
    // se ponen las funciones a llamar en este then.
    
    })
    .catch(function (error) {
    console.log(error);
    
    
    })
    
}



// fetch es una request es decir una llamada a una base de datos
// network en inspeccionar el elemento se utiliza para ver las llamadas.


console.log("hello world");

// fetch("https://api.propublica.org/congress/v1/113/senate/members.json");
// CRUD

// C -> create -> POST
// R -> read -> GET
// U -> update -> PUT
// D -> delete -> DELETE

async function newFetch(ejemplo) {

    let sonia =await fetch("senate.json");
    let pan = await sonia.json();
    console.log(pan);
    
}



