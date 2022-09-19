const storedQuotes = ["Never complain, never explain. Resist the temptation to defend yourself or make excuses.", 
"Everything you do is triggered by an emotion of either desire or fear.", 
"The act of taking the first step is what separates the winners from the losers.", 
"You have within you,right now,everything you need to deal with whatever the world can throw at you.",
"The ability to discipline yourself to delay gratification in the short term in order to enjoy greater rewards in the long term, is the indispensable prerequisite for success."];

let storedWords = ["Successfull", "Disciplined", "Great", "Kind", "Smart", "Hard-working", "Capable"];

let quote = storedQuotes[Math.floor(Math.random()*5)];
let word = storedWords[Math.floor(Math.random()*7)];
let luckyNumber = Math.floor(Math.random()*10);


console.log(`Today's quote is: ${quote}`);
console.log(`Remember you are: ${word}`);
console.log(`And your lucky number for today is: ${luckyNumber}`);


