var userInput = "Boulder";
console.log(userInput.charAt(0) === 'B' && userInput.length === 7);

var userPhone = "816-363-1213";
console.log(userPhone.charAt(3) === '-' && userPhone.charAt(7) === '-');

function checkDate(date) {
if (dateLength === 8 && birthDate.charAt(2) === '/' && birthDate.charAt(5) === '/')
}


function checkZipcode (zipCode) {
    var zipLength = zipCode.length;

    if( zipLength !== 5 && zipLength !== 10 ) {
        // not a zipcode
        console.log('Not a zipcode, invalid length', zipCode);
        return false;
    } else if( zipLength === 10 && zipCode.charAt(5) !== '-') {
        // not a zipcode
        console.log('Not a valid 10 character zipcode, no dash or in the wrong place', zipCode);
        return false;
    } else {
        while (zipLength--) {
            var currentCharacter = zipCode[zipLength];
            var checkIfNumber = parseInt(currentCharacter);

            // one way to check
            // typeof checkIfNumber === 'number';
            //
            // better way to check
            if( isNaN(checkIfNumber) ) {
                // still not zipcode
                console.log('Please only enter digits.', zipCode);
                return false;
            }
        }
    }

    console.log('Valid zipcode!', zipCode);
    return true;
}
