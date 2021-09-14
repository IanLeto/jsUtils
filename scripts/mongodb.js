for (let i = 0; i < 1000000; i++) {
    db.testIndex.insert(
        {
            "i": i,
            "username": "user" + i,
            "age": Math.floor(Math.random() * 120),
            "created": new Date()
        }
    )
}
