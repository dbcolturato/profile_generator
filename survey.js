const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];
rl.question('What\'s your name? ', answer => {
  answers.push(answer);
  rl.question('What\'s an activity you like doing? ', answer => {
    answers.push(answer);
    rl.question('What do you listen to while doing that? ', answer => {
      answers.push(answer);
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
          answers.push(answer);
          rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
            answers.push(answer);
            rl.question('Which sport is your absolute favourite? ', (answer) => {
              answers.push(answer);
              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
                answers.push(answer);
                console.log("Thank you for your valuable feedback: Your name is " + answers[0] + ", you like " + answers[1] + 
                " listenig " + answers[2] + ". Your favorite meal is " + answers[3] + " and your favorite thing to eat is " + 
                answers[4] + ". Your favorite sport is " + answers[5] + " and your superpower is " + answers[6]);
                rl.close();
              });
            });
          });
        });
    });
  });  
});
