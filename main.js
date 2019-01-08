window.filterType = (data, condition) =>{
  const filteredType = data.filter(element => {
    return element.type === condition
  });
  return filteredType;
};