function getnum(num) {
    document.getElementsByClassName("answer")[0].value += document.getElementsByClassName("numbers")[num].value
}

function getop(num) {
    document.getElementsByClassName("answer")[0].value += document.getElementsByClassName("operator")[num].value
}

function cal() {
    document.getElementsByClassName("answer")[0].value = eval(document.getElementsByClassName("answer")[0].value)
}


function clrfun() {
    document.getElementsByClassName("answer")[0].value = ""
}

