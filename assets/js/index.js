import { Breed } from "./breeds.js";

const btnSort = document.querySelector('#btn-sort');
const breedsContainer = document.querySelector('#breeds-container');

let breeds = [];

Breed.fetch().then(result => {
    result.map(breed => {
        const newBreed = new Breed(breed.key, breed.subBreeds);
        breeds.push(newBreed)
        breedsContainer.innerHTML += newBreed.render();
    });
});


btnSort.addEventListener('click', (e) => {

})