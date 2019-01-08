window.filterType = (data, condition) =>{
  console.log(condition); console.log(typeof condition);
  const filteredType = data.filter(element => {
    console.log(element.type);
    return element.type === condition
  });
  return filteredType;
};