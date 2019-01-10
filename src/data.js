window.pokemon = {
filterType: (data, condition) =>{
  const filteredType = data.filter(element => {
    return element.type.includes(condition,0)
  });
  return filteredType;
},

sortData: (data, sortBy, sortOrder) =>{
  if(sortBy === 'num' && sortOrder === 'des'){
    const sortedNum = data.sort((a,b) => {
      if (a.num < b.num) {
        return 1;
      }
      if (a.num > b.num) {
        return -1;
      } else {
      return 0;
      }
    })
    return sortedNum;
  }else if(sortBy === 'num' && sortOrder === 'asc'){
    const sortedNum = data.sort((a,b) => {
      if (a.num > b.num) {
        return 1;
      }
      if (a.num < b.num) {
        return -1;
      } else {
      return 0;
      }
    })
    return sortedNum;
  }else if(sortBy === 'name' && sortOrder === 'des'){
    const sortedName = data.sort((a,b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      } else {
      return 0;
      }
    })
    return sortedName;
  }else if(sortBy === 'name' && sortOrder === 'asc'){
    const sortedName = data.sort((a,b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      } else {
      return 0;
      }
    })
    return sortedName;
  }
},

computeStats: (data) => {
  return data.length;
  }
}
