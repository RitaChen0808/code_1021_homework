basic.forever(function () {
    for (let I = 0; I <= 8; I++) {
        led.plot(4 - I, 4)
        led.plot(5 - I, 3)
        led.plot(6 - I, 2)
        led.plot(7 - I, 1)
        led.plot(8 - I, 0)
        led.plot(4, 4 - I)
        led.plot(3, 5 - I)
        led.plot(2, 6 - I)
        led.plot(1, 7 - I)
        led.plot(0, 8 - I)
        basic.pause(100)
    }
    basic.clearScreen()
})
