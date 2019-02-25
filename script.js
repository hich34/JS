// Fonctionnalité 1 :
/*
let footer = document.querySelector('footer');
let onClickFooter = function () {
    console.log("clique");
}
footer.addEventListener("click", onClickFooter);

// Fonctionnalité 1 Bis :

let footer = document.querySelector('footer');
let x = 1
let onClickFooter = function () {
    console.log("clique " + x);
    x ++
}
footer.addEventListener("click", onClickFooter);

// Fonctionnalité 2 :
 {
    let navBarClick = document.getElementById('navbarHeader');
    let menu = document.getElementsByClassName('navbar-toggler')[0];
    let onClickMenu = function() {
  
      navBarClick.classList.toggle("collapse");
    }
    menu.addEventListener('click', onClickMenu);
  }

// Fonctionnalité 3 :
var card = document.getElementsByClassName("card-body")[0];
var edit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]
var onClick = function() {
    card.style.color = 'red';
}
edit.addEventListener('click', onClick);


// Fonctionnalité 4 :

var secondCard = document.getElementsByClassName("card-body")[1];
var secondEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1]
var onClick = function () {
    if (secondCard.style.color === 'green') {
        secondCard.style.color = 'black';
    } else {
        secondCard.style.color = 'green';
    }
}
secondEdit.addEventListener('click', onClick);


// Fonctionnalité 5 :

var nav = document.getElementsByTagName('header')[0]
var link = document.getElementsByTagName("link")[0]
var nuclear = function() {
    if (link.href === 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'){
        link.href = '';
    } else {
        link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
    }
}

nav.addEventListener('dblclick', nuclear);

*/

// Fonctionnalité 6 :

let viewBtn = document.getElementsByClassName("btn btn-sm btn-success");
let cardTxt = document.getElementsByClassName("card-text");
let imgCard = document.getElementsByClassName("card-img-top");


for (let count = 0; count < 6; count++) {
    viewBtn[count].addEventListener('mouseover', function() {
            if (cardTxt[count].style.display === 'none') {
                cardTxt[count].style.display = 'block';
                imgCard[count].style.width = '100%';
            } else {
                cardTxt[count].style.display = 'none'
                imgCard[count].style.width = '20%';
            }
        });
    }