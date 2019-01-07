// conviertiendo la data objeto en array//
const arrDataLolTotal = Object.values(LOL.data);
const arrayKeys = Object.values(arrDataLolTotal[0]);
const newArrayKeys = Object.keys(arrayKeys[12]);
// llamando a los id de html //
const containerPrincipal = document.getElementById('container-listChampions');
document.getElementById('screen-top').style = 'display:none';
const buttonfirstUser = document.getElementById('topTeam');
const containerTopTeam = document.getElementById('container-topTeam');

document.getElementById('screen-filter').style = 'display:none';
const buttonSecondAndThirdUser = document.getElementById('rolAndCharacteristics');
const selectionRoles = document.getElementById('list-roles');
const buttonFilterRoles = document.getElementById('button-filterRol');
const containerFilterRoles = document.getElementById('container-filterRoles');

const selectionOption = document.getElementById('selection');
const containerFilterInfo = document.getElementById('container-filterInfo');
const buttonFilter = document.getElementById('button-filterInfo');

document.getElementById('screen-stats').style = 'display:none';
const buttonStats = document.getElementById('stats');
const containerStats = document.getElementById('container-stats');
// mostrando todos los campeones en la pagina principal 
const createTemplateCard = (list) => {
  let templateCard = '';
  list.forEach((dataLol) => {
    const card = `
    <div class='cards'>
    <a href='https://na.leagueoflegends.com/en/' target='_blanck'>
      <figure>
       <img class='frontal' src="${ dataLol.splash}"/>
        <div class='trasera'>
          <li class='name'>${ dataLol.name}</li>
          <hr>
          <li class='title'> ${ dataLol.blurb}</li>
        </div>
      </figure>
    </a>
    </div>`;
    templateCard += card;
  }),
    containerPrincipal.innerHTML = templateCard;
};
createTemplateCard(arrDataLolTotal);

// mostrando primer usuario topTeam //
const arrDataLolTopTeam = lol.championsTopTeam(arrDataLolTotal);
const showTopTeam = () => {
  document.getElementById('screen-principal').style = 'display:none';
  document.getElementById('screen-top').style = 'display:block';
  for (let i = 0; i < arrDataLolTopTeam.length; i++) {
    containerTopTeam.innerHTML +=
      `<div class="card-link">
              <img class="post-image" src="${arrDataLolTopTeam[i].splash}"/>
              <li class="post-names">${arrDataLolTopTeam[i].name}</li>
              <li class="post-title"> ${arrDataLolTopTeam[i].title}</li>
              <li class="post-attackrange">Attackrange: ${arrDataLolTopTeam[i].attackrange}</li>
       </div>`;
  }
};
// mostrando segunda historia de usuario
const showFilterRoles = (data) => {
  let templateFilter = '';
  document.getElementById('screen-filter').style = 'display:block';
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
  document.getElementById('screen-top').style = 'display:none';
  document.getElementById('screen-filter').style = 'display:block';
  for (let i = 0; i < arrDataLolTotal.length; i++) {
    selectionOption.innerHTML += `<option value='${arrDataLolTotal[i].name}'>${arrDataLolTotal[i].name}</option>`;
  }
};
const templateInfoOfChampions = (data) => {
  let postCard = '';
  data.forEach((element) => {
    const cardInfo = `  
    <div class='cards2'>
    <figure>
    <img class ='frontal2' src='${element.splash}'/>
    <div class='trasera2'>
    <li class='ataque'>Ataque: ${element.info.attack}</li>
    <li class ='magia'>Magia: ${element.info.magic}</li>
    <li class='defensa'>Defensa: ${element.info.defense}</li>
    <li class='dificultad'>Dificultad: ${element.info.difficulty}</li>
    </div>
    </figure>
    </div>
  `;
    postCard += cardInfo;
  });
  containerFilterInfo.innerHTML = postCard;
};

buttonFilter.addEventListener('click', () => {
  document.getElementById('container-filterRoles').style = 'display:none';
  const resultFilterSelect = lol.filterInfoChampions(arrDataLolTotal, selectionOption.value);
  templateInfoOfChampions(resultFilterSelect);
});

const statsClick = () => {
  document.getElementById('screen-filter').style = 'display:none';
  document.getElementById('screen-stats').style = 'display:block';
};

const createStats = (data) => {
  let statsChampions = '';
  data.forEach((array) => {
    let cards3 = `
    <div class="stats">
     <h1> <img class="imgStats" src="${ array.img}"/>
     <h2>${array.name}</h2>
     <h4>${ array.tags}</h4>
     </div>
     <table>
       <tr>
         <th> Stats </th>
         <th> Per Level </th>
         <th> Level. 1 </th>
         <th> Level. 6 </th>
         <th> Level. 12 </th>
         <th> Level. 18 </th>
       </tr>
       <tr>
         <td>${ newArrayKeys[0]}</td>
         <td>${ array.stats.hpperlevel}</td>
         <td>${ array.stats.hp}</td>
         <td>${window.lol.statOfChampions(6, array, 1)}</td>
         <td>${window.lol.statOfChampions(12, array, 1)}</td>
         <td>${window.lol.statOfChampions(18, array, 1)}</td>
       </tr>
       <tr>
         <td>${ newArrayKeys[2]}</td>
         <td>${ array.stats.armorperlevel}</td>
         <td>${ array.stats.armor}</td>
         <td>${window.lol.statOfChampions(6, array, 2)}</td>
         <td>${window.lol.statOfChampions(12, array, 2)}</td>
         <td>${window.lol.statOfChampions(18, array, 2)}</td>
       </tr>
     </table>
   </div>`;
    statsChampions += cards3;
  });
  containerStats.innerHTML = statsChampions;
};
createStats(arrDataLolTotal);


buttonfirstUser.addEventListener('click', showTopTeam);
buttonSecondAndThirdUser.addEventListener('click', showFilterInfo);
buttonStats.addEventListener('click', statsClick);

