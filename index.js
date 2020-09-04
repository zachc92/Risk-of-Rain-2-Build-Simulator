const navs = document.querySelectorAll('h3');
const cards = document.querySelectorAll('.card-img img');

const commonItems = document.querySelector('.common-items');
const uncommonItems = document.querySelector('.uncommon-items');
const legendaryItems = document.querySelector('.legendary-items');
const bossItems = document.querySelector('.boss-items');
const lunarItems = document.querySelector('.lunar-items');
const equipItems = document.querySelector('.equip-items');

const buildColumn = document.querySelector('.col-build');

const build = {
    apr: {
            quantity: 0,
            effect: ""
        },
    
};

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

addToBuild = (e) => {
    const added = e.target.parentElement.parentElement.id;
    console.log(added);
}

buildBarState = () => {
    console.log(window.scrollY);
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