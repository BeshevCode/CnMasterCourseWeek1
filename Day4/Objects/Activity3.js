/* Activity 3:
Create an object called coffeeShop with key values of: branch, drinks with prices, food with prices
And methods called drinksOrdered and foodOrdered.
They should return a string saying [Your order] is ... with all items chosen with costs and total costs.
*/

const coffeeShop = {
    branch: "Trafford",
    menuDrinks: {
        Latte: 2.70,
        Cappuccino: 2.90,
        Macchiato: 3.10,
        Americano: 2.20,
        Espresso: 2.00
    },
    menuFoods: {
        FishAndChips: 6.5,
        Fries: 2.2,
        CottagePie: 4.2,
        SirloinSteak: 8.7,
        EggsAndBacon: 4.7,
    },

    // creates an order with a list of items from the drinks menu
    drinksOrder( listOfDrinks ){
        if(!Array.isArray(listOfDrinks)){
            console.log(`drinksOrdered(): needs a list as a parameter :: ${listOfDrinks}`);
            return; 
        }

        let textToDisplay = `>> Welcome to CostaChe - ${this.branch} branch. <<\n Your order is as follows:\n`;
        textToDisplay += this._getOrderFromList( listOfDrinks, this.menuDrinks );
        console.log(textToDisplay);
    },

    // creates an order with a list of items from the food menu
    foodOrder( listOfFoods ){
        if(!Array.isArray(listOfFoods)){
            console.log(`foodOrdered(): needs a list as a parameter :: ${listOfFoods}`);
            return; 
        }

        let textToDisplay = `>> Welcome to CostaChe - ${this.branch} branch. <<\n Your order is as follows:\n`;
        textToDisplay += this._getOrderFromList( listOfFoods, this.menuFoods );
        console.log(textToDisplay);
    },

    // creates an order with a list of mixed items from the list of food and drinks menu
    mixedOrder( listOfStuffs ){
        if(!Array.isArray(listOfStuffs)){
            console.log(`foodOrdered(): needs a list as a parameter :: ${listOfStuffs}`);
            return; 
        }

        let textToDisplay = `>> Welcome to CostaChe - ${this.branch} branch. <<\n Your order is as follows:\n`;
        textToDisplay += this._getOrderFromList( listOfStuffs, { ...this.menuDrinks, ...this.menuFoods } );
        console.log(textToDisplay);
    },

    // goes through the list of items and adds it to the order using the menu list provided
    _getOrderFromList( itemsToOrder, internalMenu ){

        const maxWidth = Math.max( ...itemsToOrder.map(x => x.length), 12 )    // max length for the items in the list (and the 'total to pay' text)
        let [ completeOrder, totalAmount ] = [ '',  0 ];

        for(let it of itemsToOrder){
            // string taken from the list, lowercase and remove the spaces
            const it_search = it.replaceAll(' ','').toLowerCase();
            
            // gets an array of objects' key-value pairs as 2-item arrays, find the right item, return the its key-value pair (2 item array)
            // lowercase and remove '_',' ' from the property name (the key part of the key-value pair) before comparing
            const it_menu = Object
                .entries( internalMenu )
                .find( (x) => x[0].toLowerCase().replaceAll('_','').replaceAll(' ','') == it_search );

            // if not found its undefined, aka false
            if( it_menu ){
                // get the price, then price as string for followUp handling
                let [ price, price_str ] = [ it_menu[1], it_menu[1].toString() ];
                
                // price as string and add decimals so it looks nicer
                price_str += ( price_str.indexOf('.')==-1 ? '.00' : (price_str.indexOf('.')>price_str.length-3 ? '0' : '') );

                // one line in the order, use padding to align the prices
                completeOrder += `~ ${ it.trim().padEnd(maxWidth) } : ${ price_str.padStart(6) }\n`;
                totalAmount += price;
            }
            else completeOrder += `> We don't sell '${ it.trim() }'\n`;  
               // add line for item not found
        }
        // the total amount in string and with 2 decimals to look nice
        let totalAmount_str = totalAmount.toString();
        totalAmount_str += ( totalAmount_str.indexOf('.')==-1 ? '.00' : (totalAmount_str.indexOf('.')>totalAmount_str.length-3 ? '0' : '') );
        // add the total line to the order
        completeOrder += `# ${'Total to pay'.padEnd(maxWidth)} = ${totalAmount_str.padStart(6)}\n`;
        return completeOrder;
    },

};

// the order list can contain spaces, items not on menu/misspelled, different capitalization 
coffeeShop.drinksOrder( 'Americano, Latte, Macchiato, Cappuccino, Lemonade'.split(',') );
coffeeShop.foodOrder( 'Fish and Chips, Eggs And Bacon, Fries, Cottage Pie, Sirloin Steak'.split(',') );

coffeeShop.mixedOrder( 'Fish and Chips, Coffee, Macchiato, Latte, Fries, Espresso'.split(',') );