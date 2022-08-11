import Breed from "./Breed.js";

const btnSort = document.querySelector('#btn-sort');
const textFilter = document.querySelector('#text-filter');
const breedsContainer = document.querySelector('#breeds-container');

let breeds = [];

Breed.fetch().then(result => {
    result.map(breed => {
        const newBreed = new Breed(breed.key, breed.subBreeds);
        newBreed.render(breedsContainer);

        breeds.push(newBreed)
    });
});

btnSort.addEventListener('click', (e) => {
    if (breedsContainer.classList.contains('reverse'))
        breedsContainer.classList.remove('reverse')
    else
        breedsContainer.classList.add('reverse')

    e.target.innerHTML = (e.target.innerHTML == 'ASC' ? 'DESC' : 'ASC')
})

textFilter.addEventListener('keyup', (e) => {
    breeds.map(breed => {
        breed.key.includes(textFilter.value) ? breed.show() : breed.hide()
    })
})