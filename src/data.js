const sortChampions = (data, sortOrder) => {
  const sortArray = data.sort((ab, bc) => {
    if (ab.name > bc.name) {
      return 1;
    } if (ab.name < bc.name) {
      return -1;
    }
    return 0;
  });
  if (sortOrder === '00') {
    return sortArray;
  }
  if (sortOrder === '01') {
    return sortArray.reverse();
  }
  return 0;
};


// primera historia de usuario, mostrar los 10 mejores campeones segun su ataque de rango.
const championsTopTeam = (arr) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push({ name: arr[i].name, title: arr[i].title, splash: arr[i].splash, attackrange: arr[i].stats.attackrange });
  }
  const newArrayOrder = newArray.sort((higher, less) => {
    if (higher.attackrange < less.attackrange) {
      return 1;
    } else {
      return -1;
    }
  });
  return newArrayOrder.slice(0, 10);
};

// segunda historia de usuario pide filtrar los campeones por roles: asesino,mago,tanque
const championsFilterRoles = (data, tipo) => {
  const filterDataRol = data.filter((element) => {
    return (element.tags[0] === tipo || element.tags[1] === tipo);
  });
  return filterDataRol;
};

// tercera historia de usuario desea buscar por campeon y que le muestre sus infomacion importante//
const filterInfoChampions = (data, tipo) => {
  const filterData = data.filter((element) => {
    return (element.name === tipo);
  });
  return filterData;
};

// estadistica de los campeones multiplicando el nivel de vida de campeon por nivel.

const statOfChampions = (array, num, stats) => {
  if (stats === 1) {
    return (parseFloat(array.stats.hp) + (parseFloat(array.stats.hpperlevel) * num)).toFixed(2);
  } else if (stats === 2) {
    return (parseFloat(array.stats.armor) + (parseFloat(array.stats.armorperlevel) * num)).toFixed(2);
  } else {
    return 0;
  }
};

window.lol = {
  sortChampions,
  championsTopTeam,
  championsFilterRoles,
  filterInfoChampions,
  statOfChampions,
};