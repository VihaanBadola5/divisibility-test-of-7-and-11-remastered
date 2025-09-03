game.showLongText("Enter a number to check divisibility", DialogLayout.Center)
let number = game.askForNumber("")
if (number % 7 == 0 && number % 11 == 0) {
    game.showLongText("The number is divisible by 7 and 11", DialogLayout.Center)
} else if (number % 7 == 0) {
    game.showLongText("The number is divisible by 7 only", DialogLayout.Center)
} else if (number % 11 == 0) {
    game.showLongText("The number is divisible by 11 only", DialogLayout.Center)
} else if (true) {
    game.showLongText("The number is not divisible by 7 and 11", DialogLayout.Center)
}
