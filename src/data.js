const sortData = (array, order)=> {
         array.sort((a,b)=>{
         return a.localeCompare(b);
         });
      return order === 'desc' ? array.reverse() : array;
} 
export let arrayData;
const rankingOnlyMedals = (data,key,order) =>{
       arrayData = Object.entries(data);
       arrayData.sort((a,b) => {
         const valueA = a[1][(a[1].length-1)][key];
         const valueB = b[1][(b[1].length-1)][key];
         if(valueA>valueB){
            return order === 'desc' ? -1 : 1
         }
         if(valueA<valueB){
            return order === 'desc' ? 1 : -1
         }
         return 0;
         })
       const newArray= new Array;
         for(let i in arrayData){
         const k = arrayData[i][0];
         newArray.push(k);
         }
   return newArray;
}  
export let arrayDataCountry;
const rankingTotalMedals = (data,order) =>{
         arrayDataCountry = Object.entries(data); 
         arrayDataCountry.sort((a,b) => {
         const valueA = a[1].length;
         const valueB = b[1].length;
         if(valueA>valueB){
            return order === 'desc' ? -1 : 1
         }
         if(valueA<valueB){
            return order === 'desc' ? 1 : -1
         }
         return 0;
         })
         const newArray= new Array;
         for(let i in arrayDataCountry){
            const k = arrayDataCountry[i][0];
            newArray.push(k);
         }
   return newArray;
}

const rankingTotalAthletes = (data,order) =>{
       const arrayData = Object.entries(data); 
       arrayData.sort((a,b) => {
         const valueA = a[1].map(element=>element.name).length;
         const valueB = b[1].map(element=>element.name).length;
         if(valueA>valueB){
            return order ==='desc'? -1 : 1
         }
         if(valueA<valueB){
            return order ==='desc'? 1 : -1
         }
         return 0;
         })
         const newArray= new Array;
         for(let i in arrayData){
            const k = arrayData[i][0];
            newArray.push(k);
         }
   return newArray;
}

export{sortData, rankingOnlyMedals, rankingTotalMedals, rankingTotalAthletes}



// export const sortDataTwo = (data,key,order) =>{
//    const arrayData = Object.entries(data);
//    arrayData.sort((a,b) => {
//      const valueA = a[1][0][key];
//      const valueB = b[1][0][key];
//      return valueA.localeCompare(valueB);
//    });   
//    const newArray= new Array;
//      for(let i in arrayData){
//      const k = arrayData[i][0];
//      newArray.push(k);
//      }
//    return order === 'desc' ? newArray.reverse(): newArray;
// } 
