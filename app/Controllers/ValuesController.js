import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";
// import { valuesService } from "../Services/ValuesService.js";
import { Pop } from "../Utils/Pop.js";


//Private
function _draw() {
  const snacks = ProxyState.snacks
  let template = ""
  snacks.forEach(snack => template += snack.template)
  document.getElementById("snacks").innerHTML = template

  
    
}

//Public
export class ValuesController {
  constructor() {
   
    _draw()
  }

  purchase(price) {
    valuesService.purchase(price)
  }

  getMoney() {
    valuesService.getMoney()
    console.log("I am using the Controller");
  }

  // addValue() {
  //   valuesService.addValue()
  // }

  // async removeValue(id) {
  //   const yes = await Pop.confirm('Remove Value')
  //   if (yes) {
  //     valuesService.removeValue(id)
  //   }
  // }

}
