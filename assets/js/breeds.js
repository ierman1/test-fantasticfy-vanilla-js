import { apiCall } from "./api.js";

export class Breed {

    constructor(key, subBreeds) {
        this.key = key;
        this.subBreeds = this.subBreeds;
    }

    render() {
        return `
            <div class="${this.key}">
                <h3>${this.key}</h3>
                <div></div>
            </div>
        `;
    }

    static fetch() {
        return apiCall('/breeds/list/all').then(({ data }) => {
            const breeds = [];

            Object.keys(data.message).forEach(breed => {
                breeds.push({ key: breed, subBreeds: data.message[breed] })
            })

            return breeds;
        });
    }

}