# Project Overview

## Currency Converter

## Project Description

Compararison of popular currency exchange rates.

## API and Data Sample

[Fixer API](http://data.fixer.io/api/latest?access_key=b314fa295febc2e41e4933aff444d1c6)
```JSON
{
    "success": true,
    "timestamp": 1611842827,
    "base": "EUR",
    "date": "2021-01-28",
    "rates": {
        "AED": 4.456255,
        "AFN": 94.955964,
        "ALL": 124.080383,
        "AMD": 628.657747,
        "ANG": 2.177712,
        "AOA": 795.491229,
        "ARS": 105.81056,
        "AUD": 1.587722,
        "AWG": 2.18385,
        "AZN": 2.052469,
        "BAM": 1.960735,
        "BBD": 2.449587,
        "BDT": 102.875443,
        "BGN": 1.959108,
        "BHD": 0.457007,
        "BIF": 2356.576045,
        "BMD": 1.21325,
        "BND": 1.616517,
        "BOB": 8.401578,
        "BRL": 6.547612,
        "BSD": 1.213215,
        "BTC": 3.8021868e-5,
        "BTN": 88.630545,
        "BWP": 13.383758,
        "BYN": 3.180857,
        "BYR": 23779.698083,
        "BZD": 2.445477,
        "CAD": 1.556661,
        "CDF": 2401.021637,
        "CHF": 1.078082,
        "CLF": 0.032568,
        "CLP": 898.659857,
        "CNY": 7.840138,
        "COP": 4354.523754,
        "CRC": 743.497577,
        "CUC": 1.21325,
        "CUP": 32.151122,
        "CVE": 110.541516,
        "CZK": 26.076355,
        "DJF": 215.986723,
        "DKK": 7.437588,
        "DOP": 70.318741,
        "DZD": 161.17986,
        "EGP": 19.064402,
        "ERN": 18.198626,
        "ETB": 47.89562,
        "EUR": 1,
        "FJD": 2.482669,
        "FKP": 0.886138,
        "GBP": 0.886273,
        "GEL": 4.009769,
        "GGP": 0.886138,
        "GHS": 7.061063,
    }
}
```

## Wireframes

[Link to wireframes](https://wireframe.cc/pro/pp/71e592d64409956)

### MVP/PostMVP

#### MVP 

- Conversion of the currency value pair from X currency to Y currency
- Allow input amount to conver
- Enable base conversion

#### PostMVP  

- Result of comparison list/table of rates
- Append image for a better UX display 

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Jan 26| Project Approval & pseudocode| Complete
|Jan 27| Core Application Structure (HTML, CSS, etc.) | Complete
|Jan 28| CSS Flexbox-styling-Media Queries  | Complete
|Jan 29| MVP | Complete
|Feb 1| Presentations/Project Submission | Complete

## Priority Matrix

[Link to Matrix](https://wireframe.cc/pro/pp/71e592d64409956)

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Structure of HTML | M | 3hrs| 2hrs | 2hrs |
| CSS styling| M | 3hrs| 2hrs | 2hrs |
| Positioning containers with flexbox | M | 3hrs| 3hrs | 3hrs |
| Event Listener for the currency base | H |3hrs| 2hrs | 2hrs |
| API to display currency list| H | 3hrs| 3hrs | 3hrs |
| Media Queries for responsive design | H |3hrs| 5hrs | 5hrs |
| Functionality of the conversion rate | H | 3hrs| 4hrs | 4hrs |
| Function of the convertion button | H | 3hrs| 2hrs | 2hrs |
| Input x amount to convert  | H | 3hrs| 2hrs| 2hrs| |
| Functionality of Conversion display result | H | 3hrs| 4hrs | 4hrs |
| UX image display | L | 3hrs| 2hrs | 2hrs |
| Advanced CSS | L | 3hrs| 2hrs | 2hrs |
| Total | H | 36hrs| 36hrs | 36hrs |

## Code Snippet
```
const value = rates[key]
const displayConvertedCurrency = `${key} ${multiplier * value}`
```

## Change Log
I had to change the API because the conversion base/currency rates I did not had permission with the USD base. (I had to change the base currency). Also, I had to change part of the layout I designed. I wanted to add more interaction/experience showing a table/list of currency instead of just a list of selection.