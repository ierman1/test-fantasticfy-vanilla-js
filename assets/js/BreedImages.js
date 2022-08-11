import { apiCall } from "./api.js";

class BreedImages {

    constructor(breed) {
        this.breed = breed;
        this.list = [];
    }

    element() {
        return `
            <div class="breed-images">
                <img src="${this.list[0]}">
                <img src="${this.list[1]}">
                <img src="${this.list[2]}">
            </div>
        `;
    }

    render() {
        const parent = `.${this.breed}`;

        document.querySelector(parent).innerHTML += this.element();

        document.querySelectorAll(parent + ' > .breed-images img').forEach(element => {
            element.addEventListener('click', (e) => {
                console.log('Selecting image from ' + this.breed);
                document.querySelector('#image-preview').src = e.target.src
            })
        })
    }

    fetch() {
        console.log('Fetching images for ' + this.breed + '...');
        apiCall(`/breed/${this.breed}/images`).then(({ data }) => {
            this.list = data.message;
            this.render();
            
            console.log('Done.');
        });
    }

}

export default BreedImages;