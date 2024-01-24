var timeObj = {}

function timeUntil(dataString) {
    const end = new Date(dataString);
    const now = new Date();

    const timeDiff = end.getTime() - now.getTime();
    if (timeDiff < 0) {
        return "Expired";
    }
    const seconds = Math.floor(timeDiff / 1000);

    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor(seconds / 60) % 60;
    const secs = seconds % 60;
    console.log(`${days}天 ${hours}小时 ${minutes}分钟 ${secs}秒`)
    timeObj.days = days;
    timeObj.hours = hours;
    timeObj.minutes = minutes;
    timeObj.secs = secs;
    return timeObj
}

console.log(timeUntil("2024-08-01"));
