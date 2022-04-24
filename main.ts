function showDot () {
    strip.setAll(light.hsv(hue, 255, 255))
    pause(dotLength)
    strip.setAll(light.hsv(hue, 0, 0))
    pause(dotLength)
}
function encode () {
    morseOut = ""
    for (let msgIndex = 0; msgIndex <= message.length; msgIndex++) {
        letter = message.charAt(msgIndex)
        for (let alphaIndex = 0; alphaIndex <= Alphabet.length; alphaIndex++) {
            if (Alphabet[alphaIndex] == letter) {
                newCode = Morse[alphaIndex]
                morseOut = "" + morseOut + newCode
                morseOut = "" + morseOut + " "
            }
        }
    }
}
function MorseLights () {
    for (let codeIndex = 0; codeIndex <= morseOut.length; codeIndex++) {
        code = morseOut.charAt(codeIndex)
        if (code == ".") {
            showDot()
        } else if (code == "-") {
            showDash()
        } else {
            if (code == " ") {
                showSpace()
            }
        }
    }
    showSpace()
}
function showSpace () {
    strip.setAll(light.hsv(hue, 0, 0))
    pause(spaceLength)
}
function showDash () {
    strip.setAll(light.hsv(hue, 255, 255))
    pause(dashLength)
    strip.setAll(light.hsv(hue, 0, 0))
    pause(dotLength)
}
let hue = 100
let code = ""
let newCode = ""
let letter = ""
let morseOut = ""
let Morse: string[] = []
let Alphabet: string[] = []
let message = ""
let spaceLength = 0
let dashLength = 0
let dotLength = 0
let strip = light.createStrip(pins.D1, 2)
strip.setBrightness(255)
pixel.setColor(0x000000)
dotLength = 100
dashLength = dotLength * 3
spaceLength = dotLength * 3
message = "JOE"
Alphabet = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"
]
Morse = [
".-",
"-...",
"-.-.",
"-..",
".",
"..-.",
"--.",
"....",
"..",
".---",
"-.-",
".-..",
"--",
"-.",
"---",
".--.",
"--.-",
".-.",
"...",
"-",
"..-",
"...-",
".--",
"-..-",
"-.--",
"--.."
]
forever(function () {
    encode()
    MorseLights()
    pause(5*spaceLength)
})
