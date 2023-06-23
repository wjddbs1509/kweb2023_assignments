const setRandomBgColor = () => {
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const newcolor='rgb('+red+','+green+','+blue+')';    
    document.getElementById('color-box').style.backgroundColor=newcolor;
};