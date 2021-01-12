// * `quotes` array 
const quotes = [
  {quote: 'Thinking, not growth, makes manhood. Accustom yourself, therefore, to thinking. Set yourself to understand whatever you see or read. To join thinking with reading is one of the first maxims, and one of the easiest operations', person: 'Isaac Taylor'},
  {quote: 'One of the secrets of life is to make stepping stones out of stumbling blocks', person: 'Jack Penn'},
  {quote: 'Children really brighten up a household. They never turn the lights off', person: 'Ralph Bus'},
  {quote: 'If you want to see a rainbow you have to learn to see the rain', person: 'Paulo Coelho'},
  {quote: 'I had it in my heart. I believed in myself, and I had confidence. I knew how to do it, had natural talent and I pursued it',  person: 'Muhammad Ali', year: '1968', cite: 'pro boxer muhammad ali'}
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote (arr) {
  var getRandomQuote = math.floor(math.random()*arr.length);
  return getRandomQuote[quote];

}

console.log();
/***
 * `printQuote` function
***/

function printQuote () {

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);