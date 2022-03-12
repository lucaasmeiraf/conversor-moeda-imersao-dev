const $wrapper2 = document.querySelector('#wrapper-2');
const $otherInput2 = document.querySelector('#wrapper-1 > .coin');
const brl = 2;


const wrapper2 = {
    coin: 1,
    "list-coins": "SEK",
};

$wrapper2.addEventListener('input', (event) =>{
    const $origin = event.target; // pega quem disparou o evento
    const value = $origin.value;
    const $ref = $origin.getAttribute("data-ref");

    wrapper2[$ref] = value;
    
    $otherInput2.value = value * brl;
});