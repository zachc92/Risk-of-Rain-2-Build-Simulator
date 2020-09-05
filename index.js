const navs = document.querySelectorAll('h3');
const cards = document.querySelectorAll('.card-img img');

const commonItems = document.querySelector('.common-items');
const uncommonItems = document.querySelector('.uncommon-items');
const legendaryItems = document.querySelector('.legendary-items');
const bossItems = document.querySelector('.boss-items');
const lunarItems = document.querySelector('.lunar-items');
const equipItems = document.querySelector('.equip-items');

const buildColumn = document.querySelector('.col-build');

const items = [
    {apr: {
        name: "Armor Piercing Rounds",
        quantity: 0,
        effect: "Deal an additional " + 20 + "% damage to bosses",
        multiplier: 20
    }},
    {bf: {
        name: "Bustling Fungus",
        quantity: 0,
        effect: ""
    }},
    {bof: {
        name: "Bundle of Fireworks",
        quantity: 0,
        effect: ""
    }},
    {cb: {
        name: "Crowbar",
        quantity: 0,
        effect: ""
    }},
    {cs: {
        name: "Cautious Slug",
        quantity: 0,
        effect: ""
    }},
    {fc: {
        name: "Focus Crystal",
        quantity: 0,
        effect: ""
    }},
    {fm: {
        name: "Fresh Meat",
        quantity: 0,
        effect: ""
    }},
    {nrg: {
        name: "Energy Drink",
        quantity: 0,
        effect: ""
    }},
    {gas: {
        name: "Gasoline",
        quantity: 0,
        effect: ""
    }},
    {lmg: {
        name: "Lens-Maker's Glasses",
        quantity: 0,
        effect: ""
    }},
    {med: {
        name: "Medkit",
        quantity: 0,
        effect: ""
    }},
    {mt: {
        name: "Monster Tooth",
        quantity: 0,
        effect: ""
    }},
    {pgh: {
        name: "Paul's Goat Hoof",
        quantity: 0,
        effect: ""
    }},
    {psg: {
        name: "Personal Shield Generator",
        quantity: 0,
        effect: ""
    }},
    {rap: {
        name: "Repulsion Armor Plating",
        quantity: 0,
        effect: ""
    }},
    {rk: {
        name: "Rusted Key",
        quantity: 0,
        effect: ""
    }},
    {sb: {
        name: "Sticky Bomb",
        quantity: 0,
        effect: ""
    }},
    {sg: {
        name: "Stun Grenade",
        quantity: 0,
        effect: ""
    }},
    {ss: {
        name: "Soldier's Syringe",
        quantity: 0,
        effect: ""
    }},
    {tb: {
        name: "Topaz Brooch",
        quantity: 0,
        effect: ""
    }},
    {tt: {
        name: "Tougher Times",
        quantity: 0,
        effect: ""
    }},
    {ttd: {
        name: "Tri-tip Dagger",
        quantity: 0,
        effect: ""
    }},
    {wb: {
        name: "Warbanner",
        quantity: 0,
        effect: ""
    }}  
];

const effects = {
    atkspd: 100,
    atkpwr: 100
}

const build = [];

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
    console.log('rendering build list')
}

addToBuild = (e) => {
    const added = e.target.parentElement.parentElement.id;
    for(i = 0; i < items.length; i++) {
        if(items[i][added] !== undefined) {
        items[i][added].quantity++;
        
        return;
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

navs.forEach(el => { el.addEventListener('click', navRarity) });
cards.forEach(el => { el.addEventListener('click', addToBuild )});
window.addEventListener('scroll', buildBarState);