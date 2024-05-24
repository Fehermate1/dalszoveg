const fs = require('fs');

fs.readFile('J:\\weblapszerkesztés\\2023-2024\\nodejs_on my momma\\node-crash-course-lesson-2\\dalszoveg.txt', (err, data) => {
    if (err) {
      console.log(err);
    }  
    console.log(data.toString());
  });

  fs.writeFile('J:\\weblapszerkesztés\\2023-2024\\nodejs_on my momma\\node-crash-course-lesson-2\\dalszoveg.txt', 'Dear Adonis, Im sorry that that man is your father, let me be honest, It takes a man to be a man, your dad is not responsive, I look at him and wish your grandpa woulda wore a condom, Im sorry that you gotta grow up and then stand behind him, Life is hard, I know, the challenge is always gon beat us home', () =>
  {
    console.log('file was written');
  });