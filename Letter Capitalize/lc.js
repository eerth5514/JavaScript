function LetterCapitalize(str) { 

  var letters = /^[a-zA-Z]+$/;
  var temp = str.split(' ');
  for (var i = 0; i < temp.length; i++){
      if (letters.test(temp[i][0])){
          temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1)
      }
  } 
  return temp.join(' '); 

}
     
  // keep this function call here 
  console.log(LetterCapitalize("hello woi3 4ls renan"));