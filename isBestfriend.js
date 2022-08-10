function isBestFriend(friendObj1, friendObj2) {

    if ((typeof friendObj1 == 'object') && (typeof friendObj2 == 'object')) {

        const objVal1 = Object.values(friendObj1)
        const objVal2 = Object.values(friendObj2)

        for (let i = 0; objVal1.length; i++) {
            for (let j = 0; objVal2.length; j++) {
                if ((objVal1[i] == objVal2[j + 1]) && ((objVal1[i + 1] == objVal2[j]))) {
                    return true
                }

                return false


            }
        }

    }
    return "Function argument must be  two object"

}


console.log(isBestFriend({ name: 'hasan', friend: 'rasid' }, { name: 'rasid', friend: 'hasan' }))
