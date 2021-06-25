export const sortDataName = (data) => {
        const arrayDataSort = data.sort((a,b)=>{
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if(nameA<nameB){
              return -1;
          }
          if(nameA>nameB){
              return 1;
          }
          return 0;
        });
  return arrayDataSort;
}
export const sortDataNoc = (data) => {
  const arrayDataSort = data.sort((a,b)=>{
    const propertyA = a.noc.toUpperCase();
    const propertyB = b.noc.toUpperCase();
    if(propertyA <propertyB){
        return -1;
    }
    if(propertyA >propertyB){
        return 1;
    }
    return 0;
  });
return arrayDataSort;
}
export const sortDataSport = (data) => {
  const arrayDataSort = data.sort((a,b)=>{
    const propertyA = a.sport.toUpperCase();
    const propertyB = b.sport.toUpperCase();
    if(propertyA <propertyB){
        return -1;
    }
    if(propertyA >propertyB){
        return 1;
    }
    return 0;
  });
return arrayDataSort;
}
/*export const anotherExample = () => {
  return 'OMG';
};*/
