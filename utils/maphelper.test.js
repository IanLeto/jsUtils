const NewMapHelper = require("./mapHelper");
let testData = new Map(
    [[1, 2], ["kye", "value"], ["npm", "package"]]
)
test('测试mapHelper', () => {
    let helper = NewMapHelper(testData);
    expect(helper.get(1)).toBe(2);

})
