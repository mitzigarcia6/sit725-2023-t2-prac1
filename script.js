function changeText() {
    var textsArray = ["Welcome Mitzi!", "How are you today?", "Have a great day", "Enjoy SIT725!"]
    var number = getRandomNumberBetween(0, textsArray.length - 1)
    console.log("Index: ", number)
    document.getElementById("header").innerHTML = textsArray[number];
}
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}