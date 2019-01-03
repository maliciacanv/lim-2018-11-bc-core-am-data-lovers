// conviertiendo la data objeto en array//
const arrDataLolTotal = Object.values(LOL.data);
const arrNamesTotal = Object.keys(LOL.data);
// llamado con el DOM al boton filtrar
const btnFiltrar = document.getElementById('btn-filtrar');

// console.log(arrNamesTotal);
// mostrando el primer historia de usuario //
// llamando al id del contenedor html//
const containerListDatosHTML = document.getElementById('container-listImagens');
const containerListRolesHTML = document.getElementById('container-listRoles');
const contatinerByTags = document.getElementById('container-bytags');
const listaRoles = document.getElementById('list-roles');

// Llamar a mi funcion listarPersonajes -> name, title, img, atackrange//
const arrDataLolPrecisa = lol.championsList(arrDataLolTotal);
//haciendo uso de la función campionList2 que está en data.js
const arrDataLolPrecisa2 = lol.championsList2(arrDataLolTotal);

const firstUser = document.getElementById('topTeam');
firstUser.addEventListener('click', () => {
  for (let i = 0; i < arrDataLolPrecisa.length; i++) {
    containerListDatosHTML.innerHTML +=
      `<div class="card-link">
              <img class="post-image" src="${arrDataLolPrecisa[i].splash}"/>
              <li class="post-name">${arrDataLolPrecisa[i].name}</li>
              <li class="post-title"> ${arrDataLolPrecisa[i].title}</li>
              <li class="post-attackrange">Attackrange: ${arrDataLolPrecisa[i].attackrange}</li>
       </div>`;
  }
});

//Creando template
const crearTemplate = (x) => {  
  x.forEach((x) => {
    contatinerByTags.innerHTML +=
      `<div class="card-bytags">
      <img class="post-image" src="${x.splash}"/>
      <li class="post-name">${x.name}</li>      
    </div>`;
  });
}


//En el click del botón estoy haciendo uso a la función filtrarRoles
btnFiltrar.addEventListener('click', () => {
  const resultFilter = lol.filtrarRoles(arrDataLolPrecisa2, listaRoles.value);
  crearTemplate(resultFilter);
  //console.log(x);
});



// mostrando el segundo historia de usuario //


// eslint-disable-next-line no-unused-vars

// containerListRolesHTML.innerHTML += templateRoles;

// lol.filterData(arrDataLolTotal)