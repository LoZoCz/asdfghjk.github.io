const l1 = document.querySelector('.dec');
const l2 = document.querySelector('.bin');

const oblicz1 = document.querySelector('#oblicz1');
const oblicz2 = document.querySelector('#oblicz2');

const wynik1 = document.querySelector('.wynik1');
const wynik2 = document.querySelector('.wynik2');

function decbin(e)
{
    let dec = parseFloat(l1.value);
    let bin = dec.toString(2);
    wynik1.innerText = 'Wynik to ' + bin;
}

oblicz1.addEventListener('click', decbin);

function bindec(e1)
{
    let bin2 = parseFloat(l2.value);
    console.log(bin2.toString(10));
    //wynik2.innerText = 'Wynik to ' + dec2;
}

oblicz2.addEventListener('click', bindec);