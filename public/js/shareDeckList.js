

function checkDuplicate(arrayIndex, index) {

    let arrayFilter = []
    for (let i = 0; i < arrayIndex.length; i++) {
        if (arrayIndex[i] == arrayIndex[index]) {
            arrayFilter.push(arrayIndex[i]);
        };
    };

    return arrayFilter;
}

function arrayListFilterDuplicate(arrayData, newArryList) {
    var duplicate = '';
    let newArryData = [];

    arrayData.forEach((cardTitle) => newArryData.push(cardTitle.title));

    for (let i = 0; i < newArryData.length; i++) {
        var index = i;

        let filter = checkDuplicate(newArryData, index);

        if (filter.length > 1 && filter[0] != duplicate) {
            duplicate = filter[0];
            duplicateLength = filter.length;
            newArryList.push(`${duplicateLength}x ${duplicate}`);
        }
        if (filter.length > 1) {

            newArryData.splice(i, 1);
            i--;
        } else {
            if (filter[0] == duplicate) {

            } else {
                newArryList.push(`${filter.length}x${filter[0]}`);

            }


        }


    }
}


function shareDeckList() {
    let deckListCreature = document.querySelectorAll(".deckList-creature") || [''];
    let deckListBattle = document.querySelectorAll(".deckList-batt") || [''];
    let deckListMugic = document.querySelectorAll(".deckList-mugic") || [''];
    let deckListLocation = document.querySelectorAll(".deckList-location") || [''];
    let deckListAtk = document.querySelectorAll(".deckList-atk") || [''];
    let creatureArry = [], battlegearArry = [], mugicArry = [], locationArry = [], atkArry = [];
    let creatureList = `
#chaotic #chaotic_decks
==== CREATURE ====
`;
    let battlegearList = `=== BATTLEGEAR ===
`;
    let mugicList = `===== MUGIC =====
`;
    let locationList = `==== LOCATION ====
`;
    let atkList = `===== ATK ======
`;

    arrayListFilterDuplicate(deckListCreature, creatureArry)
    arrayListFilterDuplicate(deckListBattle, battlegearArry)
    arrayListFilterDuplicate(deckListMugic, mugicArry)
    arrayListFilterDuplicate(deckListLocation, locationArry)
    arrayListFilterDuplicate(deckListAtk, atkArry)
    creatureArry.forEach(title => {
        creatureList += `${title}
`
    });
    battlegearArry.forEach(title => {
        battlegearList += `${title}
`
    });
    mugicArry.forEach(title => {
        mugicList += `${title}
`
    });
    locationArry.forEach(title => {
        locationList += `${title}
`
    });
    atkArry.forEach(title => {
        atkList += `${title}
`
    });

    let deckList = `${creatureList}
${battlegearList}
${mugicList}
${locationList}
${atkList}`;

    return deckList;
}
