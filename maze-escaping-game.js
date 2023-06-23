const rowmin=0;
const rowmax=6;
const colmin=0;
const colmax=7;
const curpos={
    row:5,
    col:0
};

const getElementByPosition=(pos)=>{
    const cellel=document.getElementsByClassName('cells')[pos.row];
    return cellel.getElementsByClassName('cell')[pos.col];
}

const getNewPositionByKey = (key)=>{
    const pos={
        row: curpos.row,
        col: curpos.col
    }
    switch(key){
        case 'ArrowUp':pos.row--;break;
        case 'ArrowDown':pos.row++;break;
        case 'ArrowLeft':pos.col--;break;
        case 'ArrowRight':pos.col++;break;
    }
    return pos;
};

const isPositionInRange =(pos)=>{
    return (pos.row>=rowmin)&&(pos.row<=rowmax)&&(pos.col>=colmin)&&(pos.col<=colmax);
}

const isPositionInWall=(pos)=>{
    return getElementByPosition(pos).classList.contains('wall');
}

document.addEventListener('keyup', event=>{
    getElementByPosition(curpos).classList.remove('current');
    const newpos=getNewPositionByKey(event.code);
    if(isPositionInRange(newpos)&&!isPositionInWall(newpos)){
        curpos.row=newpos.row;
        curpos.col=newpos.col;
    }
    const newel=getElementByPosition(curpos);
    newel.classList.add('current');
    if(newel.classList.contains('target')) alert('You escaped!');
});