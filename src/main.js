// conviertiendo la data objeto en array//
const arrDataLolTotal = Object.values(LOL.data);
// llamando a los id de html //
const containerPrincipal = document.getElementById('container-listChampions');
document.getElementById('screem-top').style = 'display:none';
const buttonfirstUser = document.getElementById('topTeam');
const containerTopTeam = document.getElementById('container-topTeam');

document.getElementById('screem-filterRolesAndCharacteristics').style = 'display:none';
const buttonSecondAndThirdUser = document.getElementById('rolAndCharacteristics');
const selectionRoles = document.getElementById('list-roles');
const buttonFilterRoles = document.getElementById('button-filterRol');
const containerFilterRoles = document.getElementById('container-filterRoles');

const selectionOption = document.getElementById('selection');
const containerFilterInfo = document.getElementById('container-filterInfo');
const buttonFilter = document.getElementById('button-filterInfo');
// mostrando todos los campeones en la pagina principal 
const createTemplateCard = (list) => {
  let templateCard = '';
  list.forEach((dataLol) => {
    const card = `
    <div class='cards'>
      <figure>
       <a href='https://na.leagueoflegends.com/en/'><img class='frontal' src="${ dataLol.splash}"/></a>
        <div class='trasera'>
          <li class='name'>${ dataLol.name}</li>
          <hr>
          <li class='title'> ${ dataLol.blurb}</li>
        </div>
      </figure>
    </div>`;
    templateCard += card;
  }),
  containerPrincipal.innerHTML = templateCard;
};
createTemplateCard(arrDataLolTotal);
// mostrando primer usuario topTeam //
const arrDataLolTopTeam = lol.championsTopTeam(arrDataLolTotal);
const showTopTeam = () => {
  document.getElementById('screem-principal').style = 'display:none';
  document.getElementById('screem-top').style = 'display:block';
  for (let i = 0; i < arrDataLolTopTeam.length; i++) {
    containerTopTeam.innerHTML +=
      `<div class="card-link">
              <img class="post-image" src="${arrDataLolTopTeam[i].splash}"/>
              <li class="post-name">${arrDataLolTopTeam[i].name}</li>
              <li class="post-title"> ${arrDataLolTopTeam[i].title}</li>
              <li class="post-attackrange">Attackrange: ${arrDataLolTopTeam[i].attackrange}</li>
       </div>`;
  }
};
// mostrando segunda historia de usuario
const showFilterRoles = (data) => {
  let templateFilter = '';
  document.getElementById('screem-filterRolesAndCharacteristics').style = 'display:block';
  data.forEach((element) => {
    const cardsFilter = 
      `<div class="card-bytags">
      <img class="post-image" src="${element.splash}"/>
      <li class="post-name">${element.name}</li>      
    </div>`;
    templateFilter += cardsFilter;
  });
  containerFilterRoles.innerHTML = templateFilter;
};
buttonFilterRoles.addEventListener('click', () => {
  const arrDataLolFilterRoles = lol.championsFilterRoles(arrDataLolTotal, selectionRoles.value);
  showFilterRoles(arrDataLolFilterRoles);
});
// mostrando tercer usuario 
const showFilterInfo = () => {
  document.getElementById('screem-top').style = 'display:none';
  document.getElementById('screem-filterRolesAndCharacteristics').style = 'display:block';
  for (let i = 0; i < arrDataLolTotal.length; i++) {
    selectionOption.innerHTML += `<option value='${arrDataLolTotal[i].name}'>${arrDataLolTotal[i].name}</option>`;
  }
};
const templateInfoOfChampions = (data) => {
  let postCard = '';
  data.forEach((element) => {
    const cardInfo = `  <div class='cards2'>
    <figure>
    <img class ='img4' src='${element.splash}'/>
    <div class='trasera2'>
    <li class='info'>INFORMACIÓN DE TU CAMPEÓN</li>
    <li class='ataque'>Ataque:${element.info.attack}</li>
    <li class ='magia'>Magia:${element.info.magic}</li>
    <li class='defensa'>Defensa:${element.info.defense}</li>
    <li class='dificultad'>Dificultad:${element.info.difficulty}</li>
    </div>
    </figure>
    </div>
  `;
    postCard += cardInfo;
  });
  containerFilterInfo.innerHTML = postCard;
};

buttonFilter.addEventListener('click', () => {
  const resultFilterSelect = lol.filterInfoChampions(arrDataLolTotal, selectionOption.value);
  templateInfoOfChampions(resultFilterSelect);
});

buttonfirstUser.addEventListener('click', showTopTeam)
buttonSecondAndThirdUser.addEventListener('click', showFilterInfo);
