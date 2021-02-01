//API link and generated key

const DOMAIN = "http://data.fixer.io/api/"
const API_KEY = "b314fa295febc2e41e4933aff444d1c6"
const BASE_URL = `${DOMAIN}latest?access_key=${API_KEY}`

//  API functionality async/await to get the data

async function getCurrencyConversion(searchTerm) {
  try {
    let response = await axios.get(`${BASE_URL}&base=${searchTerm}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
//Functionality of the conversion button and event listener for the button  
const converted = []
let conversionButton = document.querySelector('#conversion')
conversionButton.addEventListener('click', async (event) => {
  event.preventDefault()
  //Functionality of the integer(multiplication of the base currency)
  let multiplier = document.querySelector('#input-base').value
  console.log(multiplier)
  multiplier = parseInt(multiplier)
  //Functionality of the input amount)
  const inputValue = document.querySelector('#currency').value
  converted.length = 0

  //Get the conversion 
  const data = await getCurrencyConversion(inputValue)
  //Object destructuting to extract the data/rates
  //https://dmitripavlutin.com/javascript-object-destructuring/
  const { rates } = data
  console.log(rates)
  //For loop through an object in order to iterate the objects keys and value
  //https://attacomsian.com/blog/javascript-iterate-objects
  for (const key in rates) {
    const value = rates[key]
    const displayConvertedCurrency = `${key} ${multiplier * value}`
    //console.log(`${key}: ${value}`);
    converted.push(displayConvertedCurrency)
  }
  console.log(converted)
  displayCurrencyList(converted)
})
//Functionality to display the currency list
function displayCurrencyList(list) {
  let resultSection = document.querySelector('.result')
  for (let i = 0; i < list.length; i++) {
    //Get the current element
    const displayString = list[i]
    //Create div for every element
    const displayDiv = document.createElement('div')
    //Interpolate element value into innerHTML of the div that just was created
    displayDiv.innerHTML = `
    ${displayString}
    `
    displayDiv.classList.add('list')
    //Append the div to the result list section
    resultSection.append(displayDiv)
  }
}
//Reload the conversion 
function reloadForm() {
  window.location.reload()
}

// THE END


