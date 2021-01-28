const DOMAIN = "http://data.fixer.io/api/"
const API_KEY = "b314fa295febc2e41e4933aff444d1c6"
const BASE_URL = `${DOMAIN}latest?access_key=${API_KEY}`

// http://data.fixer.io/api/latest?access_key=b314fa295febc2e41e4933aff444d1c6

//  API 

async function getCurrencyConversion(searchTerm) {
  try {
    let response = await axios.get(`${BASE_URL}&base=${searchTerm}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

// ${searchTerm}&symbols=${symbols}

const converted = []
const conversionButton = document.querySelector('#conversion')
conversionButton.addEventListener('click', async (e) => {
  let multiplier = document.querySelector('#input-base').value
  console.log(multiplier)
  multiplier = parseInt(multiplier)
  const inputValue = document.querySelector('#currency').value

  converted.length = 0
  const data = await getCurrencyConversion(inputValue)
  const { rates } = data
  console.log(rates)
  for (const key in rates) {
    const value = rates[key]
    const displayConvertedCurrency = `${key} ${multiplier * value}`
    // console.log(`${key}: ${value}`);
    converted.push(displayConvertedCurrency)
  }
  console.log(converted)
  displayCurrencyList(converted)
})

function displayCurrencyList(list) {
  let resultSection = document.querySelector('.result')
  for (let i = 0; i < list.length; i++) {
    //get the current element
    const displayString = list[i]
    //create div for every element
    const displayDiv = document.createElement('div')
    //interpolate element value into insnerHTML of the div that just was created

    displayDiv.innerHTML = `
    ${displayString}
    `
    list.sort[]
    displayDiv.classList.add("list")
    //append the div to the result section
    resultSection.append(displayDiv)
  }
}

