// Returns decimals of a given number
export const getDecimalsFromNumber = (number: number) : number => parseInt((number - Math.floor(number)).toString().slice(2, 4));

// Returns most frequent word in array
export const getMostFrequentWord = (array: any) => {
  let result: any = [];
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