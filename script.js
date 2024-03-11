function firstWord(s) {
  // your code here
	if (!str || !str.includes(' ')) {
        return str; 
    }
	const firstSpaceIndex = str.indexOf(' ');
    const firstWord = str.substring(0, firstSpaceIndex);

    return firstWord;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
