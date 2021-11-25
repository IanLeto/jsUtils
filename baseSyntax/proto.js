// prototype js 继承的一种表现手法
function Region(address, name) {
    this.address = address;
    this.name = name;
}

// 当我们对Region 这一构造函数（es 6 被称之为类） 进行方法声明后 to step2
Region.prototype.getName = function () {
    return this.name
}

Region.prototype.getAddress = function () {
    return this.address
}

// step2 新产生的实例对象则可直接使用
let bRegion = new Region("local", 1)
console.log(bRegion.getAddress())


