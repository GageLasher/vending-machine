import { ProxyState } from "../AppState.js";


class ValuesService {
  purchase(price) {
    
       if(ProxyState.money >= price) {
         ProxyState.money -= price
         console.log("You Purchased!");
       }
     
      
    
      
      
  }

  getMoney() {
    ProxyState.money
    ProxyState.money += .25
    console.log(ProxyState.money);
    console.log("I am using the service");

  }

}

export const valuesService = new ValuesService();

