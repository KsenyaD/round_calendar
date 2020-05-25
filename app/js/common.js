const circle = document.querySelector('.circle');

const today = document.getElementById('today');
const year17 = document.getElementById('year17');
const year15 = document.getElementById('year15');
const year12 = document.getElementById('year12');
const year11 = document.getElementById('year11');
const year07 = document.getElementById('year07');
const year06 = document.getElementById('year06');
const year04 = document.getElementById('year04');
const year01 = document.getElementById('year01');

let viesArray = [today, year17, year15, year12, year11, year07, year06, year04, year01];

let valueYear11 = Math.PI / 2;
let valueYear12 = valueYear11 - Math.PI / 12;
let valueYear07 = valueYear11 + Math.PI / 12;
let valueYear15 = valueYear11 - Math.PI / 6;
let valueYear06 = valueYear11 + Math.PI / 6;
let valueYear17 = valueYear11 - Math.PI / 4;
let valueYear04 = valueYear11 + Math.PI / 4;
let valueToday = valueYear11 - Math.PI / 3;
let valueYear01 = valueYear11 + Math.PI / 3;

coordinates(year15, valueYear15);
coordinates(year12, valueYear12);
coordinates(year11, valueYear11);
coordinates(year07, valueYear07);
coordinates(year06, valueYear06);
coordinates(year17, valueYear17);
coordinates(year04, valueYear04);
coordinates(today, valueToday);
coordinates(year01, valueYear01);

/*
function moveBlock(view, valuePI) {
    let moveValue = view.clientWidth / 2;
    let x = valuePI / (Math.PI / 2);
    //доделать
}*/

function convertValueToDeg(view, value) {
    let x = value / (Math.PI / 2);
    let deg = 90 - (x * 90); //проставляем градус удаления от начальной точки для всех объектов
    view.addEventListener("click", () => { // вешаем клики на все объекты
            circle.style.transform = `rotate(${deg}deg)`; //при срабатывании клика  мы крутив круг до нужного места
            viesArray.forEach((value, index, array) => {
                value.classList.remove('main__date__actv');
            });
            view.classList.add('main__date__actv');

        }
    );

    return deg;
}

function coordinates(view, value) {
    let deg = convertValueToDeg(view, value);
    let x = Math.sin(value) * 335;
    let y = -Math.cos(value) * 335;
    view.style.transform = `translate(${x}px, ${y}px) rotate(${-deg}deg)`;
}




