

// console.log('first');
// setInterval(() => {
//     console.log('third');
// }, 2000);
// console.log('second');

let second = 0;
const timeId = setInterval(() => {
    // second++
    // console.log(second++);
    console.log(++second);
    if (second > 15) {
        clearInterval(timeId);
    }
}, 1000)

