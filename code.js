let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"The way I see it, if you want the rainbow, you gotta put up with the rain."    - Dolly Parton',
    '"If life were predictable it would cease to be life and be without flavor."    -Eleanor Roosevelt',
    '"The only impossible journey is the one you never begin." -Tony Robbins',
    '"Life is what happens when you are busy making other plans." -John Lennon',
    '"The future belongs to those who believe in the beauty of their dreams." -Eleanor Roosevelt',
    '"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
    '"The way to get started is to quit talking and begin doing." -Walt Disney',
    '"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
    '“The greatest religion is to be true to your own nature. Have faith in yourselves.”- Vivekananda',
    '“Take risks in your life. If you win, you may lead; if you lose, you may guide.” -Vivekananda',
    '“You can’t cross the sea merely by standing and staring at the water." -Rabindranath Tagore',
    '"Always remember that you are absolutely unique. Just like everyone else." -Margaret Mead',
    '"Being soaked alone is cold. Being soaked with your best friend is an adventure." - Emily Wing Smith',
    '"Never let the fear of striking out keep you from playing the game." -Babe Ruth',
    '"Life is really simple, but we insist on making it complicated." -Confucius',
    '"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
    '"If life were predictable it would cease to be life and be without flavor." -Eleanor Roosevelt',
];
btn.addEventListener('click',function(){
    var randomQuote= quotes[Math.floor(Math.random()* quotes.length)]
    output.innerHTML = randomQuote;
})