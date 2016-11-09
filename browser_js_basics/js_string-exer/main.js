var prompt = prompt("Enter any word you like!");
	if (prompt != null) {

		alert("You entered: "+ prompt+"\n"+
		 "There are "+ prompt.length + " characters in it.\n"+
		 "Lowercase: "+ prompt.toLowerCase()+"\n"+
		 "Uppercase: "+ prompt.toUpperCase()+"\n"+
		 "Example: The "+ prompt+ " fell out of the tree"+"\n"+
		 "Subword: "+ prompt.substring(1,34)
		 );