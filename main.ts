input.onPinReleased(TouchPin.P2, function () {
    while (Alarm == true) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Alarm == true) {
        Alarm = false
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . # .
            . # # # .
            . # # # .
            `)
        basic.pause(5000)
        Alarm = true
    }
})
let Alarm = false
Alarm = true
basic.forever(function () {
    while (Alarm == true) {
        basic.showIcon(IconNames.Skull)
    }
})
