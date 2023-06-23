
const weight=[100, 60, 36, 22, 13, 8, 5, 3, 2, 1];

let attempts=0;
let level=0;

const leveltrial=(prob)=>{
    const random=Math.floor(Math.random()*100);
    return (random<prob);
};

const tryLevelUp=()=>{
    const loop=setInterval(() => {
        attempts++;
        const result=leveltrial(weight[level]);
        if(result){
            level++;
            document.getElementById('gauge-bar').style.width=level*10+'%';
            document.getElementById('current-level').innerText=level;
        }
        document.getElementById('attempts').innerText=attempts;
        if (level >= 10) {
            clearInterval(loop);
        }
    }, 50);    
};