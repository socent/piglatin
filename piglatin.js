$('button').on('click', function() {
	var word = $('#viewport p #word').val();
	var splitWord = word.match(/([^aeiou]*)([aeiou].*)/);

	if (splitWord[1] == "") {
		var newWord = ((word + "way").toLowerCase());
		$('#viewport #new-word').text(newWord);
	} else {
		var vowelSplit = splitWord[2];
		var consonantSplit = splitWord[1];
		var newWord = ((vowelSplit + consonantSplit + 'ay').toLowerCase());
		$('#viewport #new-word').text(newWord);
	}
})