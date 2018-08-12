const dest = document.getElementById("main")

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}


document.getElementById("findButton").onclick = function findAll() {

    var anagrams = {}

    for (i = 0; i <= words.length; i++) {
        var word = words[i];
        const value = alphabetize(word)
        var typedText = document.getElementById("input").value;


        if (value in anagrams) {
            anagrams[value].push(word);
        } else {
            anagrams[value] = [word];
        }


        if (anagrams[value].length > 4) {
            let newSpan = document.createElement("span")
            let result = document.createTextNode(anagrams[value] + "---")
            dest.appendChild(newSpan)
            newSpan.appendChild(result)


        }



    }
}