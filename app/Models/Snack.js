export class Snack {
    constructor (name, price, url) {
        this.name = name,
        this.price = price
        this.url = url
    }
    get template() {
        return `
        
        <div class="col-6 p-5">
          
            <img class="text-center img-fluid" src="${this.url}" onclick="app.valuesController.purchase(${this.price})">
         </div>
        
        `
    }
}