input.onButtonPressed(Button.A, function () {
    if (ゲームオーバー == 0) {
        if (led.point(0, 4)) {
            led.unplot(0, 4)
        } else {
            ゲームオーバー = 1
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (ゲームオーバー == 0) {
        if (led.point(2, 4)) {
            led.unplot(2, 4)
        } else {
            ゲームオーバー = 1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (ゲームオーバー == 0) {
        if (led.point(4, 4)) {
            led.unplot(4, 4)
        } else {
            ゲームオーバー = 1
        }
    }
})
let ゲームオーバー = 0
let 拍子 = 3
let 速さ = 10
let 残り拍子 = 拍子
ゲームオーバー = 0
soundExpression.giggle.play()
for (let index = 0; index < 拍子 + 4; index++) {
    if (ゲームオーバー != 0) {
        break;
    }
    for (let X = 0; X <= 2; X++) {
        led.unplot(X * 2, 0)
    }
    if (残り拍子 > 0) {
        led.plot(randint(0, 2) * 2, 0)
        残り拍子 += -1
    }
    for (let index = 0; index < 速さ; index++) {
        basic.pause(100)
        if (ゲームオーバー != 0) {
            break;
        }
    }
    if (ゲームオーバー != 0) {
        break;
    }
    for (let X = 0; X <= 2; X++) {
        if (led.point(X * 2, 4)) {
            ゲームオーバー = 1
            break;
        }
    }
    for (let Y = 0; Y <= 3; Y++) {
        for (let X = 0; X <= 2; X++) {
            if (led.point(X * 2, 3 - Y)) {
                led.plot(X * 2, 4 - Y)
            } else {
                led.unplot(X * 2, 4 - Y)
            }
        }
    }
}
basic.pause(200)
if (ゲームオーバー == 0) {
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    for (let index = 0; index < 8; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(400)
        basic.showIcon(IconNames.Surprised)
        basic.pause(400)
    }
    basic.showIcon(IconNames.Heart)
} else {
    music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
    basic.showIcon(IconNames.No)
}
