function humanReadable (seconds) {
    if (seconds > 359999) return false;

    const hour = Math.floor(seconds / 3600);
    const min = () => {
        Math.floor(seconds / 60 - hour);
        if (min > 59) {
            return 59
        }
         else {
            return Math.floor(seconds / 60 - hour * 60);
        };
    }
    const sec = Math.floor(seconds - hour * 3600 - min() * 60);

    let hh = hour;
    let mm = min();
    let ss = sec;

    if (hour < 10) {
        hh = `0${hour}`
    }
    if (min() < 10) {
        mm = `0${min()}`
    }
    if (sec < 10) {
        ss = `0${sec}`
    }

    return `${hh}:${mm}:${ss}`;
  }





console.log(humanReadable(0)) //) //'00:00:00') //'humanReadable(0)');
console.log(humanReadable(59)) //) //'00:00:59') //'humanReadable(59)');
console.log(humanReadable(60)) //) //'00:01:00') //'humanReadable(60)');
console.log(humanReadable(970)) //) //'00:01:30') //'humanReadable(90)');
console.log(humanReadable(3599)) //) //'00:59:59') //'humanReadable(3599)');
console.log(humanReadable(359999)) //) //'99:59:59') //'humanReadable(3599)');