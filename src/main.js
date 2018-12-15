
/*const dataLol = Object.values(LOL.data);

for (let i = 0; i < arrKeys.length; i++){   
    const champions = arrKeys[i];
    const imgChampions = (`${champions.img} ${champions.name} ${champions.title}`);
    document.write(imgChampions);
    console.log(imgChampions);
};*/

const champions=Object.values(LOL.data);
const obtenerPropiedad = (data) => {
    let filterNew = [];
    for (let i=0; i < data.length ;i++){
      filterNew.push(data[i].tags);
     // filterNew.push(data[i].name);
  }
  return filterNew;
  }
  document.write(obtenerPropiedad(champions)); 