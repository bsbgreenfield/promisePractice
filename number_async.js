let myNumber = 99
let baseURL = `http://numbersapi.com/`


//part 1
async function getNumberTrivia() {
    let response = await axios.get(`${baseURL}/${myNumber}/trivia?json`)
    console.log(response.data)
}

//part 2
async function getMultipleNUmbersTrivia() {
    let response = axios.get(`${baseURL}70..74/trivia?json`)
    try {
        for (let fact of Object.values(response.data)) {
            let numberFact = document.createElement('p')
            numberFact.innerText = fact
            document.body.appendChild(numberFact)
        }
    }
    catch {
        console.log('error')
    }

}


//part 3 

function createFactMarkup(fact) {
    let numberFact = document.createElement('p')
    numberFact.innerText = fact
    document.body.appendChild(numberFact)
}

async function getMultipleFacts() {
    let firstFactPromise = axios.get(`${baseURL}${myNumber}/trivia?json`)
    let secondFactPromise = axios.get(`${baseURL}${myNumber}/trivia?json`)
    let thirdFactPromise = axios.get(`${baseURL}${myNumber}/trivia?json`)
    let fourthFactPromise = axios.get(`${baseURL}${myNumber}/trivia?json`)

    let firstFact = await firstFactPromise;
    let secondFact = await secondFactPromise;
    let thirdFact = await thirdFactPromise;
    let fourthFact = await fourthFactPromise;

    createFactMarkup(firstFact.data.text);
    createFactMarkup(secondFact.data.text);
    createFactMarkup(thirdFact.data.text);
    createFactMarkup(fourthFact.data.text);

}
