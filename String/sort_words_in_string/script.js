let sent = prompt("Enter a sentance");
let words = sent.split(' ');
words.sort();
let sorted_sent = words.join(' ');
alert(`sentence in sorted order of words\n${sorted_sent}`);