function LongestWord(sen) { 

    var temp = sen.split(' '); 
    var index_long = 0;
    var current_long = 0; 
    var letters = /^[A-Za-z]+$/;
    for (var i=0; i < temp.length; i++){
        if (temp[i].length > current_long && letters.test(temp[i])){
            //console.log(temp[i]);
            current_long = temp[i].length;
            index_long = i;
        }
    }
    
    return temp[index_long]; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord("Renan 1234567 Erthmann"));