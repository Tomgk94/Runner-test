let raceNumber = Math.floor(Math.random() * 1000);

var earlyRegister = false

var Age = 16

if (Age >=18 && earlyRegister) {
    raceNumber +=1000 
    console.log(`Runner:${raceNumber}: Your race starts at 9:30`);  
}
else if (Age>18 && !earlyRegister) {
    console.log(`Runner:${raceNumber}: Your race starts at 11:00`);
  } 
 else if (Age < 18) {
    console.log(`Runner:${raceNumber}: Your race starts at 12:30`)
  }
