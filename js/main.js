var quote = document.getElementById("quote");
var auther = document.getElementById("auther");

var qquote = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    auther: "Oscar Wilde",
  },
  {
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    auther: "Marilyn Monroe",
  },
  {
    quote: "“So many books, so little time.”",
    auther: "Frank Zappa",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    auther: "Albert Einstein",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    auther: "Marcus Tullius Cicero",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    auther: "Bernard M. Baruch",
  },
  {
    quote:
      "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
    auther: "William W. Purkey",
  },
  {
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    auther: "Dr. Seuss",
  },
];

var lastIndex = -1;
function change() {
  var i;
  do {
    i = Math.floor(Math.random() * qquote.length);
  } while (lastIndex === i);
  quote.innerHTML = qquote[i].quote;
  auther.innerHTML = qquote[i].auther;
  lastIndex = i;
  console.log(lastIndex);
}
