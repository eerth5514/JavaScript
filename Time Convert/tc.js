function TimeConvert(num) { 

    let h = Math.floor(num/60);
    let r = num%60;
    var str = h+':'+r;
    return str;
  
  }
     
  // keep this function call here 
  console.log(TimeConvert(readline()));