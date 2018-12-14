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