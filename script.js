function firstWord(str) {
	if (!str || !str.includes(' ')) {
        return str; 
    }
	const firstSpaceIndex = str.indexOf(' ');
    const firstWord = str.substring(0, firstSpaceIndex);

    return firstWord;
}