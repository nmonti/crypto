const API = 'https://min-api.cryptocompare.com/data';

export async function getPrice(base = 'BTC', compareTo = ['USD'], exchange = '') {
    let data = await fetch(`${API}/price?fsym=${base}&tsyms=${compareTo}`);
    return JSON.parse(data._bodyText);
}