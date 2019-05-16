function exchangeRate(startCurrency, endCurrency, amount) {
    // usd conversion
    if (startCurrency === 'usd' && endCurrency === 'vnd') {
    return amount * 23380
    }
    if (startCurrency === 'usd' && endCurrency === 'eur') {
    return amount * .89
    }
    if (startCurrency === 'usd' && endCurrency === 'krw') {
    return amount * 1,187.06
    }
    if (startCurrency === 'usd' && endCurrency === 'idr') {
    return amount * 14,437.50
    }
    // vnd conversion
    if (startCurrency === 'vnd' && endCurrency === 'usd') {
    return amount * 0.000043
    }
    if (startCurrency === 'vnd' && endCurrency === 'eur') {
    return amount * 0.000038
    }
    if (startCurrency === 'vnd' && endCurrency === 'krw') {
    return amount * 0.051
    }
    if (startCurrency === 'vnd' && endCurrency === 'idr') {
    return amount * 0.62
    }
    // eur conversion
    if (startCurrency === 'eur' && endCurrency === 'usd') {
    return amount * 1.12
    }
    if (startCurrency === 'eur' && endCurrency === 'vnd') {
    return amount * 26278.51
    }
    if (startCurrency === 'eur' && endCurrency === 'krw') {
    return amount * 1,333.94
    }
    if (startCurrency === 'eur' && endCurrency === 'idr') {
        return amount * 16,221.43
        }
    // krw conversion
    if (startCurrency === 'krw' && endCurrency === 'usd') {
    return amount * 0.00084
    }
    if (startCurrency === 'krw' && endCurrency === 'vnd') {
    return amount * 19.69
    }
    if (startCurrency === 'krw' && endCurrency === 'eur') {
    return amount * 0.00075
    }
    if (startCurrency === 'krw' && endCurrency === 'idr') {
    return amount * 12.17
    }
    // idr conversion
    if (startCurrency === 'idr' && endCurrency === 'usd') {
    return amount * 0.000069
    }
    if (startCurrency === 'idr' && endCurrency === 'vnd') {
    return amount * 1.62
    }
    if (startCurrency === 'idr' && endCurrency === 'eur') {
    return amount * 0.000062
    }
    if (startCurrency === 'idr' && endCurrency === 'krw') {
    return amount * 0.082
    }
}

function convertCurrency() {
    const inputValue = document.getElementById('amount').value
    const initialCurrency = document.getElementById('start').value
    const finalCurrency  = document.getElementById('end').value
    const convertedValue = exchangeRate(initialCurrency, finalCurrency, inputValue)
    document.getElementById('result').innerHTML = convertedValue
}
