// primer historia de usuario pide mostrar los 10 mejores campeones y medido por su ataque de rango//
const championsList = (arr) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push({ name: arr[i].name, title: arr[i].title, splash: arr[i].splash, attackrange: arr[i].stats.attackrange });
  }
  const newArrayOrder = newArray.sort((higher, less) => {
    if (higher.attackrange < less.attackrange) {
      return 1;
    }
    else {
      return -1;
    }
  });
  return newArrayOrder.slice(0, 10);
};
// segunda historia de usuario pide filtrar los campeones por roles: asesino,mago,tanque//
const filterData = (data, type) => {
  const filterNewData = data.map(importData => Object.assign({}, { name: importData.name, splash: importData.splash, tags: importData.tags }));

  const filterRoles = filterNewData.filter((data) => {
    return data.tags.includes(type) === true;
  });
  return filterRoles;
};
// tercera historia de usuario desea buscar por campeon y que le muestre sus infomacion importante//
const filterInfochampions = (data) => {
  const filterDataChampions = data.map(character => Object.assign({}, { splash: character.splash, name: character.name, info: character.info }));
  return filterDataChampions;
};





window.lol = {
  championsList,
  filterData,
  filterInfochampions,
};
