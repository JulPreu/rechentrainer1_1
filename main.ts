function addition () {
    Zahl1 = randint(1, 50)
    Zahl2 = randint(1, 50)
    Aufgabe = 1
    Antwort = 1
    if (Aufgabe == 1) {
        basic.showString("Was ist" + Zahl1 + "+" + Zahl2 + "?")
    }
}
let Antwort = 0
let Aufgabe = 0
let Zahl2 = 0
let Zahl1 = 0
let Rechenart = 0
while (input.pinIsPressed(TouchPin.P2) == false) {
    if (input.buttonIsPressed(Button.B)) {
        Rechenart += 1
    } else if (input.buttonIsPressed(Button.A)) {
        Rechenart += -1
    }
    if (Rechenart > 4 || Rechenart < 1) {
        Rechenart = 1
    }
    if (Rechenart == 1) {
        basic.showString("+")
    } else if (Rechenart == 2) {
        basic.showString("-")
    } else if (Rechenart == 3) {
        basic.showString("*")
    } else if (Rechenart == 4) {
        basic.showString(":")
    }
}
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P2)) {
        if (Rechenart == 1) {
            addition()
        }
    }
})
