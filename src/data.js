export const sortData = (data,key,order) => {
        const arrayDataSort = data.sort((a,b)=>{
          const nameA = a[key].toUpperCase();
          const nameB = b[key].toUpperCase();
          if(nameA<nameB){
            //-1
              return order==='asc'? -1: 1;
          }
          if(nameA>nameB){
            //1
              return order==='asc'? 1: -1;
          }
          return 0;
        });
  return arrayDataSort;
}

/*export const anotherExample = () => {
  return 'OMG';
};*/
