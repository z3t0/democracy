let multichain = require('multichain-node')({
    port: 4335,
    host: 'chain1@104.131.122.186',
    user: "multichainrpc",
    pass: "9yQwRgq3G2UNi6W6SG3sdUKY2YmMGGjq7e917V6GucZT"
})

multichain.getInfo((err, info) => {
    if(err){
        throw err;
    }
    console.log(info);
})

