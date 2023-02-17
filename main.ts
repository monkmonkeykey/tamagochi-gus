input.onButtonPressed(Button.A, function () {
    timer = 0
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    timer = 0
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Happy)
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    timer = 0
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # # # # #
            . # # # .
            `)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
        basic.showIcon(IconNames.Happy)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    }
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    timer = 0
    basic.showIcon(IconNames.Happy)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
})
let timer = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
basic.forever(function () {
    basic.pause(1000)
    timer += 1
    if (timer == 20) {
        basic.showIcon(IconNames.Sad)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
    }
    if (timer == 30) {
        basic.showIcon(IconNames.Asleep)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
    }
    if (timer == 40) {
        while (true) {
            basic.showIcon(IconNames.Skull)
        }
    }
})
