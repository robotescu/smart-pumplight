let zgomot = 0
basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P1) < 500) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    basic.pause(1000)
})
basic.forever(function () {
    zgomot = smarthome.ReadNoise(AnalogPin.P10)
    if (zgomot >= 70) {
        smarthome.ledBrightness(AnalogPin.P8, true)
        basic.pause(2000)
        smarthome.ledBrightness(AnalogPin.P8, false)
    }
    basic.pause(1000)
})
