// new obj
let obj1 = {name: 'ian'}

// 两个obj 是否相同
Object.is(1, 2)

// 合并
let obj2 = {id: 1}
obj3 = Object.assign(obj2, obj1)
// 被操作对象也会发生变化
console.log(obj3, "obj2", obj2)
// 无变化合并
console.log(Object.assign({}, obj1, obj2))

