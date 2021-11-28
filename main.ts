input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    running = false
    false_start = false
    basic.pause(1000 + randint(0, 2000))
    if (!(false_start)) {
        start = input.runningTime()
        running = true
        led.stopAnimation()
        basic.clearScreen()
        led.plot(randint(0, 4), randint(0, 4))
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(player1_points)
})
input.onPinPressed(TouchPin.P2, function () {
    if (running) {
        running = false
        end = input.runningTime()
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.pause(1000)
        basic.showNumber(end - start)
        player2_points = player2_points + 1
    } else {
        false_start = true
        basic.showLeds(`
            . . . . .
            . . # . #
            . . . # .
            . . # . #
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    player1_points = 0
    player2_points = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(player2_points)
})
input.onPinPressed(TouchPin.P1, function () {
    if (running) {
        running = false
        end = input.runningTime()
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(1000)
        basic.showNumber(end - start)
        player1_points = player1_points + 1
    } else {
        false_start = true
        basic.showLeds(`
            . . . . .
            # . # . .
            . # . . .
            # . # . .
            . . . . .
            `)
    }
})
let player2_points = 0
let player1_points = 0
let start = 0
let end = 0
let false_start = false
let running = false
running = false
false_start = false
end = 0
start = 0
player1_points = 0
player2_points = 0
