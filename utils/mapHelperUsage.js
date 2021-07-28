import {NewMapHelper} from "./mapHelper.js"
import {ExceptTobe} from "./simpleTest.js"

function UsageMapHelper() {
    let testObjectData = {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3",
    }
    let testMapData = new Map(
        [
            ["key1", "value1"],
            ["key2", "value2"],
            ["key3", "value3"],
        ]
    )
    let helper = NewMapHelper(testMapData)
    ExceptTobe(helper.Get("key1"), "value1")
    ExceptTobe(helper.GetDefault("key11", "1111"), "1111")
}

function UsageMapHelperObject() {

}

UsageMapHelper()
