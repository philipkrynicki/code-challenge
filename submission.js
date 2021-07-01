const findSum = function(array) {
  // your code here - don't forget to return a number!
  let sum = 0;
    for(let i = 0; i < numberArray.length; i++){
    sum += numberArray[i];
  }
   return sum;
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
  let tempArray = [];
  let tempArray_counts = [];
  
  for(let i = 0; i < array.length; i++){
    
    if( !tempArray.includes( array[i] ) ){
      tempArray.push( array[i] )
    }
    
  }
  
    for( let i = 0; i < tempArray.length; i++ ){  
      var count = 0;
      
      for(let z = 0; z < array.length; z++){
        if( array[z] == tempArray[i]){
          count++;
        }
        tempArray_counts[i] = count;
      }  
      
    }

  let least = tempArray_counts[0];
  let leastIndex = 0;
  let most = 0;
  let mostIndex;
  for( let y = 0; y < tempArray_counts.length; y++ ){
    if( tempArray_counts[y] > most){
      most = tempArray_counts[y]; 
      mostIndex = y;
    }
    
    if( tempArray_counts[y] < least){
      least = tempArray_counts[y]; 
      leastIndex = y;
    }
  }
  
  return  { most: tempArray[mostIndex], least: tempArray[leastIndex] }

};

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
  const revString = str.split('').reverse().join('');
    return revString === str;
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
  let result = array[0] * array[1];
    for (let i=1; i<array.length - 1; i++) {
      let n1 = array[i];
      let n2 = array[i + 1]
      // console.log(n1, n2);
      let m = n1 * n2;
      // console.log(m);
      if(m > result) {
        result = m;
      }
    }
  console.log(result);
  return result
};

const removeParenth = function(str) {
  let c = str.indexOf("(");
  let d = str.indexOf(")");
  console.log(c, d);
  // newStr = str.substr(1, str.length);

  let s1 = str.slice(0 , c)
  console.log(s1);
  let s2 = str.slice(d + 1, str.length)
  console.log(s2);
  let result = s1 + s2;
  console.log(result);
  return result;
};

const scoreScrabble = function(str) {
  let sum = 0;

  const pointValues = {
    1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
    2: ['d', 'g'],
    3: ['b', 'c', 'm', 'p'],
    4: ['f', 'h', 'v', 'w', 'y'],
    5: ['k'],
    8: ['j', 'x'],
    10: ['q', 'x'],
  };

  str.split('').forEach(function (a) {
    Object.keys(pointValues).forEach(function (b) {
      pointValues[b].forEach(function (letter) {
        if (a === letter) {
          sum += parseInt(b);
        }
      });
    });
  });
    return sum;
};
