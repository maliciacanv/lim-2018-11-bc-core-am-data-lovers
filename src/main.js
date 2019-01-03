// conviertiendo la data objeto en array//
const arrDataLolTotal = Object.values(LOL.data);

// llamando a los id de html //
const containerPrincipal = document.getElementById('container-listChampions');

document.getElementById('screem-top').style = 'display:none';
const buttonfirstUser = document.getElementById('topTeam');
const containerTopTeam = document.getElementById('container-topTeam');

document.getElementById('screem-filter').style = 'display:none';

document.getElementById('screem-filterInfo').style = 'display:none';
const buttonThirdUser = document.getElementById('characteristics');
const selectionOption = document.getElementById('selection');
const containerFilterInfo = document.getElementById('container-filterInfo');
const buttonFilter = document.getElementById('buttonFilter');
// llamando a los array del data.js //
const arrDataLolTopTeam = lol.championsList(arrDataLolTotal);
// mostrando todos los campeones en la pagina principal //
const createTemplateCard = (list) => {
  let templateCard = '';
  list.forEach((dataLol) => {
    const card = `
    <div class='cards'>
      <figure>
        <img class='frontal' src="${ dataLol.splash}"/>
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
const mostrarSecondScreem = () => {
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
// mostrando segundo usuario filter por roles //

// mostrando tercer usuario //
const mostrarInfo = () => {
  document.getElementById('screem-filter').style = 'display:none';
  document.getElementById('screem-filterInfo').style = 'display:block';
  for (let i = 0; i < arrDataLolTotal.length; i++) {
    selectionOption.innerHTML += `<option value='${arrDataLolTotal[i].name}'>${arrDataLolTotal[i].name}</option>`;
  }
};
const templateInfoOfChampions = (data) => {
  let postCard = '';
  data.forEach((element) => {
    const cardInfo = `
    <img class ='img4' src='${element.splash}'/>
    <li>Ataque:${element.info.attack}</li>
    <li>Magia:${element.info.magic}</li>
    <li>Defensa:${element.info.defense}</li>
    <li>Dificultad:${element.info.difficulty}</li>
  `;
    postCard += cardInfo;
  });
  containerFilterInfo.innerHTML = postCard;
};
buttonFilter.addEventListener('click', () => {
  const resultFilterSelect = lol.filterInfoChampions(arrDataLolTotal, selectionOption.value);
  templateInfoOfChampions(resultFilterSelect);
});

// eventos en la barra de navegacion //
buttonfirstUser.addEventListener('click', mostrarSecondScreem);
buttonThirdUser.addEventListener('click', mostrarInfo);






