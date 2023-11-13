// 2 prompt parsati a numeri: uno intero e l'altro invece reale (numero con la virgola)
const userDistance = parseFloat(prompt('Type the distance of your trip in km'));
const userAge = parseInt(prompt('Type the age of the traveler'));

// calcolo il prezzo
let price = userDistance * 0.21;

const isUserTeen = userAge < 18;
const isUserElder = userAge >= 65;

// calcolo lo sconto
// sottraggo lo sconto al prezzo
if ( isUserTeen ){
    price = price * 0.8;
} else if ( isUserElder ){
    price = price * 0.6;
}

// ? ternary operator
// price = isUserTeen ? price * 0.8 : isUserElder ? price * 0.6 : price;

// converto il prezzo in una cifra a due decimali
// console.log(price.toFixed(2));

// lo scrivo in pagina
document.getElementById('output').innerHTML = `
    The total price of your trip is: ${price.toFixed(2)}
`;