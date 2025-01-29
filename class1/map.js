const exchangeRate =80;

let priceinusd= {
    laptop: 1200,
    mobile: 3000,
    bags: 400,
    memory: 500,
    monitor: 4000
}

let calculate = Object.keys(priceinusd).map(items => ({
    items: items,
    priceUSD: priceinusd[items],
    priceINR: priceinusd[items] * exchangeRate

}))

console.log("Price in INR:",calculate);