// conviertiendo la data objeto en array//
// eslint-disable-next-line no-undef
const arrDataLolTotal = Object.values(LOL.data);
const containerListDatosHTML = document.getElementById('container-listimagens');


const arrDataLolPrecisa = lol.championsList(arrDataLolTotal);
const firstUser = document.getElementById('topon');



firstUser.addEventListener('click', () => {
  for (let i = 0; i < arrDataLolPrecisa.length; i++) {
    containerListDatosHTML.innerHTML +=
      `<div class="card-link">
            <article class="blog-card">
              <img class="post-image" src="${arrDataLolPrecisa[i].splash}"/>
              <div class="list-data">
              <li class="post-name">${arrDataLolPrecisa[i].name}</li>
               <li class="post-title"> ${arrDataLolPrecisa[i].title}</li>
               <li class="post-attackrange">
               Attackrange: ${arrDataLolPrecisa[i].attackrange}</li>
             </div>
           </article>
          </div>`;
  }
});
const type = 'Tank';
const arrDataRole = lol.filterData(arrDataLolTotal, type);

console.log(arrDataRole);


