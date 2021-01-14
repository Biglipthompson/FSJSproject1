// * `quotes` array 
const quotes = [
  {quote: 'Thinking, not growth, makes manhood. Accustom yourself, therefore, to thinking. Set yourself to understand whatever you see or read. To join thinking with reading is one of the first maxims, and one of the easiest operations', source: 'Isaac Taylor'},
  {quote: 'One of the secrets of life is to make stepping stones out of stumbling blocks', source: 'Jack Penn'},
  {quote: 'Children really brighten up a household. They never turn the lights off', source: 'Ralph Bus'},
  {quote: 'If you want to see a rainbow you have to learn to see the rain', source: 'Paulo Coelho'},
  {quote: 'I had it in my heart. I believed in myself, and I had confidence. I knew how to do it, had natural talent and I pursued it', source: 'Muhammad Ali', year: '1968', citation: 'MGM fights'}
];


//This random quote function gets a random number and returns random quote
function getRandomQuote (arr) {
  let randomNumber = Math.floor(Math.random()*arr.length);
  return arr[randomNumber];
}
/***
 * `printQuote` function
***/
function printQuote () {
  let quoteToPrint = getRandomQuote(quotes);
  let HTMLstring = 
  `<p class="quote">${quoteToPrint.quote}</p>
  <p class="source">${quoteToPrint.source}`

	if (quoteToPrint.citation) {
		HTMLstring += `<span class="citation">${quoteToPrint.citation}</span>`;
	}
  if (quoteToPrint.year){
    HTMLstring += `<span class="year">${quoteToPrint.year}</span>`;
  }



  HTMLstring += `</p>`
  document.getElementById('quote-box').innerHTML = HTMLstring; 
  return quoteToPrint;
}

printQuote();




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);