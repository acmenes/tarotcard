//tarot has two suites- major and minor arcana
//so the app needs to first choose one or the other
//then the app needs to pick one of those cards
//or use values
//see if you can create something that decides between major and
//minor first, then picks a card
//challenge- can you include RX cards??

function pickTarot() {
    let chooseMinMaj = Math.floor(Math.random() * 2)
    if (chooseMinMaj === 1){
        const cards = ["The Fool", "The Magician", 
        "The High Priestess", "The Empress", 
        "The Emperor", "The Hierophant", "The Lovers",
        "The Chariot", "Strength", "The Hermit", 
        "Wheel of Fortune", "Justice", "The Hanged Man",
        "Death", "Temperance", "The Devil", "The Tower",
        "The Star", "The Moon", "The Sun", "Judgement",
        "The World"]
        const yourCard = Math.floor(Math.random() * cards.length);
        const pickMajor = cards[yourCard];
        alert("Your card is" + " " + pickMajor + ".");
    }else {
        const values = ["Ace", "Two", "Three", "Four",
        "Five", "Six", "Seven", "Eight", "Nine", "Ten",
        "Page", "Knight", "Queen", "King"]
        const idx = Math.floor(Math.random() * values.length);
        const suites = ["Swords", "Wands", "Cups", "Pentacles"]
        const getSuite = Math.floor(Math.random() * suites.length);
        const cardValue = values[idx];
        const pickMinor = suites[getSuite];
        alert("Your card is the" + " " + cardValue + " " +
        "of" + " " + pickMinor + ".");
    }
}