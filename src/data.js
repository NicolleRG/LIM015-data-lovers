export const sortData = (array, order)=> {
          array.sort((a,b)=>{
          return a.localeCompare(b);
       });
       return order==='desc' ? array.reverse() : array;
      } 
      
export const ranking = (data,key,order) =>{
   let arrayData = Object.entries(data);
   arrayData.sort((a,b) => {
      const valueA = a[1][(a[1].length-1)][key];
      const valueB = b[1][(b[1].length-1)][key];
      if(valueA>valueB){
         return order ==='desc'? -1 : 1
      }
      if(valueA<valueB){
         return order ==='desc'? 1 : -1
      }
      return 0;
      })
   let newArray= new Array;
   for(let i in arrayData){
      const k = arrayData[i][0];
      newArray.push(k);
   }
   // console.table(constructArray);
   return newArray;
}