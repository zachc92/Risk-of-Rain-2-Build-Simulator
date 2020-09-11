const navs = document.querySelectorAll('h3');
const cards = document.querySelectorAll('.card-img img');
const survivorList = document.querySelectorAll('.char-img');

const commonItems = document.querySelector('.common-items');
const uncommonItems = document.querySelector('.uncommon-items');
const legendaryItems = document.querySelector('.legendary-items');
const bossItems = document.querySelector('.boss-items');
const lunarItems = document.querySelector('.lunar-items');
const equipItems = document.querySelector('.equip-items');

const buildColumn = document.querySelector('.col-build');
const survivorChoice = document.querySelector('#survivor');

const atkSpd = document.querySelector('.atkspd');

const baseRegen = document.querySelector('#base-regen');
const oocRegen = document.querySelector('#ooc-regen');
const okRegen = document.querySelector('#ok-regen');

const baseMs = document.querySelector('#base-ms');
const oocMs = document.querySelector('#ooc-ms');
const okMs = document.querySelector('#ok-ms');

const blockChance = document.querySelector('#block-chance');
const critChance = document.querySelector('#crit-chance');
const stunChance = document.querySelector('#stun-chance');
const bleedChance = document.querySelector('#bleed-chance');
const health = document.querySelector('#health');
const shield = document.querySelector('#shield');
const level = document.querySelector('#level');
const barrier = document.querySelector('#barrier');
const mitigation = document.querySelector('#mitigation');

const levelUp = document.querySelector('#level-up');
const levelDown = document.querySelector('#level-down');

const shieldBar = document.querySelector('#shield-bar');
const healthBar = document.querySelector('#health-bar');

const survivors = {
    Acrid: {
        level: 1,
        health: 160,
        healthLevel: 48,
        regen: 2.5,
        regenLevel: 0.5
    },
    Artificer: {
        level: 1,
        health: 110,
        healthLevel: 33,
        regen: 1,
        regenLevel: 0.2
    },
    Captain: {
        level: 1,
        health: 110,
        healthLevel: 33,
        regen: 1,
        regenLevel: 0.2
    },
    Commando: {
        level: 1,
        health: 110,
        healthLevel: 33,
        regen: 1,
        regenLevel: 0.2
    },
    Engineer: {
        level: 1,
        health: 130,
        healthLevel: 39,
        regen: 1,
        regenLevel: 0.2
    },
    Huntress: {
        level: 1,
        health: 90,
        healthLevel: 27,
        regen: 1,
        regenLevel: 0.2
    },
    Loader: {
        level: 1,
        health: 160,
        healthLevel: 48,
        regen: 2.5,
        regenLevel: 0.5
    },
    Mercenary: {
        level: 1,
        health: 110,
        healthLevel: 33,
        regen: 1,
        regenLevel: 0.2
    },
    MULT: {
        level: 1,
        health: 200,
        healthLevel: 60,
        regen: 1,
        regenLevel: 0.2
    },
    REX: {
        level: 1,
        health: 130,
        healthLevel: 39,
        regen: 1,
        regenLevel: 0.2
    }
}

let selectedSurvivor;

const items = [
    [{apr: {
        quantity: 0,
        multiplier: 20
    }},
    {bf: {
        quantity: 0,
        multiplier1: 2.25,
        multiplier2: 1.5
    }},
    {bof: {
        quantity: 0,
        multiplier: 4
    }},
    {bum: {
        quantity: 0,
        multiplier: 4
    }},
    {cb: {
        quantity: 0,
        multiplier: 50
    }},
    {cs: {
        quantity: 0,
        multiplier: 3
    }},
    {fc: {
        quantity: 0,
        multiplier: 15
    }},
    {fm: {
        quantity: 0,
        multiplier: 3
    }},
    {nrg: {
        quantity: 0,
        multiplier: 20
    }},
    {gas: {
        quantity: 0,
        multiplier1: 4,
        multiplier2: 75
    }},
    {lmg: {
        quantity: 0,
        multiplier: 10
    }},
    {med: {
        quantity: 0,
        multiplier: 5
    }},
    {mt: {
        quantity: 0,
        multiplier: 2
    }},
    {pgh: {
        quantity: 0,
        multiplier: 14
    }},
    {psg: {
        quantity: 0,
        multiplier: .08
    }},
    {rap: {
        quantity: 0,
        multiplier: 5
    }},
    {rk: {
        quantity: 0,
        multiplier: "unique"
    }},
    {sb: {
        quantity: 0,
        multiplier: 5
    }},
    {sg: {
        quantity: 0,
        multiplier: 5
    }},
    {ss: {
        quantity: 0,
        multiplier: 15
    }},
    {tb: {
        quantity: 0,
        multiplier: 15
    }},
    {tt: {
        quantity: 0,
        multiplier: 15
    }},
    {ttd: {
        quantity: 0,
        multiplier: 15
    }},
    {wb: {
        quantity: 0,
        multiplier: 8
    }}],
    [{atg: {
        quantity: 0,
        multiplier: 300
    }},
    {ban: {
        quantity: 0,
        multiplier: 10
    }},
    {ber: {
        quantity: 0,
        multiplier: 4
    }},
    {chr: {
        quantity: 0,
        multiplier: 4
    }},
    {dm: {
        quantity: 0,
        multiplier: 7
    }},
    {fue: {
        quantity: 0,
        multiplier1: 1,
        multiplier2: 15
    }},
    {gho: {
        quantity: 0,
        multiplier: 4
    }},
    {har: {
        quantity: 0,
        multiplier: 4
    }},
    {hop: {
        quantity: 0,
        multiplier: 1
    }},
    {inf: {
        quantity: 0,
        multiplier1: 1,
        multiplier2: 100
    }},
    {kja: {
        quantity: 0,
        multiplier: 300
    }},
    {lee: {
        quantity: 0,
        multiplier: 1
    }},
    {lep: {
        quantity: 0,
        multiplier: 1
    }},
    {old: {
        quantity: 0,
        multiplier: 13
    }},
    {ows: {
        quantity: 0,
        multiplier: 1.5
    }},
    {pri: {
        quantity: 0,
        multiplier: 24
    }},
    {raz: {
        quantity: 0,
        multiplier: 10
    }},
    {red: {
        quantity: 0,
        multiplier: 30
    }},
    {ros: {
        quantity: 0,
        multiplier: 30
    }},
    {run: {
        quantity: 0,
        multiplier1: 3,
        multiplier2: 250
    }},
    {squ: {
        quantity: 0,
        multiplier: 100
    }},
    {uku: {
        quantity: 0,
        multiplier1: 2,
        multiplier2: 2
    }},
    {war: {
        quantity: 0,
        multiplier: 4
    }},
    {wax: {
        quantity: 0,
        multiplier: 10
    }},
    {wow: {
        quantity: 0,
        multiplier1: 2.4,
        multiplier2: 280
    }}
    ]
];

const effects = {
    atkspd: 100,
    atkpwr: 100
}

let healthStorage = 0;

// const build = [];

navRarity = (e) => {
    if(e.target.innerHTML === 'Common') {
        if(commonItems.classList.contains('hidden') == true) {
            commonItems.classList.toggle('hidden');
            uncommonItems.classList.add('hidden');
            legendaryItems.classList.add('hidden');
            bossItems.classList.add('hidden');
            lunarItems.classList.add('hidden');
            equipItems.classList.add('hidden');
        } else {
            return;
        }
    } else if(e.target.innerHTML === 'Uncommon') {
        if(uncommonItems.classList.contains('hidden') == true) {
            commonItems.classList.add('hidden');
            uncommonItems.classList.toggle('hidden');
            legendaryItems.classList.add('hidden');
            bossItems.classList.add('hidden');
            lunarItems.classList.add('hidden');
            equipItems.classList.add('hidden');
        } else {
            return;
        }
    } else if(e.target.innerHTML === 'Legendary') {
        if(legendaryItems.classList.contains('hidden') == true) {
            commonItems.classList.add('hidden');
            uncommonItems.classList.add('hidden');
            legendaryItems.classList.toggle('hidden');
            bossItems.classList.add('hidden');
            lunarItems.classList.add('hidden');
            equipItems.classList.add('hidden');
        } else {
            return;
        }
    } else if(e.target.innerHTML === 'Boss') {
        if(bossItems.classList.contains('hidden') == true) {
            commonItems.classList.add('hidden');
            uncommonItems.classList.add('hidden');
            legendaryItems.classList.add('hidden');
            bossItems.classList.toggle('hidden');
            lunarItems.classList.add('hidden');
            equipItems.classList.add('hidden');
        } else {
            return;
        }
    } else if(e.target.innerHTML === 'Lunar') {
        if(lunarItems.classList.contains('hidden') == true) {
            commonItems.classList.add('hidden');
            uncommonItems.classList.add('hidden');
            legendaryItems.classList.add('hidden');
            bossItems.classList.add('hidden');
            lunarItems.classList.toggle('hidden');
            equipItems.classList.add('hidden');
        } else {
            return;
        }
    } else if(e.target.innerHTML === 'Equip') {
        if(uncommonItems.classList.contains('hidden') == true) {
            commonItems.classList.add('hidden');
            uncommonItems.classList.add('hidden');
            legendaryItems.classList.add('hidden');
            bossItems.classList.add('hidden');
            lunarItems.classList.add('hidden');
            equipItems.classList.toggle('hidden');
        } else {
            return;
        }
    } else {
        console.log('no');
    }
};

renderBuildList = () => {
    // non-stacking benefits
    let harCrit = 0;
    let priCrit = 0;

    if(items[1][7].har.quantity > 0) {
        harCrit = 5;
    }

    if(items[1][15].pri.quantity > 0) {
        priCrit = 5;
    }

    // effects not dependent on proc coefficient

    level.innerHTML = `${selectedSurvivor.level}`;
    health.innerHTML = `${(selectedSurvivor.health) + ((selectedSurvivor.level - 1) * selectedSurvivor.healthLevel) + (items[1][9].inf.quantity * items[1][9].inf.multiplier2)}`
    healthStorage = parseInt(health.innerHTML);shield.innerHTML = `${Math.floor(healthStorage * (items[0][14].psg.quantity * items[0][14].psg.multiplier))}`;
    shield.innerHTML = `${Math.floor(healthStorage * (items[0][14].psg.quantity * items[0][14].psg.multiplier))}`;
    barrier.innerHTML = `${items[0][20].tb.quantity * items[0][20].tb.multiplier}`;
    mitigation.innerHTML = `${items[0][15].rap.quantity * items[0][15].rap.multiplier}`;

    atkSpd.innerHTML = `Attack Speed: ${100 + (items[0][19].ss.quantity * items[0][19].ss.multiplier)}%`;
    blockChance.innerHTML =`${Math.round((1 - 1 / (0.15 * items[0][21].tt.quantity + 1)) * 100)}%`;

    baseRegen.innerHTML = `${selectedSurvivor.regen + (selectedSurvivor.regenLevel * (selectedSurvivor.level - 1))}/s`;
    oocRegen.innerHTML = `${selectedSurvivor.regen + (selectedSurvivor.regenLevel * (selectedSurvivor.level - 1)) + (items[0][5].cs.quantity * items[0][5].cs.multiplier)}/s`;
    okRegen.innerHTML = `${selectedSurvivor.regen + (selectedSurvivor.regenLevel * (selectedSurvivor.level - 1))}/s`

    baseMs.innerHTML = `${ 100 + (items[0][13].pgh.quantity * items[0][13].pgh.multiplier)}%`;
    oocMs.innerHTML = `${ 100 + (items[1][17].red.quantity * items[1][17].red.multiplier) + (items[0][13].pgh.quantity * items[0][13].pgh.multiplier)}%`;
    okMs.innerHTML = `${ 100 + (items[0][13].pgh.quantity * items[0][13].pgh.multiplier)}%`

    // effects dependent on proc coefficient

    critChance.innerHTML =`${1 + (items[0][10].lmg.quantity * items[0][10].lmg.multiplier) + harCrit + priCrit}%`;
    stunChance.innerHTML = `${Math.round((1 - 1 / (0.05 * items[0][18].sg.quantity + 1)) * 100)}%`
    bleedChance.innerHTML = `${items[0][22].ttd.quantity * items[0][22].ttd.multiplier}%`;
    

    

    

    // styling dependent on item quantity
    
    if(shield.innerHTML !== "0") {
        shieldBar.style.backgroundColor = "#4f65b1";
    }

    if(items[1][9].inf.quantity > 0){
        healthBar.style.backgroundColor = "#b13f25";
    }
}

addToBuild = (e) => {
    if(selectedSurvivor === undefined) {
        alert('Please select a survivor first.');
        return;
    }
    let rarity;
    switch(e.target.parentElement.parentElement.parentElement.id) {
        case "common":
            rarity = 0;
            break;
        case "uncommon":
            rarity = 1;
            break;
        case "legendary":
            rarity = 2;
            break;
        case "boss":
            rarity = 3;
            break;
        case "lunar":
            rarity = 4;
            break;
        case "equip":
            rarity = 5;
            break;
    }


    const added = e.target.parentElement.parentElement.id;
    for(i = 0; i < items[rarity].length; i++) {
        if(items[rarity][i][added] !== undefined) {
        items[rarity][i][added].quantity++;
        e.target.nextSibling.nextSibling.innerHTML = `x${items[rarity][i][added].quantity}`;
        i = items[rarity].length;
        console.log('code ran');
        }
    }
    renderBuildList();
}

buildBarState = () => {
    if(window.scrollY >= 375) {
        buildColumn.style.top = 0;
        buildColumn.style.position = "fixed";
    } else if (window.scrollY < 375) {
        buildColumn.style.top = "";
        buildColumn.style.position = "absolute";
    }
}

selectCharacter = (e) => {
    selectedSurvivor = survivors[e.target.id];
    survivorChoice.innerHTML = `${e.target.id}`;
    renderBuildList();
}

levelSurvivor = (e) => {
    if(e.target.id === "level-up") {
        selectedSurvivor.level++;
        renderBuildList();
    } else if(e.target.id === "level-down") {
        if(selectedSurvivor.level >= 2) {
            selectedSurvivor.level--;
            renderBuildList();
        } else {
            return;
        }
    }
}

buttonClicked = (e) => {
    e.target.style.backgroundColor = "#a0b9ef";
}

buttonUnclicked = (e) => {
    e.target.style.backgroundColor = ""
}

navs.forEach(el => { el.addEventListener('click', navRarity) });
cards.forEach(el => { el.addEventListener('click', addToBuild )});
survivorList.forEach(el => { el.addEventListener('click', selectCharacter) });

window.addEventListener('scroll', buildBarState);
levelUp.addEventListener('click', levelSurvivor);
levelDown.addEventListener('click', levelSurvivor);

levelUp.addEventListener('mousedown', buttonClicked);
levelUp.addEventListener('mouseup', buttonUnclicked);

levelDown.addEventListener('mousedown', buttonClicked);
levelDown.addEventListener('mouseup', buttonUnclicked);