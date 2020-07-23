const IoCStorage = require('./ioc-storage');
const storage = new IoCStorage();

function register(key, strategy) {
    if (typeof strategy === 'function' && (strategy.length === 1 || strategy.length === 0)) {
        storage.set(key, strategy)
    } else {
        console.log("Strategy passed to register function has wrong signature")
    }
};

function resolve(key, params) {
    const defaultResult = null;
    const strategy = storage.getOrElse(key, () => { defaultResult })
    try {
        return strategy(params)
    } catch(ex) {
        console.log(`Error on invocation of strategy on key: ${key}`)
    }
};


module.exports = {
    resolve,
    register
};
