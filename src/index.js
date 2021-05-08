import example from './images/qwe.png'
import './styles/main.scss'
class Square {
    constructor(randomPositionLeft, randomPositionTop, randomColor) {
        this.randomPositionLeft = randomPositionLeft;
        this.randomPositionTop = randomPositionTop;
        this.randomColor = randomColor;
    }
    newDiv = document.createElement("div");

    initSquare() {
        this.newDiv.style.backgroundColor = this.randomColor[1];
        this.newDiv.style.top = this.randomPositionTop;
        this.newDiv.style.left = this.randomPositionLeft;;
        this.newDiv.classList.add('square-item');
        this.newDiv.classList.add(this.randomColor[0]);

        return this.newDiv;
    }
}

const gameField = document.querySelector('.main-field');

const randomColor = () =>{
    const colorsClass = [['redItem', 'red'],['blueItem', 'blue'],['greenItem', 'green']];
    let number = (Math.floor(Math.random() * 3));
    let arr=[];
    let choosenItem;
    colorsClass.forEach(function (item,index) {
        arr.push(item)
    })
    return choosenItem = arr[number];
};

const randomQuantity = () => (Math.floor(Math.random() * 3) + 1);
const randomPositionLeft = () => (Math.floor(Math.random() * gameField.offsetWidth )) + 'px';
const randomPositionTop = () =>(Math.floor(Math.random() * gameField.offsetHeight )) + 'px';

const addAnotherSquare = () => gameField.append(new Square(randomPositionLeft(), randomPositionTop(),randomColor()).initSquare());
addAnotherSquare()

const removeItemSquare = (square) => square.parentNode.removeChild(square);
//const addAnotherSquare = (square) =>
/*class RandomQuantity extends Square {
    randomQuantity(){
        alert(this.randomColor + 'прячется!');
    }
}
const quantitySquare = new RandomQuantity(randomPositionLeft(), randomPositionTop(),randomColor()).initSquare();
quantitySquare.initSquare();*/


gameField.addEventListener('click', (e) => {
    if(e.target.classList.contains('square-item')){
       removeItemSquare(e.target);
        let i = 0;
        const randomQuantityNum = randomQuantity();
        while( i < randomQuantityNum){
            i++;
            addAnotherSquare()
        }
        const counter = () => new Counter((e.target)).countDeleteSquare();
        counter()
    }
    //тут функция с подсчетом баллов

});

class Counter {
    constructor(clickSquare) {
        this.clickSquare = clickSquare;
    }
    counter = 0;
    countDeleteSquare(){
        debugger
        switch (true) {
        case this.clickSquare.classList.contains('redItem'):
            this.counter += 1;break;
        case this.clickSquare.classList.contains('blueItem'):
            this.counter += 2;break;
         case this.clickSquare.classList.contains('greenItem'):
             this.counter += 3;break;
            default:
                console.log(`Sorry`);
        }
       return this.counter;
    }
}



