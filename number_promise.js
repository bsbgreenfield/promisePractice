let myNumber = 99
let baseURL = `http://numbersapi.com/`


//part 1
axios.get(`${baseURL}/${myNumber}/trivia?json`)
.then((data) => {
    console.log(data.data)
})
.catch((err)=> {
    console.log(err)
})

//part 2
axios.get(`${baseURL}70..74/trivia?json`)
.then((data) => {
    console.log(data.data)
    for (let fact of Object.values(data.data)){
        let numberFact = document.createElement('p')
        numberFact.innerText = fact
        document.body.appendChild(numberFact)
    }
 
})
.catch((err)=> {
    console.log(err)
})


//part 3 

function createFactMarkup(fact){
    let numberFact = document.createElement('p')
    numberFact.innerText = fact
    document.body.appendChild(numberFact)
}

axios.get(`${baseURL}${myNumber}/trivia?json`)
.then((data) => {
    createFactMarkup(data.data.text)
    return axios.get(`${baseURL}${myNumber}/trivia?json`)
})
.then((data) => {
    createFactMarkup(data.data.text)
    return axios.get(`${baseURL}${myNumber}/trivia?json`)
})
.then((data) => {
    createFactMarkup(data.data.text)
    return axios.get(`${baseURL}${myNumber}/trivia?json`)
})
.then((data) => {
    createFactMarkup(data.data.text)
    return axios.get(`${baseURL}${myNumber}/trivia?json`)
})
.catch((err) => {
    console.log(err)
})

