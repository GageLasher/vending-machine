import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
money = 0
snacks = [

  new Snack("Protein Shake", 3.50, "https://images.albertsons-media.com/is/image/ABS/960163793?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available"),
  new Snack("Chips", 2, "https://i5.walmartimages.com/asr/a421a0fb-9a40-484d-94f6-bfc677fe61c4.097a2f6ad987122f9a1f11123e1495d2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"),
  new Snack("Coca Cola", 1.50, "https://images.heb.com/is/image/HEBGrocery/000862949?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0"),
  new Snack("Keto Coffee", 5, "https://s7.vitaminshoppe.com/is/image/VitaminShoppe/2196178_01?$OP_PDPZOOM$")

]



}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
