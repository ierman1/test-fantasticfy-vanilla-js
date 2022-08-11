import { apiCall } from "./api.js";
import BreedImages from "./BreedImages.js";

class Breed {

    constructor(key, subBreeds) {
        this.key = key;
        this.subBreeds = this.subBreeds;
        this.images = new BreedImages(this.key);

        this.images.fetch();
    }

    element() {
        return `
            <div class="${this.key}">
                <h3>${this.key}</h3>
            </div>
        `;
    }

    render(container) {
        container.innerHTML += this.element();
    }

    hide() {
        document.querySelector(`.${this.key}`).classList.add('hidden');
    }

    show() {
        document.querySelector(`.${this.key}`).classList.remove('hidden');
    }

    static fetch() {
        console.log('Fetching breeds...');

        return apiCall('/breeds/list/all').then(({ data }) => {
            const breeds = [];

            Object.keys(data.message).forEach(breed => {
                breeds.push({ key: breed, subBreeds: data.message[breed] })
            })

            console.log('Done.');

            return breeds;
        });
    }

}

export default Breed;