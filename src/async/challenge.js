const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url) => {
    try {
        const data = await fetchData(url);
        const character = await fetchData(`${url}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(`ID: ${data.results[0].id}`);
        console.log(`Name: ${character.name}`);
        console.log(`Dimension: ${origin.dimension}`);
    } catch (e) {
        console.error(e);
    }
}

console.log(`Init time: ${new Date}`);
anotherFunction(API);
console.log(`Finish time: ${new Date}`);