/*novo js pra mudar os cards do carousel */
//vars

var carousselItens;
var creatureCardTotal;
var creatureCardLast;
var battlegearCardTotal;
var battlegearCardLast;
var mugicCardTotal;
var mugicCardLast;
var locationCardTotal;
var locationCardLast;
creatureCount = true
creatureIndex = 0;
battlegearIndex = -1;
mugicIndex = -1;
locationIndex = -1;
var locationTotal = document.getElementsByClassName("location-card-list");
var attckTotal = document.getElementsByClassName("deckCards");
var countatk;
var msg;
//functions


recountCards();

function returnToZero() {
    let zero = 0;
    return $('.carousel').carousel(zero);


}

function ActiveElementChild(e) {
    let activeElementChild = e.firstElementChild;

    if (activeElementChild.classList.contains("activeElementChild")) {


    } else {
        activeElementChild.classList.toggle("activeElementChild");

    }

}
function removeElementChildActiveMouseOut() {
    let removeActiveChild = document.getElementsByClassName('activeElementChild')[0];
    removeActiveChild.classList.remove('activeElementChild');
}
function removeElementActiveMouseOut() {
    removeActiveElement();
}
function removeActiveElement() {
    let removeActive = document.getElementsByClassName('activeElement')[0];
    removeActive.classList.remove('activeElement');

}
function ActiveElement(e) {
    let activeElement = e;

    if (activeElement.classList.contains("activeElement")) {

    } else {
        activeElement.classList.toggle("activeElement");

    }

}
function deleteElementActive() {
    let target = document.getElementsByClassName("activeElement")[0];
    target.remove();
    countatk.innerHTML = `<h2>${attckTotal.length}/20</h2>`;
    msg.innerHTML = `${locationTotal.length}/10`;
}


function recountCards() {
    carousselItens = document.getElementsByClassName("carousel-item");
    creatureCardTotal = document.getElementsByClassName("creature-card").length + 1;
    creatureCardLast = carousselItens[creatureCardTotal - 1].firstElementChild;
    battlegearCardTotal = document.getElementsByClassName("battlegear-card").length;
    battlegearCardLast = carousselItens[creatureCardTotal + (battlegearCardTotal - 1)].firstElementChild;
    mugicCardTotal = document.getElementsByClassName("mugic-card").length;
    mugicCardLast = carousselItens[battlegearCardTotal + creatureCardTotal + (mugicCardTotal - 1)].firstElementChild;
    locationCardTotal = document.getElementsByClassName("location-card").length;
    locationCardLast = carousselItens[battlegearCardTotal + creatureCardTotal + mugicCardTotal + (locationCardTotal - 1)].firstElementChild;
}


function creatureSelectorUp() {
    recountCards();
    creatureCount = true;
    battlegearCount = false;
    mugicCount = false;
    locationCount = false;
    let start = 1;
    let end = creatureCardTotal - 1;
    if (creatureCardTotal === 1) {
        returnToZero()
    } else {
        creatureIndex++
        if (creatureIndex < start) {
            creatureIndex = start
            $('.carousel').carousel(creatureIndex);
        }
        if (creatureIndex > end) {
            creatureIndex = start
            $('.carousel').carousel(creatureIndex);
        } else {
            $('.carousel').carousel(creatureIndex);
        }
    }


};
function creatureSelectorDown() {
    recountCards();
    creatureCount = true;
    battlegearCount = false;
    mugicCount = false;
    locationCount = false;
    let start = 1;
    let end = creatureCardTotal - 1;
    if (creatureCardTotal === 1) {
        returnToZero()
    } else {
        creatureIndex--

        if (creatureIndex < start) {
            creatureIndex = end
            $('.carousel').carousel(creatureIndex);
        }
        else {
            $('.carousel').carousel(creatureIndex);
        }
    }


};


function battlegearSelectorUp() {
    recountCards();
    creatureCount = false;
    battlegearCount = true;
    mugicCount = false;
    locationCount = false;
    let start = creatureCardTotal;
    let end = creatureCardTotal + battlegearCardTotal - 1;
    if (battlegearCardTotal === 0) {
        return returnToZero()
    }
    battlegearIndex++
    if (battlegearIndex < start) {
        battlegearIndex = start
        $('.carousel').carousel(battlegearIndex);
    } else
        if (battlegearIndex > end) {
            battlegearIndex = start
            $('.carousel').carousel(battlegearIndex);
        } else {
            $('.carousel').carousel(battlegearIndex);
        }
};
function battlegearSelectorDown() {
    recountCards();
    creatureCount = false;
    battlegearCount = true;
    mugicCount = false;
    locationCount = false;
    let start = creatureCardTotal;
    let end = creatureCardTotal + battlegearCardTotal - 1;
    if (battlegearCardTotal === 0) {
        return returnToZero()
    }
    battlegearIndex--
    if (battlegearIndex < start) {
        battlegearIndex = end
        $('.carousel').carousel(battlegearIndex);
    } else {
        $('.carousel').carousel(battlegearIndex);
    }
};


function mugicSelectorUp() {
    recountCards();
    creatureCount = false;
    battlegearCount = false;
    mugicCount = true;
    locationCount = false;
    let start = creatureCardTotal + battlegearCardTotal;
    let end = creatureCardTotal + battlegearCardTotal + mugicCardTotal - 1;
    if (mugicCardTotal === 0) {
        return returnToZero()
    }
    mugicIndex++
    if (mugicIndex < start) {
        mugicIndex = start
        $('.carousel').carousel(mugicIndex);
    } else
        if (mugicIndex > end) {
            mugicIndex = start
            $('.carousel').carousel(mugicIndex);
        } else {
            $('.carousel').carousel(mugicIndex);
        }
};
function mugicSelectorDown() {
    recountCards();
    creatureCount = false;
    battlegearCount = false;
    mugicCount = true;
    locationCount = false;
    let start = creatureCardTotal + battlegearCardTotal;
    let end = creatureCardTotal + battlegearCardTotal + mugicCardTotal - 1;
    if (mugicCardTotal.length === 0) {
        return returnToZero()
    }
    mugicIndex--
    if (mugicIndex < start) {
        mugicIndex = end
        $('.carousel').carousel(mugicIndex);
    } else {
        $('.carousel').carousel(mugicIndex);
    }
};



function locationSelectorUp() {
    recountCards();
    creatureCount = false;
    battlegearCount = false;
    mugicCount = false;
    locationCount = true;
    let start = creatureCardTotal + battlegearCardTotal + mugicCardTotal;
    let end = creatureCardTotal + battlegearCardTotal + mugicCardTotal + locationCardTotal - 1;
    if (locationCardTotal === 0) {
        return returnToZero()
    }
    locationIndex++
    if (locationIndex < start) {
        locationIndex = start
        $('.carousel').carousel(locationIndex);
    } else if (locationIndex > end) {
        locationIndex = start
        $('.carousel').carousel(locationIndex);
    } else {
        $('.carousel').carousel(locationIndex);
    }
};
function locationSelectorDown() {
    recountCards();
    creatureCount = false;
    battlegearCount = false;
    mugicCount = false;
    locationCount = true;
    let start = creatureCardTotal + battlegearCardTotal + mugicCardTotal;
    let end = creatureCardTotal + battlegearCardTotal + mugicCardTotal + locationCardTotal - 1;
    if (locationCardTotal === 0) {
        return returnToZero()
    }
    locationIndex--
    if (locationIndex < start) {
        locationIndex = end
        $('.carousel').carousel(locationIndex);
    } else {
        $('.carousel').carousel(locationIndex);
    }
};

//img view
function activeItem(values) {
    item = document.getElementsByClassName("active")[0];
    if (values === "alt") {
        return item.firstElementChild.alt;
    }
    if (values === "title") {
        return item.firstElementChild.title;
    }
    if (values === "classList") {
        return item.firstElementChild.classList;
    }
    return item.firstElementChild.src;


}
function cardSRC(e) {
    if (creatureCount === true) {
        let src = activeItem();
        let card = e.firstElementChild;
        let title = activeItem('title');
        card.src = src;
        card.title = title;
        card.classList.add('deckList-creature');

        let player = document.getElementById("audio3");
        player.autoplay = true;
        player.load();

        card.classList.remove("ocult");
    } else {

    }


}
function mugicSRC(e) {
    if (mugicCount === true) {
        let src = activeItem("classList");
        let card = e.firstElementChild;
        card.classList.remove("ocult");


        for (let i = 0; i < parseInt(card.alt); i++) {


            if (card.alt === mugic_img[i].alt) {
                let player = document.getElementById("audio3");

                player.autoplay = true;
                player.load();

                mugic_view_img[i].firstElementChild.src = activeItem("alt");
                mugic_view_img[i].firstElementChild.title = activeItem("title");
                mugic_view_img[i].firstElementChild.classList.add('deckList-mugic');
            }

        }
        if (src.contains("mipedian")) {
            card.src = "/img/mugic-mipe.png";
        } else if (src.contains("danian")) {
            card.src = "/img/mugic-danian.png";

        } else if (src.contains("marr")) {
            card.src = "/img/mugic-marr.png";
        } else if (src.contains("overworld")) {
            card.src = "/img/mugic-over.png";
        } else if (src.contains("underworld")) {
            card.src = "/img/mugic-under.png";
        } else {
            card.src = "/img/mugic-generic.png";
        }

    } else { }


}
function battlegearSRC(e) {
    if (battlegearCount === true) {
        let src = activeItem("alt");
        let title = activeItem('title');
        let card = e.firstElementChild.children[0];
        card.src = src;
        card.title = title;
        card.classList.add('deckList-batt');
    } else {

    }

}
function locationSRC(e) {
    if (locationCount === true) {
        let src = activeItem("alt");

        let card = e.firstElementChild
        card.src = src;

    } else {

    }
}


function mugicView(e) {
    mugic_view_img = document.getElementsByClassName('mugic-view-img');
    mugic_img = document.getElementsByClassName('mugic-img');

    if (e.className === 'mugics') {
        for (let i = 0; i < parseInt(e.alt); i++) {

            mugic_view_img[i].classList.remove('hide');
            if (e.alt === mugic_img[i].alt) {

                mugic_view_img[i].classList.add('hide');
                let a = document.getElementById("locationcard");
                a.firstElementChild.style.visibility = "hidden";

            }

        }
    }
};


function hideOut(e) {
    e.classList.remove('hide')
    let a = document.getElementById("locationcard");
    a.firstElementChild.style.visibility = "visible";
}

async function locationView() {

    viewlocation = document.getElementsByClassName("location-view")[0];
    viewlocation.classList.toggle('hide');
    selectorsDisplay = document.getElementsByClassName("seletores")[0];
    feather.replace();
    if (selectorsDisplay.classList.contains("d-flex")) {
        selectorsDisplay.classList.remove("d-flex");
        selectorsDisplay.classList.add("d-none");

    } else {
        selectorsDisplay.classList.remove("d-none");
        selectorsDisplay.classList.add("d-flex");
        msg = document.getElementsByClassName("location-deck")[0].firstElementChild;
        msg.innerHTML = `${locationTotal.length}/10`;
    }


}
function addLocation() {

    if (locationCount === true && locationTotal.length < 10) {

        let src = activeItem("alt");
        let card = document.getElementsByClassName("locationList")[0];
        let title = activeItem('title');
        card.innerHTML += `<div class="location-card-list "  onmouseover="ActiveElement(this)" onmouseout="removeElementActiveMouseOut()">
        <img src="${src}" class="deckList-location" alt="" title = "${title}">
        <button class="button-delete-location-card" onclick="deleteElementActive()"><i data-feather="trash-2"></i></button>
        </div>`;
        msg = document.getElementsByClassName("location-deck")[0].firstElementChild;
        msg.innerHTML = `${locationTotal.length}/10`;
        feather.replace();

    } else {

    }
}


function addAttack() {
    let ActiveAttck = document.getElementsByClassName("activeElementChild")[0];
    let addAtk = document.getElementsByClassName("listcardsDeck")[0];
    if (attckTotal.length < 20) {
        addAtk.innerHTML += `<div class="deckCards " onmouseover="ActiveElement(this)" onmouseout="removeElementActiveMouseOut()">
        <img src="${ActiveAttck.src}" class="deckList-atk" alt="" title = "${ActiveAttck.title}">
        <button class="btn btn-light" type="button" onclick="deleteElementActive()" >remove</button>
        </div>`;

        countatk = document.getElementsByClassName("counterAttack")[0].firstElementChild;
        countatk.innerHTML = `<h2>${attckTotal.length}/20</h2>`;

    }

}


//mode break
function activeModeBreak() {
    let animationMoveButton = document.getElementsByClassName("animated-div")[0];
    let filters = document.getElementById("filters");
    let sectionFilter = document.querySelector(".section-filter");
    if (animationMoveButton.style.marginLeft == "" || animationMoveButton.style.marginLeft == "0%") {
        animationMoveButton.style.marginLeft = "60%";
        animationMoveButton.style.backgroundColor = "#3ea6ff";
        filters.style.display = "flex";
        sectionFilter.style.display = "block";
        sectionFilter.style.visibility = "visible"
    } else {
        animationMoveButton.style.marginLeft = "0%";
        animationMoveButton.style.backgroundColor = "#9e9a9a";
        filters.style.display = "none";
        sectionFilter.style.display = "none";
        sectionFilter.style.visibility = "hidden"
    }
}
function filterTribe(e) {
    let carouselItem = () => document.querySelectorAll(".carousel-item");
    let mark = () => document.querySelectorAll(".mark");
    let tribe = e.title;
    if (tribe !== "all") {
        if (mark().length > 0) {
            mark().forEach(item => {
                if (item.firstElementChild.classList.contains(tribe)
                    && !item.classList.contains("carousel-item")) {
                    if (item.firstElementChild.classList.contains("mark-creature")) {
                        item.firstElementChild.classList.add("creature-card");
                        item.firstElementChild.classList.remove("mark-creature");
                    }
                    if (item.firstElementChild.classList.contains("mark-mugic")) {
                        item.firstElementChild.classList.add("mugic-card");
                        item.firstElementChild.classList.remove("mark-mugic");
                    }
                    item.classList.add("carousel-item");
                    item.classList.remove("mark");
                }
            })
        }


        carouselItem().forEach(item => {
            if (!item.firstElementChild.classList.contains(tribe)
                && item.firstElementChild.classList.contains("creature-card")) {


                item.firstElementChild.classList.add("mark-creature");
                item.firstElementChild.classList.remove("creature-card");


                item.classList.add("mark");
                item.classList.remove("carousel-item");
                let active = document.querySelector(".active");
                active.classList.remove("active");
                carouselItem()[0].classList.add("active");

            }
            if (!item.firstElementChild.classList.contains(tribe)
                && item.firstElementChild.classList.contains("mugic-card")) {

                item.firstElementChild.classList.add("mark-mugic");
                item.firstElementChild.classList.remove("mugic-card");
                item.classList.add("mark");
                item.classList.remove("carousel-item");
                let active = document.querySelector(".active");
                active.classList.remove("active");
                carouselItem()[0].classList.add("active");
            }

        })
        recountCards();

    } else {
        if (mark().length > 0) {
            mark().forEach(item => {

                if (item.firstElementChild.classList.contains("mark-creature")) {
                    item.firstElementChild.classList.add("creature-card");
                    item.firstElementChild.classList.remove("mark-creature");
                }
                if (item.firstElementChild.classList.contains("mark-mugic")) {
                    item.firstElementChild.classList.add("mugic-card");
                    item.firstElementChild.classList.remove("mark-mugic");
                }
                item.classList.add("carousel-item");
                item.classList.remove("mark");

            });
            recountCards();

        }

    }

}

function addAtcks() {
    let deckAtkSection = document.querySelector(".deck-attack-section");
    deckAtkSection.classList.toggle("d-flex");
}