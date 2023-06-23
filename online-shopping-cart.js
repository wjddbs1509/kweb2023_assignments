const item={
    apple: 700,
    orange: 800,
    lemon: 900,
};
let total=0;

for (const button of document.getElementsByClassName('add-to-cart')){
    button.addEventListener('click', event=>{
        const itemname=event.target.parentNode.parentNode.getAttribute('id');
        total+=item[itemname];
        document.getElementById('cost').innerText=total;
    }
    );
}