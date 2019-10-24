// Returns only two decimals of a given float (with at least two decimals) or zero otherwise
export const getTwoDecimalsFromNumber = (number: number) : number => {
  const parts = (number + "").split("."); 
  return parts.length > 1 ? parseInt(parts[1].slice(0,2)) : 0;
}

// Returns most frequent word in array
export const getMostFrequentWord = (array: string[]) : string => {
  let result: string = '';
  let tmp = 0;

  for(let i = 0; i < array.length; i++){
    let count = 0;

    for(let j = 0; j < array.length; j++){
      if(array[i]===array[j]){
        count++;
      }
    }
    if(count > tmp){
      tmp = count;
      result = array[i];
    }
  }
  
  return result;
}