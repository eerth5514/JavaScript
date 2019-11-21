function LetterChanges(str) { 

    var temp = str.split('');
    var letters = /^[a-zA-Z]+$/;
    for(var i =0; i<temp.length; i++){
        if(letters.test(temp[i])){
            switch(temp[i]){
                case 'z':  
                    temp.splice(i, 1, 'a');
                    break;
                case 'Z':  
                    temp.splice(i, 1, 'A');;
                    break;
                default:  
                    temp.splice(i,1, String.fromCharCode(
                        temp[i].charCodeAt(0)+1)
                        );
                    break;
            }
            if ((/^[aeiou]+$/).test(temp[i])){
                temp[i] = temp[i].toUpperCase();
            }
        }
    }
    /*Só 1 teste que eu fiz com as igualdades
    if ('2' === 2){
        console.log(true);
    }else{
        console.log(false);
    }
    return temp.join(''); 
  
  }*/
     
  // keep this function call here 
  console.log(LetterChanges('hello*3Z'));