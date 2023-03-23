const baseURL = 'https://deckofcardsapi.com/api/deck'

async function getOneCard() {
    let response = await axios.get(`${baseURL}/new/shuffle/?deck_count=1`)
    let deck_id = response.data.deck_id
    let cardResponse = await axios.get(`${baseURL}/${deck_id}/draw/?count=1`)
    console.log(cardResponse.data.cards[0].value, cardResponse.data.cards[0].suit)
}

async function getTwoCards() {
    let response = await axios.get(`${baseURL}/new/shuffle/?deck_count=1`)
    const cards = []
    let cardResponseOne = await axios.get(`${baseURL}/${response.data.deck_id}/draw/?count=1`)
    let cardResponseTwo = await axios.get(`${baseURL}/${response.data.deck_id}/draw/?count=1`)
    console.log(cardResponseOne.data.cards[0].value, cardResponseOne.data.cards[0].suit)
    console.log(cardResponseTwo.data.cards[0].value, cardResponseTwo.data.cards[0].suit)
}

const cardContainer = document.querySelector('#card-container')

function generateCardMarkup(card) {
    let cardWrapper = document.createElement('div')
    let cardImage = document.createElement('img')
    cardImage.src = card.image

    cardWrapper.appendChild(cardImage)
    cardContainer.appendChild(cardWrapper)
}

async function displayDeck() {
    let response = await axios.get(`${baseURL}/new/shuffle/?deck_count=1`)
    let button = document.createElement('button')
    button.innerText = 'Click For Card'

    let allCards = await axios.get(`${baseURL}/${response.data.deck_id}/draw/?count=52`)
    document.body.prepend(button)
    let counter = 0
    button.addEventListener('click', function () {
        if (counter <= 51) {
            generateCardMarkup(allCards.data.cards[counter])
            counter++;
        }
        else {
            button.innerText = 'no more cards'
            button.style.border = '1px solid red'
        }
    })
}