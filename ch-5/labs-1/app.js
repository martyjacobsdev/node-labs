'use strict'

function prefixer (word) { 

        //closure scopes
        return (name) => {

            //for example,, inner return has access to outer parent variable
            return (word + '' + name)
        }
}

const sayHiTo = prefixer('Hello ')
const sayByeTo = prefixer('Goodbye ')
console.log(sayHiTo('Dave')) // prints 'Hello Dave'
console.log(sayHiTo('Annie')) // prints 'Hello Annie'
console.log(sayByeTo('Dave')) // prints 'Goodbye Dave'

