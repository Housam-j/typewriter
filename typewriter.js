const sentence = "hello there from lighthouse labs \n";
let delay = 1000;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 50);
}
