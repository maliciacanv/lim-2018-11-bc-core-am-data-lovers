// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
  const listaPersonajes = (arr) => {
    const newArray = [];
       for(let i = 0; i < arr.length; i++){
      newArray.push({name : arr[i].name, title: arr[i].title, img: arr[i].img, attackrange : arr[i].stats.attackrange});
    }

       return newArray
   }; 
  
window.lol = {
  listaPersonajes,
};




