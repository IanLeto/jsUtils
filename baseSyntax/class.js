// 书接上回 proto
// es 6 后可以用语法糖class 来表示构造函数，也就是类
class Region {
    // fn + control + enter 自动构造器函数
    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    // new 的时候会被调用，一个类必然会有个构造函数
    constructor(address, name) {
        // this.name 意味着传入的address 会打到实例上
        this._address = address;
        this._name = name;

    }

    getName = function () {
        return this._name
    }

    // getName 简写
    getAddress() {
        return this._name
    }
}

// 从类型来看，class 构造函数入proto 中的函数是一致的
console.log(typeof Region)

// 实际上，getName 都是定义在protoType
console.log(Region.prototype.getAddress())


export {Region};
