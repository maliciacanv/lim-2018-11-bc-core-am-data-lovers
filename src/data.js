// primer historia de usuario pide mostrar los 10 mejores campeones y medido por su ataque de rango//
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



// tercera historia de usuario desea buscar por campeon y que le muestre sus infomacion importante//


window.lol = {
  championsList,
};
