const quotes = [
    "The me of yesterday, the me of today, the me of tomorrow; With no expectations, it's all me. - Answer: Love myself", 
    "I hope you don't forget that giving up decisively also counts as courage. - Burn It", 
    "Decide for yourself what it means to be happy every day, take a step to grow up. - Light", 
    "The only time you should ever look back is to see how far you've come. - Butterfly", 
    "May your trials end in full bloom. - So far Away", 
    "I hope your dream won't just be left as a dream. - Snooze", 
    "Best moments are yet to come. - Yet to Come", 
    "The morning will come agagin. Because no darkness, no season can last forever. - Spring Day", 
    "You're already more than enough to be loved. - People Pt.2", 
    "Future's gonna be okay. - D-Day", 
    "Turn this all around. Everything is new at 00:00. - Zero O'Clock", 
    "Don't be trapped in someone else's dream. - N.O.", 
    "Even all the scars from your mistakes make up your constellation. - Answer: Love myself", 
    "Throw away the fear. - Dis-ease", 
    "Keep going, Dali. - MORE"
];

const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];

console.log(randomQuote);