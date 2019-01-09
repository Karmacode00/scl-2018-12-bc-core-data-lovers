window.filterType = (data, condition) =>{
  //console.log(condition); console.log(typeof condition);
  const filteredType = data.filter(element => {
    //console.log(element.type);
    return element.type.includes(condition,0)
  });
  return filteredType;
};

window.sortData = (data, sortBy, sortOrder) =>{
  let mapped = data.map(function(el, i) {
    return { index: i, value: el.toLowerCase() };
  });
  
  // sorting the mapped array containing the reduced values
  mapped.sort(function(a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    } else {
    return 0;
    }
  })};