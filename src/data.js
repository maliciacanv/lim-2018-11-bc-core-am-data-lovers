// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const championsList = (arr) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push({name: arr[i].name, title: arr[i].title, img: arr[i].img, attackrange: arr[i].stats.attackrange});
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
const championRoles =  (arr2)=>{

};

window.lol = {
  championsList,
};

