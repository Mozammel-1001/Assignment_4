// Assignment-4-warriors

function cashOut(money) {
    if (typeof money !== 'number' || money < 0) {
        return "Invalid";
    }
    const charge = money * (1.75 / 100);
    return charge;
}

function validEmail(email) {
    if (typeof email !== 'string') {
        return "Invalid";
    }
    if(email[0] === '@' || email[0] === '.' || email[0] === '-' || email[0] === '_' || email[0] === '+')
    {
        return false;
    }
    else if(email.includes('@') === false)
    {
        return false;
    }
    else if(email.includes(' ') === true)
    {
        return false;
    }
    else if(email.slice(-4) !== '.com')
    {
        return false;
    }
    else
    {
        return true;
    }
}

console.log(validEmail("+Mewo@cat.com"));