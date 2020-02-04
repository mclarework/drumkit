let boom = document.getElementsByClassName("hitBox")[0]
let clap = document.getElementsByClassName("hitBox")[1]
let hiHat = document.getElementsByClassName("hitBox")[2]
let kick = document.getElementsByClassName("hitBox")[3]
let openHat = document.getElementsByClassName("hitBox")[4]
let ride = document.getElementsByClassName("hitBox")[5]
let snare = document.getElementsByClassName("hitBox")[6]
let tink = document.getElementsByClassName("hitBox")[7]
let tom = document.getElementsByClassName("hitBox")[8]

let boomNoise = new Audio("sounds/boom.wav")
let clapNoise = new Audio("sounds/clap.wav")
let hiHatNoise = new Audio("sounds/hihat.wav")
let kickNoise = new Audio("sounds/kick.wav")
let openHatNoise = new Audio("sounds/openhat.wav")
let rideNoise = new Audio("sounds/ride.wav")
let snareNoise = new Audio("sounds/snare.wav")
let tinkNoise = new Audio("sounds/tink.wav")
let tomNoise = new Audio("sounds/tom.wav")

document.addEventListener("keypress",(event)=>{
    switch (true) {
        case event.code == "Digit1":
            boomNoise.play()
        break
        case event.code == "Digit2":
            clapNoise.play()
        break
        case event.code == "Digit3":2
            hiHatNoise.play()
        break
        case event.code == "Digit4":
            kickNoise.play()
        break
        case event.code == "Digit5":
            openHatNoise.play()
        break
        case event.code == "Digit6":
            rideNoise.play()
        break
        case event.code == "Digit7":
            snareNoise.play()
        break
        case event.code == "Digit8":
            tinkNoise.play()
        break
        case event.code == "Digit9":
            tomNoise.play()
        break
    }
})

document.addEventListener("click",(event)=>{
    switch (true) {
        case event.target == boom:
            boomNoise.play()
        break
        case event.target == clap:
            clapNoise.play()
        break
        case event.target == hiHat:
            hiHatNoise.play()
        break
        case event.target == kick:
            kickNoise.play()
        break
        case event.target == openHat:
            openHatNoise.play()
        break
        case event.target == ride:
            rideNoise.play()
        break
        case event.target == snare:
            snareNoise.play()
        break
        case event.target == tink:
            tinkNoise.play()
        break
        case event.target == tom:
            tomNoise.play()
        break
    }
})
