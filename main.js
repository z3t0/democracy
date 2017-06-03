const bitcoin = require('bitcoinjs-lib')

export {createIdentity} = () => {
    const keyPair = bitcoin.ECPair.makeRandom()

    return keyPair
}

