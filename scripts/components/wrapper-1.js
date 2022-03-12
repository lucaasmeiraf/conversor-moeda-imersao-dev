const $wrapper1 = document.querySelector('#wrapper-1');
const $otherInput1 = document.querySelector('#wrapper-2 > .coin');
const sek = 0.5;


const wrapper1 = {
    coin: 1,
    "list-coins": "BRL",
};

$wrapper1.addEventListener('input', (event) =>{
    const $origin = event.target; // pega quem disparou o evento
    const value = $origin.value;
    const $ref = $origin.getAttribute("data-ref");

    wrapper1[$ref] = value;
    
    $otherInput1.value = value * sek;
});