function digitalClock(time) {

    let hr = time / 3600
    hr = parseInt(hr)
    time = time - (hr * 3600)
    let Min = time / 60
    Min = parseInt(Min)
    time = time - (Min * 60)


    if (hr >= 24) {
        hr = '00';
    }
    if (Min < 10) {
        Min = '0' + Min
    }
    if (time < 10) {
        time = '0' + time
    }
    return (hr + ':' + Min + ':' + time)
    }

console.log(digitalClock(5025))
console.log(digitalClock(61201))
console.log(digitalClock(87000))