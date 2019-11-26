function AlphabetSoup(str) { 

    var first=0;
    let current=0; 
    var temp = str.split('');
    //console.log(str.length);
    for(var j = 0; j<temp.length; j++){
      for (var i=current; i< temp.length; i++){
        //console.log(i);
        //console.log(str.charCodeAt(i), str.charCodeAt(first))
       // console.log(first, i, current);
       first = current;
        if (temp[i].charCodeAt(0)< temp[first].charCodeAt(0)){
          //console.log(str.charCodeAt(i), str.charCodeAt(first))
          first = i;
        }
        let c = temp[first];
        //console.log(c);
        temp.splice(first, 1, temp[current]);
        temp.splice(current, 1, c);
      }
      
      current++;
      //console.log(temp);
    }
    
    return temp.join(''); 
  
  }
     
  // keep this function call here 
  console.log(AlphabetSoup(readline()));