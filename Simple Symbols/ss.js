function SimpleSymbols(str) { 

    var letters = /^[a-zA-Z]+$/;
      for(var i=0; i< [...str].length;i++){
        if(letters.test([...str][i])){
          if ([...str][i-1]==='+' && [...str][i+1]==='+'){
            return true;
          }
          else{
            return false;
          }
        }
      }
    
    }
       
    // keep this function call here 
    console.log(SimpleSymbols("readline()"));