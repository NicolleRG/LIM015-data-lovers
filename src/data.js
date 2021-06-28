export const sortData = (array, order)=> {
          array.sort((a,b)=>{
          return a.localeCompare(b);
       });
       return order==='desc' ? array.reverse() : array;
      } 
