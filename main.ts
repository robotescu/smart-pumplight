let zgomot = 0
basic.showIcon(IconNames.Happy)
let strip = neopixel.create(DigitalPin.P8, 1, NeoPixelMode.RGB)
basic.pause(2000)
basic.forever(function () {
    zgomot = smarthome.ReadNoise(AnalogPin.P10)
    if (zgomot >= 70) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(2000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    basic.pause(1000)
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P1) < 500) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    basic.pause(1000)
})
