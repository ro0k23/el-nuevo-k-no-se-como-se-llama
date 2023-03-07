let start = 0
let time = 0
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    start = input.runningTime()
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    time = input.runningTime() - start
    basic.showNumber(Math.idiv(time, 1000))
    basic.pause(100)
    basic.clearScreen()
    basic.showNumber(time % 1000)
})
basic.forever(function () {
	
})
