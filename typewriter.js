// goal is to animate the sentence one character at a time
const sentence = "hello there from lighthouse labs";
let count = 0;
const timeInterval = 50; // time interval between each stdout of letter
const length = sentence.length;
for (let char of sentence) {
  let delay = count * timeInterval;
  count++;
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, delay);
}
setTimeout(() => {
  // print the newline after sentence has been written
  process.stdout.write('\n');
}, length * timeInterval);