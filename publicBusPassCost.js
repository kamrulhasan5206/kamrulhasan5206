// JavaScript source code
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function puplicBussPassengerCost(totaPassenger) {
    let remindPassenger = 0
    if (totaPassenger >= 50) {
        let bussPssenger = Math.floor((totaPassenger / 50)) * 50
        remindPassenger = totaPassenger - bussPssenger
        let MicroPassenger = Math.floor((remindPassenger / 11)) * 11
        remindPassenger = remindPassenger - MicroPassenger
        return remindPassenger * 250
    }

    else if (totaPassenger >= 11) {
        let MicroPassenger = Math.floor((totaPassenger / 11)) * 11
        remindPassenger = totaPassenger - MicroPassenger
        return remindPassenger * 250
    }

    else if (totaPassenger < 11 && totaPassenger > 0) {
        return totaPassenger * 250
    }

    else {
        return "Passenger number Must  greter then 0"
    }

}

console.log(puplicBussPassengerCost(5))