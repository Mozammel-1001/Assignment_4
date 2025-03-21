// Assignment-4-warriors

function cashOut(money) {
    if(typeof money !== 'number' || money <0)
    {
        return "Invalid";
    }
    const charge = money * (1.75 / 100);
    return charge;
}

console.log(cashOut(0));