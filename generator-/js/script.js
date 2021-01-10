/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const randomQuotes = [
  'Thinking, not growth, makes manhood. Accustom yourself, therefore, to thinking. Set yourself to understand whatever you see or read. To join thinking with reading is one of the first maxims, and one of the easiest operations. - Isaac Taylor',
  'One of the secrets of life is to make stepping stones out of stumbling blocks. - Jack Penn',
  'Children really brighten up a household. They never turn the lights off. - Ralph Bus',
  'If you want to see a rainbow you have to learn to see the rain. - Paulo Coelho',
  'I had it in my heart. I believed in myself, and I had confidence. I knew how to do it, had natural talent and I pursued it. -  Muhammad Ali'
];



/***
 * `getRandomQuote` function
***/

function getRandomQuote (arr) {
  getRandomQuote = math.floor(math.random()*arr.length);
  return randomQuotes;
}



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);