baseURL = 'https://deckofcardsapi.com/api/deck'

//part 1
/* axios.get(`${baseURL}/new/shuffle/?deck_count=1`)
.then((response) => {
     return axios.get(`${baseURL}/${response.data.deck_id}/draw/?count=1`)
})
.then ((response) => {
    console.log(response.data.cards[0].value, response.data.cards[0].suit)
})
 */


//part 2
/* 
axios.get(`${baseURL}/new/shuffle/?deck_count=1`)
.then((response) => {
    const card_promises = []
    for (let i = 1; i < 3; i++){
        card_promises.push(axios.get(`${baseURL}/${response.data.deck_id}/draw/?count=1`))
    }
    Promise.all(card_promises)
    .then(card_promises => {
        card_promises.forEach(card => {
        for (resultCard of card.data.cards){
            console.log(resultCard.value, resultCard.suit)
        }
    });
})
}) */

const cardContainer = document.querySelector('#card-container')

function generateCardMarkup(card){
    let cardWrapper = document.createElement('div')
    let cardImage = document.createElement('img')
    cardImage.src = card.image

    cardWrapper.appendChild(cardImage)
    cardContainer.appendChild(cardWrapper)
}

axios.get(`${baseURL}/new/shuffle/?deck_count=1`)
.then((response) => {
    let button = document.createElement('button')
    button.innerText = 'Click For Card'
    axios.get(`${baseURL}/${response.data.deck_id}/draw/?count=52`)
    .then((allcards) => {
        document.body.prepend(button)
        let counter = 0
        button.addEventListener('click', function(){
            if(counter <= 51){
                generateCardMarkup(allcards.data.cards[counter])
                counter ++;
            }
           else{
            button.innerText = 'no more cards'
            button.style.border = '1px solid red'
           }
        })
        console.log(allcards)
    })
})

