const isValidNumber = (n) => {
    const a=parseInt(n);
    if(typeof(a)=='number' && a>=1 && a<=9 && a==n){
        return true;
    }
    else{
        return false;
    }
};