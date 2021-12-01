// 注意是class.js
import {Region} from "./class.js";

let promise = new Promise((resolve, reject) => {
        console.log("start")
        setTimeout(() => {
            let time = new Date()

        })
    }
)

// 有两个异步回调 okCallBack(result)
function okCallBack() {
    return "ok"
}

function failCallBack() {
    return "stop"
}

function queryRegion(id, ok, fail) {
    let r = new Region(1, 2)
    if (r.getAddress() === 1) {
        ok()
    } else {
        fail()
    }

    return "null"
}

let res = queryRegion(1, okCallBack, failCallBack)

// 通过promise 改写
function queryRegionPromise(id) {
    return new Promise((resolve, reject) => {
        new Region(1, 2).getAddress() === 1 ? resolve() : reject()
    })
}

let res2 = queryRegionPromise(1).then(okCallBack, failCallBack)

// 将promise 用async + await
// 该函数执行后，返回一个promise
let hello = async () => {
    return "hello"
}

// then 中 接收一个callback
hello().then((value => {
    switch (value) {
        case "hello":
            console.log("world")
    }
}))



