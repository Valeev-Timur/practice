class IoCStorage extends Map {
    getOrElse(key, call) {
        if(this.has(key))
            return this.get(key)
        else return call
    }
};

module.exports = IoCStorage;
