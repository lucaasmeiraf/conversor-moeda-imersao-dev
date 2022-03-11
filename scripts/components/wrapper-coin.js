const $converter = document.querySelector('.converter');
let coin1 = 0;
let coin2 = 0;
let listCoin1 = "real";
let listCoin2 = "real";

const coins = {
    'coin-1': 0,
    'coin-2': 0,
    // 'list-coin-1': "real",
    // 'list-coin-2': "real",
};

// const wrapperCoin1 = {
//     coin: 0,
//     'list-coin': "real",
// }

// const wrapperCoin2 = {
//     coin: 0,
//     'list-coin': "real",
// }


$converter.addEventListener("input", (event) =>{
    const $origin = event.target;
    const id = $origin.getAttribute('id');
    
    // coin-1 = $origin.value ou coin-2 = $origin.value
    // *dinâmico*
    coins[id] = $origin.value;

    // if($origin.getAttribute('id') === 'coin-1'){
    //     coin1 = $origin.value;
    // }

    // if($origin.getAttribute('id') === 'coin-2'){
    //     coin2 = $origin.value;
    // }

    if($origin.getAttribute('id') === 'list-coin-1'){
        listCoin1 = $origin.value;
    }

    if($origin.getAttribute('id') === 'list-coin-2'){
        listCoin2 = $origin.value;
    }

});
