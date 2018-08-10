const dest = document.getElementById("main")

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}


document.getElementById("findButton").onclick = function findAll() {



    for (i = 0; i <= words.length; i++) {
        var word = words[i];
        const value = alphabetize(word)
        var typedText = document.getElementById("input").value;




        if (value === alphabetize(typedText)) {
            let newSpan = document.createElement("span")
            let result = document.createTextNode(word + " ")
            dest.appendChild(newSpan)
            newSpan.appendChild(result)


        }



    }
}