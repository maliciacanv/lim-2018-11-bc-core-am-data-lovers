const championsList = (arr) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push({ name: arr[i].name, title: arr[i].title, splash: arr[i].splash, attackrange: arr[i].stats.attackrange});
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


//Pusheando un array que contenga nombre, splash y tags
const championsList2 = (arr) => {
    const newa = [];
    for (let i = 0; i < arr.length; i++) {
      newa.push({ name: arr[i].name, tags: arr[i].tags, splash: arr[i].splash });
    }
    return newa;
  }

  //haciendo la función filtrar por lista de roles
const filtrarRoles = (data, rol) => {
  let arrayDeRoles = data
    .filter((ele) => {
      for (let i = 0; i < ele.tags.length; i++) {
        if (ele.tags[i] === rol) {
          return true;
        }
      }
    });
    
  return arrayDeRoles;
}


// tercera historia de usuario desea buscar por campeon y que le muestre sus infomacion importante//
const filterInfoChampions = (data, tipo) => {
  const filterData = data.filter((ele) => {
    return (ele.name === tipo); 
  });
  return filterData;
};

window.lol = {
  championsList,
  championsList2,
  filtrarRoles,
  filterInfoChampions,
};