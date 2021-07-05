// Procesamiento de data FORMA 1
const sortData = (array, order)=> {
         array.sort((a,b)=>{
         return a.localeCompare(b);
         });
      return order === 'desc' ? array.reverse() : array;
} 
export let arrRankingCardAthlete;
const rankingOnlyMedals = (data,key,order) =>{
       arrRankingCardAthlete = Object.entries(data);
       arrRankingCardAthlete.sort((a,b) => {
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
         for(let i in arrRankingCardAthlete){
         const k = arrRankingCardAthlete[i][0];
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
         const arrayA = a[1].map(element=>element.name);
         const valueA = arrayA.filter((element,index,arr)=>arr.indexOf(element)===index).length;
         const arrayB = b[1].map(element=>element.name);
         const valueB = arrayB.filter((element,index,arr)=>arr.indexOf(element)===index).length;
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
function searchTable(value,data) {
   data = Object.entries(data);
   let filterData = [];
   for(let i = 0; i<data.length; i++){
       value = value.toLowerCase();
       const name = data[i][0].toLowerCase();

       if(name.includes(value)){
           filterData.push(data[i][0]);
       }
   }
   return filterData;
}
// Procesamiento de data FORMA 2
 function filterOnlyOneName(data,key){
   const dataOnlyNames = data.filter( (item, index, self) => index === self.findIndex(t => t[key] === item[key]));
   return dataOnlyNames;
 }
 
 function sortDataTwo(data, key){
    const newDataSort = data.sort((a,b)=>{
      const valueA = a[key].toUpperCase();
      const valueB = b[key].toUpperCase();
      return valueA<valueB ? -1 : (valueA>valueB ? 1 : 0) 
    })
    return newDataSort;
 }


export{sortData, rankingOnlyMedals, rankingTotalMedals, rankingTotalAthletes, searchTable, filterOnlyOneName, sortDataTwo }



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