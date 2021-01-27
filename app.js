const DOMAIN = "https://api.currencyfreaks.com/"
const API_KEY = "0c3fd0a2f4fc40228137729dce5814a9"
const BASE_URL = `${DOMAIN}latest?apikey=${API_KEY}`

//  API 

async function getCurrencyConversion() {
  try {
    let response = await axios.get(`${BASE_URL}&base=$`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

// ${searchTerm}&symbols=${symbols}

const conversionButton = document.querySelector('#conversion')
conversionButton.addEventListener('click', async (e) => {
  const inputValue = document.querySelector('#input-base').value
  console.log(inputValue)
  const data = await getCurrencyConversion(inputValue)
  currencyList(data)
  console.log(data)
})

function currencyConversion(currenciesData) {
  const select = document.createElement('select')
  select.innerHTML = `
  <option rates=${currenciesData.rates}></option>
  `
  let selection = document.querySelector('#currency')
  selection.append(select)

}

function currencyList(list) {
  for (let i = 0; i < list.length; i++) {
    currencyConversion(list[i])
  }
}

// output = output[input-base] * Number(currency)
    // let output = `converter amount ${input-base} is ${output} ${currency}`
    // document.getElementById('conversion').innerText = output

// https://api.currencyfreaks.com/latest?apikey=0c3fd0a2f4fc40228137729dce5814a9&base=
