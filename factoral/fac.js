function fac(num){
    if (num === 0){
        return 1;
    }else{
        return num*fac(num-1);
    }
}

console.log(fac(prompt('num')));