// conviertiendo la data objeto en array//
const arrDataLolTotal = Object.values(LOL.data);
const arrNamesTotal = Object.keys(LOL.data);

console.log(arrNamesTotal);
// mostrando el primer historia de usuario //
// llamando al id del contenedor html//
const containerListDatosHTML = document.getElementById('container-listImagens');

// Llamar a mi funcion listarPersonajes -> name, title, img, atackrange//
const arrDataLolPrecisa = lol.championsList(arrDataLolTotal);
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

// mostrando el segundo historia de usuario //

document.getElementById('filterRoles').style = 'display:none';
const charac = document.getElementById('role');

const navFilter = () => {
  document.getElementById('container-listImagens').style = 'display:none';
  document.getElementById('filterRoles').style = 'display:block';
};

charac.addEventListener('click', navFilter);


const arrDataRoles = lol.filterData(arrDataLolTotal, type);

const type = document.getElementById('filterRoles').input;
const us= () => {
  for (let i = 0; i < type.length; i++) {
    if (type[i].value===true) {
      user = user.value;
    }
  }  
};








// mostrando tercer historia de usuario
const yy = document.getElementById('container-listNames');
const gg = document.getElementById('characteristics');
gg.addEventListener('click', () => {
    yy.innerHTML +={
    }
});


