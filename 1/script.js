var pokaz = document.getElementById('pokaz');
var wynik = document.getElementById('wynik');
var restart = document.getElementById('reset');

function sprawdz(e)
{
    e.preventDefault();
    const a = parseFloat(document.getElementById('liczba1').value);
    const b = parseFloat(document.getElementById('liczba2').value);
    const c = parseFloat(document.getElementById('liczba3').value);

    wynik.innerText = 'Ciąg to: ';
    let temp = a;

    for(let i=1; i<=c; i++)
    {
        wynik.innerText += ` ${temp} `;
        temp += b;
    }    
}

function reset()
{
    location.reload();
}

pokaz.addEventListener('click', sprawdz);

restart.addEventListener('click', reset);