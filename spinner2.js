let index = 0;
for (let i = 0; index < 11; i += 800) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, i + 100);

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, i + 300);

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, i + 500);

  setTimeout(() => {
    process.stdout.write('\r\\   ');
  }, i + 700);

  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, i + 900);
  index++
}



