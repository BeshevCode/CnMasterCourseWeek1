/* Activity 3:
Cash machine time! Let’s create one that:
> Dispenses cash if your pin number is correct and your balance is equal to, or more than, the amount you’re trying to withdraw!
Be Creative
*/

let accountAmount = 500;
let accountPin = 'b53y7q';

const bankWithdraw = ( pinNo, cash ) => {
    if (pinNo == accountPin)
        if (cash <= accountAmount)
            if (cash > 0) {
                accountAmount = accountAmount - cash;
                console.log(`Bank: You've withdrawn the amount of £${cash}. Your current balance is £${accountAmount}.`);
                return cash;
            }
            else console.log(`Your request has not been accepted. You have tried to withdraw the amount of £${cash}, which is either equal to zero or it's negative number.`);
        else console.log('Bank: Insufficient funds.');
    else console.log('bank: Incorrect pin.');
};

bankWithdraw ('123456',110);
bankWithdraw ('b53y7q',178);
bankWithdraw ('b53y7q',310);
bankWithdraw ('b53y7q',0);
bankWithdraw ('b53y7q',-115);
bankWithdraw ('b53y7q',20);