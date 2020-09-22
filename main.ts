input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
        basic.clearScreen()
    }
})
