// conviertiendo la data objeto en array//
const arrDataLolTotal = Object.values(LOL.data);
const containerListDatosHTML = document.getElementById('container-listImagens');
// Llamar a mi funcion listarPersonajes -> name, title, img, atackrange//
const arrDataLolPrecisa = lol.championsList(arrDataLolTotal);
const firstUser = document.getElementById('topteam');
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
console.log(containerListDatosHTML);


const containerListRolesHTML = document.getElementById('container-listRoles');
const arrListDeRoles = lol.championsPerRoles(arrDataLolTotal);
const firstUserRol = document.getElementById('assassin');
firstUserRol.addEventListener('click', () => {
  for (let i = 0; i < arrListDeRoles.length; i++) {
    containerListRolesHTML.innerHTML +=
      `<div class ="card-list">
          <img class ="image" src = "${arrListDeRoles[i].splash}"/>
          <li class ="name"> ${arrListDeRoles[i].name}</li>
        </div>`;
  }
});
console.log(containerListRolesHTML);
console.log(firstUserRol);
