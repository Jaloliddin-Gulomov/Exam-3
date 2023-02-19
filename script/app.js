let big = document.getElementById("big__card");
let add = document.querySelector("#add");
let imageEl = document.querySelector("#image");
let foodEl = document.querySelector("#food");
let foodCost = document.querySelector("#cost");
let cont = document.querySelector("#container");
let cookerEl = document.querySelector("#cooker");
let resEl = document.querySelector("#restaurant");


add.addEventListener("click", () => {
    create_element()
})

function create_element(){
    let card = document.createElement('div')
    card.setAttribute('id', "card");
    card.innerHTML = '';

    let cardChild = document.createElement('div');
    cardChild.setAttribute('id', 'card__child');
    
    
    let cardImg = document.createElement('img');
    cardImg.classList.add("card__img");
    cardImg.src = imageEl.value;
    
    
    let cardText = document.createElement('ul');
    let li = document.createElement('li');
    li.innerHTML = "Taom nomi: " + foodEl.value;


    let cost = document.createElement('li');
    cost.innerHTML = "Taom narxi: " + foodCost.value;
    
    let cooker = document.createElement('li');
    cooker.innerHTML = "Taom oshpazi: " + cookerEl.value;

    let res = document.createElement('li');
    res.innerHTML = "Taom restorani: " + resEl.value;
    
    let btn = document.createElement('button');
    btn.setAttribute('id', 'btn')

    let day = String(new Date().getDate()).padStart(2, "0");
    let month = String(new Date().getMonth() + 1).padStart(2, "0");
    let year = new Date().getFullYear();
    btn.innerHTML = month +"/" +day +"/" +year;  
 
    big.appendChild(card);
    card.appendChild(cardChild);
    cardChild.appendChild(cardImg);
    cardChild.appendChild(cardText);
    cardText.appendChild(li);
    cardText.appendChild(cost);
    cardText.appendChild(cooker);
    cardText.appendChild(res);
    card.appendChild(btn);
}