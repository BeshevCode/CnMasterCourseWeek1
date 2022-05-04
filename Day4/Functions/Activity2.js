/* Activity 2:
Edit the below snippet to include two parameters and a running order count updated when the function is called:

const takeOrder = (topping) => {
  console.log(`Pizza with ${topping}`);
}
takeOrder("pineapple");
*/

let takeOrderPizza = 0;

const takeOrder = (topping, pizzaType) => {
    takeOrderPizza++;
    console.log( ` Order № ${takeOrderPizza} : Pizza ${pizzaType?pizzaType:''} with ${Array.isArray(topping)?topping.join(', '):topping}` );
};

takeOrder('pineapple');
takeOrder('extra cheese','pepperoni');
takeOrder( 'beef/mushrooms/pineapple/olives'.split('/'), 'regular crust' );