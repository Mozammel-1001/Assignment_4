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
    if (email[0] === '@' || email[0] === '.' || email[0] === '-' || email[0] === '_' || email[0] === '+') {
        return false;
    }
    else if (email.includes('@') === false) {
        return false;
    }
    else if (email.includes(' ') === true) {
        return false;
    }
    else if (email.slice(-4) !== '.com') {
        return false;
    }
    else {
        return true;
    }
}

function electionResult(votes) {
    if (Array.isArray(votes) === false) {
        return "Invalid";
    }
    let mango = 0;
    for (const mangoVotes of votes) {
        if (mangoVotes === "mango") {
            mango++;
        }
    }
    let banana = 0;
    for (const bananaVotes of votes) {
        if (bananaVotes === "banana") {
            banana++;
        }
    }
    if (mango > banana) {
        return "Mango";
    }
    else if (banana > mango) {
        return "Banana";
    }
    else {
        return "Draw";
    }
}

function isBestFriend(f1, f2) {
    if (typeof f1 !== 'object' || typeof f2 !== 'object') {
        return "Invalid";
    }
    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
        return true;
    }
    else {
        return false;
    }
}

function calculateWatchTime(times) {
    for (const type of times) {
        if (typeof type !== 'number') {
            return "Invalid";
        }
    }
    let sum = 0;
    for (const time of times) {
        sum = sum + time;
    }
    let hours = parseInt(sum / 3600);
    let minutes = parseInt((sum % 3600) / 60);
    let seconds = sum - (hours * 3600) - (minutes * 60);
    let watchTime = { hour: hours, minute: minutes, second: seconds }
    return watchTime;
}

console.log(calculateWatchTime([100, 3800, 90]));