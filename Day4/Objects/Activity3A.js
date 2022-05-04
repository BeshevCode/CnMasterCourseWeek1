/* Activity 3:
Create an object called coffeeShop with key values of: branch, drinks with prices, food with prices
And methods called drinksOrdered and foodOrdered.
They should return a string saying [Your order] is ... with all items chosen with costs and total costs.
*/

let coffeeShop = {
    branch: "thanks a latte",
    drinks: [
        ["Espresso", 1.50],
        ["latte", 2.70],
        ["flat White", 2.20]
    ],
    food:[
        ["scone", 1.50],
        ["bagel", 2.00],
        ["Sausage Muffin", 3.00]
    ], 

    total: 0,
    drinksOrdered: function (...items) {
        let drinkTotal=0;
        let validDrinks=[]
        if (items.length<1) {
            return 'please select a drink'
        }
        for (let i=0; i<items.length; i++) {
            for (let j=0; j<this.drinks.length; j++) {
                if (items[i] == this.drinks[j][0]){
                    this.total += this.drinks[j][1];
                    drinkTotal += this.drinks[j][1];
                    validDrinks.push(this.drinks[j][0])
                }
            }
        }
        if (validDrinks.length<1) {
            return 'please select a drink from the menu'
        }
        return `Here is your drink order: ${validDrinks.join(', ')} Drinks cost: £${drinkTotal.toFixed(2)}`
    },
    foodOrdered: function (...items) {
        let foodTotal=0;
        let validFood=[]
        if (items.length<1) {
            return 'please select some food'
        }
        for (let i=0; i<items.length; i++) {
            for (let j=0; j<this.food.length; j++) {
                if (items[i] == this.food[j][0]){
                    this.total += this.food[j][1];
                    foodTotal += this.food[j][1];
                    validFood.push(this.food[j][0])
                }
            }
        }
        if (validFood.length<1) {
            return 'please select a food from the menu'
        }
        return `Here is your food order: ${validFood.join(', ')} Food cost: £${foodTotal.toFixed(2)}`
    },
    getBill: function() {
        return `Total bill : £${this.total.toFixed(2)}`
}}

console.log(coffeeShop.drinksOrdered("Espresso", "latte"))
console.log(coffeeShop.foodOrdered("scone", "bagel"));