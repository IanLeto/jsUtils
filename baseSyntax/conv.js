// arr obj
let lab = [
    {label: "2小时", value: 2 * 60},
    {label: "1小时", value: 60},
    {label: "45分钟", value: 45},
    {label: "30分钟", value: 30},
    {label: "15分钟", value: 15},
]

// get target label
function GetArr(arr, v, k, targetKey, defaultValue) {
    for (const obj of arr) {
        if (v === obj[k]) {
            return obj[targetKey]
        }
    }
    return defaultValue
}

console.log(GetArr(lab, 60, 'value', 'label'))
