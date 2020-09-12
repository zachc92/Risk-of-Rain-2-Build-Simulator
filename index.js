const navs = document.querySelectorAll('h3');
const cards = document.querySelectorAll('.card-img img');
const survivorList = document.querySelectorAll('.char-img');

const abilitiesBox = document.querySelector('.abilities-box');

const primaryAbilityChoice = document.querySelector('#primaries');
const secondaryAbilityChoice = document.querySelector('#secondaries');
const utilityAbilityChoice = document.querySelector('#utilities');
const specialAbilityChoice = document.querySelector('#specials');

// DOM elements for item column

const commonItems = document.querySelector('.common-items');
const uncommonItems = document.querySelector('.uncommon-items');
const legendaryItems = document.querySelector('.legendary-items');
const bossItems = document.querySelector('.boss-items');
const lunarItems = document.querySelector('.lunar-items');
const equipItems = document.querySelector('.equip-items');

const primaryAbility = document.querySelector('#primary-ability');
const secondaryAbility = document.querySelector('#secondary-ability');
const utilityAbility = document.querySelector('#utility-ability');
const specialAbility = document.querySelector('#special-ability');

// DOM elements for build column

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
    Acrid: { level: 1, health: 160, healthLevel: 48, regen: 2.5, regenLevel: 0.5,
                abilities: { primary: [{ name: "Vicious Wounds", cooldown: 0, proc: 1, desc: "Maul an enemy for 200% damage. Every 3rd hit is Regenerative and deals 400% damage.", img: "./img/abilities/acrid/primary.png" }],
                             secondary: [{ name: "Neurotoxin", cooldown: 2, proc: 1, desc: "Poisonous. Spit toxic bile for 240% damage.", img: "./img/abilities/acrid/secondary1.png" }, { name: "Ravenous Bite", cooldown: 2, proc: 1, desc: "Poisonous. Regenerative. Bite an enemy for 310% damage. Deals up to 3x damage to low health enemies.", img: "./img/abilities/acrid/secondary2.png" }],
                             utility: [{ name: "Caustic Leap", cooldown: 6, proc: 1, desc: "Poisonous. Stunning. Leap in the air, dealing 320% damage. Leave acid that deals 25% damage.", img: "./img/abilities/acrid/utility1.png" }, { name: "Frenzied Leap", cooldown: 10, proc: 1, desc: "Stunning. Leap in the air, dealing 550% damage. Reduce the cooldown by 2s for every enemy hit.", img: "./img/abilities/acrid/utility2.png" }],
                             special: [{ name: "Epidemic", cooldown: 10, proc: 1, desc: "Poisonous. Release a deadly disease that deals 100% damage. The disease spreads to up to 20 targets.", img: "./img/abilities/acrid/special.png" }]
                            } 
            },
    Artificer: { level: 1, health: 110, healthLevel: 33, regen: 1, regenLevel: 0.2 },
    Captain: { level: 1, health: 110, healthLevel: 33, regen: 1, regenLevel: 0.2 },
    Commando: { level: 1, health: 110, healthLevel: 33, regen: 1, regenLevel: 0.2 },
    Engineer: { level: 1, health: 130, healthLevel: 39, regen: 1, regenLevel: 0.2 },
    Huntress: { level: 1, health: 90, healthLevel: 27, regen: 1, regenLevel: 0.2 },
    Loader: { level: 1, health: 160, healthLevel: 48, regen: 2.5, regenLevel: 0.5 },
    Mercenary: { level: 1, health: 110, healthLevel: 33, regen: 1, regenLevel: 0.2 },
    MULT: { level: 1, health: 200, healthLevel: 60, regen: 1, regenLevel: 0.2 },
    REX: { level: 1, health: 130, healthLevel: 39, regen: 1, regenLevel: 0.2 }
}

let selectedSurvivor;
let selectedAbilities = { primary: { }, secondary: { }, utility: { }, special: { } };

const items = [
    [   
        { apr: { quantity: 0, multiplier: 20 } },
        { bf: { quantity: 0, multiplier1: 2.25, multiplier2: 1.5 } },
        { bof: { quantity: 0, multiplier: 4 } },
        { bum: { quantity: 0, multiplier: 4 } },
        { cb: { quantity: 0, multiplier: 50 } },
        { cs: { quantity: 0, multiplier: 3 } },
        { fc: { quantity: 0, multiplier: 15 } },
        { fm: { quantity: 0, multiplier: 3 } },
        { nrg: { quantity: 0, multiplier: 20 } },
        { gas: { quantity: 0, multiplier1: 4, multiplier2: 75 } },
        { lmg: { quantity: 0, multiplier: 10 } },
        { med: { quantity: 0, multiplier: 5 } },
        { mt: { quantity: 0, multiplier: 2 } },
        { pgh: { quantity: 0, multiplier: 14 } },
        { psg: { quantity: 0, multiplier: .08 } },
        { rap: { quantity: 0, multiplier: 5 } },
        { rk: { quantity: 0, multiplier: "unique" } },
        { sb: { quantity: 0, multiplier: 5 } },
        { sg: { quantity: 0, multiplier: 5 } },
        { ss: { quantity: 0, multiplier: 15 } },
        { tb: { quantity: 0, multiplier: 15 } },
        { tt: { quantity: 0, multiplier: 15 } },
        { ttd: { quantity: 0, multiplier: 15 } },
        { wb: { quantity: 0, multiplier: 8 } }
    ],
    [
        { atg: { quantity: 0, multiplier: 300 } },
        { ban: { quantity: 0, multiplier: 10 } },
        { ber: { quantity: 0, multiplier: 4 } },
        { chr: { quantity: 0, multiplier: 4 } },
        { dm: { quantity: 0, multiplier: 7 } },
        { fue: { quantity: 0, multiplier1: 1, multiplier2: 15 } },
        { gho: { quantity: 0, multiplier: 4 } },
        { har: { quantity: 0, multiplier: 4 } },
        { hop: { quantity: 0, multiplier: 1 } },
        { inf: { quantity: 0, multiplier1: 1, multiplier2: 100 } },
        { kja: { quantity: 0, multiplier: 300 } },
        { lee: { quantity: 0, multiplier: 1 } },
        { lep: { quantity: 0, multiplier: 1 } },
        { old: { quantity: 0, multiplier: 13 } },
        { ows: { quantity: 0, multiplier: 1.5 } },
        { pri: { quantity: 0, multiplier: 24 } },
        { raz: { quantity: 0, multiplier: 10 } },
        { red: { quantity: 0, multiplier: 30 } },
        { ros: { quantity: 0, multiplier: 30 } },
        { run: { quantity: 0, multiplier1: 3, multiplier2: 250 } },
        { squ: { quantity: 0, multiplier: 100 } },
        { uku: { quantity: 0, multiplier1: 2, multiplier2: 2 } },
        { war: { quantity: 0, multiplier: 4 } },
        { wax: { quantity: 0, multiplier: 10 } },
        { wow: { quantity: 0, multiplier1: 2.4, multiplier2: 280 }}
    ],
    [
        { clo: { quantity: 0, mutliplier: 1 } },
        { aeg: { quantity: 0, multiplier: 50 } },
        { bra: { quantity: 0, multiplier: 25 } },
        { ali: { quantity: 0, mutliplier: 4 } },
        { beh: { quantity: 0, multiplier: 1.5 } },
        { dag: { quantity: 0, multiplier: 150 } },
        { def: { quantity: 0, multiplier: 1 } },
        { dio: { quantity: 0 } },
        { fro: { quantity: 0, multiplier: 6 } },
        { hst: { quantity: 0, multiplier: 50 } },
        { hap: { quantity: 0, multiplier: 30 } },
        { hab: { quantity: 0, multiplier: 2 } },
        { idp: { quantity: 0, multiplier: 5 } },
        { nko: { quantity: 0, multiplier: 100 } },
        { rej: { quantity: 0, multiplier: 100 } },
        { res: { quantity: 0, multiplier1: 300, multiplier2: 1000 } },
        { smh: { quantity: 0, multiplier1: 20, multiplier2: 5 } },
        { shj: { quantity: 0, multiplier: 8 } },
        { sbc: { quantity: 0, multiplier: 2 } },
        { utc: { quantity: 0, multiplier: 2 } },
        { wov: { quantity: 0, multiplier: 5 } },
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
    
    selectedSurvivor.abilities.primary.forEach(el => { 
        let img = document.createElement('img');
        img.src = el.img;
        img.id = el.name;
        primaries.appendChild(img);
    });

    selectedSurvivor.abilities.secondary.forEach(el => {
        let img = document.createElement('img');
        img.src = el.img;
        img.id = el.name;
        secondaries.appendChild(img);
    });

    selectedSurvivor.abilities.utility.forEach(el => {
        let img = document.createElement('img');
        img.src = el.img;
        img.id = el.name;
        utilities.appendChild(img);
    });

    selectedSurvivor.abilities.special.forEach(el => {
        let img = document.createElement('img');
        img.src = el.img;
        img.id = el.name;
        specials.appendChild(img);
    });

    abilitiesBox.style.display = "block";

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

selectAbility = (e) => {
    if(e.target.parentElement.id === "primaries") {
        for(i = 0; i < selectedSurvivor.abilities.primary.length; i++) {
            if(selectedSurvivor.abilities.primary[i].name === e.target.id) {
                selectedAbilities.primary = selectedSurvivor.abilities.primary[i];
                primaryAbility.src = selectedAbilities.primary.img;
            }
        }
    } else if(e.target.parentElement.id === "secondaries") {
        for(i = 0; i < selectedSurvivor.abilities.secondary.length; i++) {
            if(selectedSurvivor.abilities.secondary[i].name === e.target.id) {
                selectedAbilities.secondary = selectedSurvivor.abilities.secondary[i];
                secondaryAbility.src = selectedAbilities.secondary.img;
            }
        }
    } else if(e.target.parentElement.id === "utilities") {
        for(i = 0; i < selectedSurvivor.abilities.utility.length; i++) {
            if(selectedSurvivor.abilities.utility[i].name === e.target.id) {
                selectedAbilities.utility = selectedSurvivor.abilities.utility[i];
                utilityAbility.src = selectedAbilities.utility.img;
            }
        }
    } else if(e.target.parentElement.id === "specials") {
        for(i = 0; i < selectedSurvivor.abilities.special.length; i++) {
            if(selectedSurvivor.abilities.special[i].name === e.target.id) {
                selectedAbilities.special = selectedSurvivor.abilities.special[i];
                specialAbility.src = selectedAbilities.special.img;
            }
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

abilitiesBox.addEventListener('click', selectAbility);

window.addEventListener('scroll', buildBarState);
levelUp.addEventListener('click', levelSurvivor);
levelDown.addEventListener('click', levelSurvivor);

levelUp.addEventListener('mousedown', buttonClicked);
levelUp.addEventListener('mouseup', buttonUnclicked);

levelDown.addEventListener('mousedown', buttonClicked);
levelDown.addEventListener('mouseup', buttonUnclicked);