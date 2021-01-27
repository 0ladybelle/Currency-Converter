const DOMAIN = "https://api.currencyfreaks.com/"
const API_KEY = "0c3fd0a2f4fc40228137729dce5814a9"
const BASE_URL = `${DOMAIN}latest?apikey=${API_KEY}`
const symbols = "EUR,USD,PKR,INR"

//  API 
// currencyConverter()
async function getCurrencyConverter(searchTerm) {
  try {
    let response = await axios.get(`${BASE_URL}&base=`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

// ${searchTerm}&symbols=${symbols}

const currencyConverter = document.querySelector('#conversion-button')


currencyConverter.addEventListener("click", async (e) => {
  const selectValue = document.querySelector('#currencies')
  console.log(selectValue)
  const data = await getCurrencyConverter(selectValue)
  currencyList(data)
  console.log(data)
})


