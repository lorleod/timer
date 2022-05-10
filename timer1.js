//suck in args from command line and put in array
const timers = process.argv.slice(2);

// loop array and setTimer beep each element IF not neg and is num
for (time of timers) {
  if (time >= 0 && !isNaN(time)) {
    setTimeout(() => {process.stdout.write('\x07')}, time*1000)
  }
};