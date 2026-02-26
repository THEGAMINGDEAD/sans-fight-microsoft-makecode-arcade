namespace SpriteKind {
    export const button = SpriteKind.create()
    export const placeholder = SpriteKind.create()
}
function actselected () {
    debug.sayText("act")
    guimode = 1
}
function itemselected () {
    debug.sayText("item")
}
function setvars () {
    Fightbutton = 1
    actbutton = 0
    itembutton = 0
    mercybutton = 0
    guimode = 0
    inbattle = 0
    damage = 100
}
function bootupgui () {
    selectmode = 1
    tiles.setCurrentTilemap(tilemap`level`)
    info.setScore(100)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    gui = sprites.create(img`
        f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.placeholder)
    gui.setPosition(76, 104)
    debug = sprites.create(img`
        f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.placeholder)
    debug.setPosition(73, 56)
    fightbutton_left = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 . . . . . . . . . . . . . . . 
        4 . . . . . . . . 4 4 4 4 . . 4 
        4 . . . . . . . . 4 . . . . . 4 
        4 . . . . . 4 4 . 4 . . . . . 4 
        4 . . . . . 4 4 . 4 . . . . . 4 
        4 . . . . 4 4 . . 4 . . . . . 4 
        4 . . . . 4 4 . . 4 4 4 4 . . 4 
        4 . 4 . 4 4 . . . 4 . . . . . 4 
        4 . . 4 4 4 . . . 4 . . . . . 4 
        4 . . 4 4 4 . . . 4 . . . . . 4 
        4 . . 4 4 . 4 . . 4 . . . . . 4 
        4 . 4 4 . . . . . 4 . . . . . 4 
        4 . 4 4 . . . . . . . . . . . . 
        4 . . . . . . . . . . . . . . . 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `, SpriteKind.button)
    fightbutton_left.setPosition(14, 111)
    fightbutton_right = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        . . . . . . . . . . . . . . . 4 
        . 4 4 4 4 . . 4 . . 4 . 4 4 4 4 
        . 4 . . . . . 4 . . 4 . . 4 . 4 
        . 4 . . . . . 4 . . 4 . . 4 . 4 
        . 4 . . . . . 4 . . 4 . . 4 . 4 
        . 4 . . . . . 4 . . 4 . . 4 . 4 
        . 4 . . 4 4 . 4 4 4 4 . . 4 . 4 
        . 4 . . . 4 . 4 . . 4 . . 4 . 4 
        . 4 . . . 4 . 4 . . 4 . . 4 . 4 
        . 4 . . . 4 . 4 . . 4 . . 4 . 4 
        . 4 . . 4 4 . 4 . . 4 . . 4 . 4 
        . 4 4 4 4 4 . 4 . . 4 . . 4 . 4 
        . . . . . . . . . . . . . . . 4 
        . . . . . . . . . . . . . . . 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `, SpriteKind.button)
    fightbutton_right.setPosition(30, 111)
    actbutton_left = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 . . . . . . . . . . . . . . . 
        4 . . . . . . . 4 4 4 4 4 4 4 . 
        4 . 4 4 . . . . 4 . . . . . 4 . 
        4 . . . 4 . . . 4 . . . . . 4 . 
        4 . 4 . . 4 . . 4 4 . . . 4 4 . 
        4 . . 4 . 4 . . 4 4 4 4 4 4 4 . 
        4 . . 4 . 4 . . 4 4 . . . 4 4 . 
        4 . . 4 . 4 . . 4 . . . . . 4 . 
        4 . 4 . . 4 . . 4 . . . . . 4 . 
        4 . . . 4 . . . 4 . . . . . 4 . 
        4 . 4 4 . . . . 4 . . . . . 4 . 
        4 . . . . . . . 4 . . . . . 4 . 
        4 . . . . . . . . . . . . . . . 
        4 . . . . . . . . . . . . . . . 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `, SpriteKind.button)
    actbutton_left.setPosition(50, 111)
    actbutton_right = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        . . . . . . . . . . . . . . . 4 
        . 4 4 4 4 4 . 4 4 4 4 4 4 4 . 4 
        . 4 . . . . . . . . 4 . . . . 4 
        . 4 . . . . . . . . 4 . . . . 4 
        . 4 . . . . . . . . 4 . . . . 4 
        . 4 . . . . . . . . 4 . . . . 4 
        . 4 . . . . . . . . 4 . . . . 4 
        . 4 . . . . . . . . 4 . . . . 4 
        . 4 . . . . . . . . 4 . . . . 4 
        . 4 . . . . . . . . 4 . . . . 4 
        . 4 . . . . . . . . 4 . . . . 4 
        . 4 4 4 4 4 . . . . 4 . . . . 4 
        . . . . . . . . . . . . . . . 4 
        . . . . . . . . . . . . . . . 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `, SpriteKind.button)
    actbutton_right.setPosition(66, 111)
    itembutton_left = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 . . . . . . . . . . . . . . . 
        4 . . . . . . . 4 4 4 4 4 . 4 4 
        4 . . . . . . . . . 4 . . . . . 
        4 . 4 . 4 . 4 . . . 4 . . . . . 
        4 . . 4 4 4 . . . . 4 . . . . . 
        4 . . . 4 . . . . . 4 . . . . . 
        4 . . 4 4 4 . . . . 4 . . . . . 
        4 . . 4 4 4 4 . . . 4 . . . . . 
        4 . 4 4 . . 4 4 . . 4 . . . . . 
        4 . 4 . 4 4 . 4 . . 4 . . . . . 
        4 . 4 . 4 4 . 4 . . 4 . . . . . 
        4 . . 4 . . 4 4 4 4 4 4 4 . . . 
        4 . . . 4 4 4 . . . . . . . . . 
        4 . . . . . . . . . . . . . . . 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `, SpriteKind.button)
    itembutton_left.setPosition(85, 111)
    itembutton_right = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        . . . . . . . . . . . . . . . 4 
        4 4 4 4 . 4 4 4 4 . 4 . . . 4 4 
        . 4 . . . 4 . . . . 4 4 . 4 4 4 
        . 4 . . . 4 . . . . 4 4 . 4 4 4 
        . 4 . . . 4 . . . . 4 . 4 . 4 4 
        . 4 . . . 4 . . . . 4 . . . 4 4 
        . 4 . . . 4 4 4 4 . 4 . . . 4 4 
        . 4 . . . 4 . . . . 4 . . . 4 4 
        . 4 . . . 4 . . . . 4 . . . 4 4 
        . 4 . . . 4 . . . . 4 . . . 4 4 
        . 4 . . . 4 . . . . 4 . . . 4 4 
        . 4 . . . 4 . . . . 4 . . . 4 4 
        . 4 . . . 4 4 4 4 . 4 . . . 4 4 
        . . . . . . . . . . . . . . . 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `, SpriteKind.button)
    itembutton_right.setPosition(100, 111)
    mercybutton_left = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 . . . . . . . . . . . . . . . 
        4 . . . . . . . 4 . . . 4 . 4 4 
        4 . . . . . . . 4 4 . 4 4 . 4 . 
        4 . 4 . . . 4 . 4 4 . 4 4 . 4 . 
        4 . . 4 . 4 . . 4 . 4 . 4 . 4 . 
        4 . . 4 . 4 . . 4 . . . 4 . 4 . 
        4 . . . 4 . . . 4 . . . 4 . 4 4 
        4 . . . 4 . . . 4 . . . 4 . 4 . 
        4 . . 4 . 4 . . 4 . . . 4 . 4 . 
        4 . . 4 . 4 . . 4 . . . 4 . 4 . 
        4 . 4 . . . 4 . 4 . . . 4 . 4 . 
        4 . . . . . . . 4 . . . 4 . 4 . 
        4 . . . . . . . 4 . . . 4 . 4 4 
        4 . . . . . . . . . . . . . . . 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `, SpriteKind.button)
    mercybutton_left.setPosition(119, 111)
    mercybutton_right = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        . . . . . . . . . . . . . . . 4 
        4 4 . 4 4 4 . . 4 4 4 . 4 . 4 4 
        . . . 4 . . 4 . 4 . . . 4 . 4 4 
        . . . 4 . . 4 . 4 . . . 4 . 4 4 
        . . . 4 . . 4 . 4 . . . 4 . 4 4 
        . . . 4 . 4 . . 4 . . . . 4 . 4 
        4 4 . 4 4 . . . 4 . . . . 4 . 4 
        . . . 4 . 4 . . 4 . . . . 4 . 4 
        . . . 4 . . 4 . 4 . . . . 4 . 4 
        . . . 4 . . 4 . 4 . . . . 4 . 4 
        . . . 4 . . 4 . 4 . . . . 4 . 4 
        . . . 4 . . 4 . 4 . . . . 4 . 4 
        4 4 . 4 . . 4 . 4 4 4 . . 4 . 4 
        . . . . . . . . . . . . . . . 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `, SpriteKind.button)
    mercybutton_right.setPosition(135, 111)
    health = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.placeholder)
    health.setPosition(78, 112)
    setvars()
}
function itemdecider () {
    if (Fightbutton == 1) {
        fightselected()
    }
    if (actbutton == 1) {
        actselected()
    }
    if (itembutton == 1) {
        itemselected()
    }
    if (mercybutton == 1) {
        mercyselected()
    }
    selectmode = 0
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectmode == 1) {
        itemdecider()
    }
    if (selectmode == 0) {
        if (actbutton == 1) {
            gui_message_number += 1
        }
    }
})
function fightselected () {
    debug.sayText("fight")
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectmode == 1) {
        selectedbutton += -1
    }
})
function sans_attack () {
    inbattle = 1
    bone = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
}
function turn_ended_reset_vars () {
    gui_message_number = 0
    guimode = 0
    guitext = ""
    gui_message_number = 0
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectmode == 1) {
        selectedbutton += 1
    }
})
function mercyselected () {
    debug.sayText("mercy")
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    damage += -1
})
let guitext = ""
let bone: Sprite = null
let selectedbutton = 0
let gui_message_number = 0
let health: Sprite = null
let mercybutton_right: Sprite = null
let mercybutton_left: Sprite = null
let itembutton_right: Sprite = null
let itembutton_left: Sprite = null
let actbutton_right: Sprite = null
let actbutton_left: Sprite = null
let fightbutton_right: Sprite = null
let fightbutton_left: Sprite = null
let gui: Sprite = null
let mySprite: Sprite = null
let selectmode = 0
let damage = 0
let inbattle = 0
let mercybutton = 0
let itembutton = 0
let actbutton = 0
let Fightbutton = 0
let guimode = 0
let debug: Sprite = null
bootupgui()
forever(function () {
    if (inbattle == 1) {
        controller.moveSprite(mySprite)
    }
})
forever(function () {
    gui.sayText(guitext)
})
forever(function () {
    if (actbutton == 1) {
        if (guimode == 1) {
            if (gui_message_number == 1) {
                guitext = "x CHECK                                                                      "
            }
            if (gui_message_number == 2) {
                guitext = "x SANS                                                                 "
            }
            if (gui_message_number == 3) {
                guitext = "xSANS 1 ATK 1 xDEF"
            }
            if (gui_message_number == 4) {
                guitext = "xThe easiest xenemy."
            }
            if (gui_message_number == 5) {
                guitext = "xCan only deal  x 1 damage."
            }
            if (gui_message_number == 6) {
                turn_ended_reset_vars()
                sans_attack()
            }
        }
    }
})
forever(function () {
    if (selectmode == 1) {
        if (selectedbutton == 5) {
            selectedbutton = 1
        }
        if (selectedbutton == 1) {
            Fightbutton = 1
            actbutton = 0
            itembutton = 0
            mercybutton = 0
        }
        if (selectedbutton == 2) {
            Fightbutton = 0
            actbutton = 1
            itembutton = 0
            mercybutton = 0
        }
        if (selectedbutton == 3) {
            Fightbutton = 0
            actbutton = 0
            itembutton = 1
            mercybutton = 0
        }
        if (selectedbutton == 4) {
            Fightbutton = 0
            actbutton = 0
            itembutton = 0
            mercybutton = 1
        }
    }
})
forever(function () {
    if (selectmode == 1) {
        if (Fightbutton == 1) {
            fightbutton_left.setImage(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 . . . . . . . . . . . . . . . 
                5 . . . . . . . . 5 5 5 5 . . 5 
                5 . . . . . . . . 5 . . . . . 5 
                5 . . . . . 5 5 . 5 . . . . . 5 
                5 . . . . . 5 5 . 5 . . . . . 5 
                5 . . . . 5 5 . . 5 . . . . . 5 
                5 . . . . 5 5 . . 5 5 5 5 . . 5 
                5 . 5 . 5 5 . . . 5 . . . . . 5 
                5 . . 5 5 5 . . . 5 . . . . . 5 
                5 . . 5 5 5 . . . 5 . . . . . 5 
                5 . . 5 5 . 5 . . 5 . . . . . 5 
                5 . 5 5 . . . . . 5 . . . . . 5 
                5 . 5 5 . . . . . . . . . . . . 
                5 . . . . . . . . . . . . . . . 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                `)
            fightbutton_right.setImage(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . . . . . . . . . . . . . . . 5 
                . 5 5 5 5 . . 5 . . 5 . 5 5 5 5 
                . 5 . . . . . 5 . . 5 . . 5 . 5 
                . 5 . . . . . 5 . . 5 . . 5 . 5 
                . 5 . . . . . 5 . . 5 . . 5 . 5 
                . 5 . . . . . 5 . . 5 . . 5 . 5 
                . 5 . . 5 5 . 5 5 5 5 . . 5 . 5 
                . 5 . . . 5 . 5 . . 5 . . 5 . 5 
                . 5 . . . 5 . 5 . . 5 . . 5 . 5 
                . 5 . . . 5 . 5 . . 5 . . 5 . 5 
                . 5 . . 5 5 . 5 . . 5 . . 5 . 5 
                . 5 5 5 5 5 . 5 . . 5 . . 5 . 5 
                . . . . . . . . . . . . . . . 5 
                . . . . . . . . . . . . . . . 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                `)
        }
        if (actbutton == 1) {
            actbutton_left.setImage(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 . . . . . . . . . . . . . . . 
                5 . . . . . . . 5 5 5 5 5 5 5 . 
                5 . 5 5 . . . . 5 . . . . . 5 . 
                5 . . . 5 . . . 5 . . . . . 5 . 
                5 . 5 . . 5 . . 5 5 . . . 5 5 . 
                5 . . 5 . 5 . . 5 5 5 5 5 5 5 . 
                5 . . 5 . 5 . . 5 5 . . . 5 5 . 
                5 . . 5 . 5 . . 5 . . . . . 5 . 
                5 . 5 . . 5 . . 5 . . . . . 5 . 
                5 . . . 5 . . . 5 . . . . . 5 . 
                5 . 5 5 . . . . 5 . . . . . 5 . 
                5 . . . . . . . 5 . . . . . 5 . 
                5 . . . . . . . . . . . . . . . 
                5 . . . . . . . . . . . . . . . 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                `)
            actbutton_right.setImage(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . . . . . . . . . . . . . . . 5 
                . 5 5 5 5 5 . 5 5 5 5 5 5 5 . 5 
                . 5 . . . . . . . . 5 . . . . 5 
                . 5 . . . . . . . . 5 . . . . 5 
                . 5 . . . . . . . . 5 . . . . 5 
                . 5 . . . . . . . . 5 . . . . 5 
                . 5 . . . . . . . . 5 . . . . 5 
                . 5 . . . . . . . . 5 . . . . 5 
                . 5 . . . . . . . . 5 . . . . 5 
                . 5 . . . . . . . . 5 . . . . 5 
                . 5 . . . . . . . . 5 . . . . 5 
                . 5 5 5 5 5 . . . . 5 . . . . 5 
                . . . . . . . . . . . . . . . 5 
                . . . . . . . . . . . . . . . 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                `)
        }
        if (itembutton == 1) {
            itembutton_left.setImage(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 . . . . . . . . . . . . . . . 
                5 . . . . . . . 5 5 5 5 5 . 5 5 
                5 . . . . . . . . . 5 . . . . . 
                5 . 5 . 5 . 5 . . . 5 . . . . . 
                5 . . 5 5 5 . . . . 5 . . . . . 
                5 . . . 5 . . . . . 5 . . . . . 
                5 . . 5 5 5 . . . . 5 . . . . . 
                5 . . 5 5 5 5 . . . 5 . . . . . 
                5 . 5 5 . . 5 5 . . 5 . . . . . 
                5 . 5 . 5 5 . 5 . . 5 . . . . . 
                5 . 5 . 5 5 . 5 . . 5 . . . . . 
                5 . . 5 . . 5 5 5 5 5 5 5 . . . 
                5 . . . 5 5 5 . . . . . . . . . 
                5 . . . . . . . . . . . . . . . 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                `)
            itembutton_right.setImage(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . . . . . . . . . . . . . . . 5 
                5 5 5 5 . 5 5 5 5 . 5 . . . 5 5 
                . 5 . . . 5 . . . . 5 5 . 5 5 5 
                . 5 . . . 5 . . . . 5 5 . 5 5 5 
                . 5 . . . 5 . . . . 5 . 5 . 5 5 
                . 5 . . . 5 . . . . 5 . . . 5 5 
                . 5 . . . 5 5 5 5 . 5 . . . 5 5 
                . 5 . . . 5 . . . . 5 . . . 5 5 
                . 5 . . . 5 . . . . 5 . . . 5 5 
                . 5 . . . 5 . . . . 5 . . . 5 5 
                . 5 . . . 5 . . . . 5 . . . 5 5 
                . 5 . . . 5 . . . . 5 . . . 5 5 
                . 5 . . . 5 5 5 5 . 5 . . . 5 5 
                . . . . . . . . . . . . . . . 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                `)
        }
        if (mercybutton == 1) {
            mercybutton_left.setImage(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 . . . . . . . . . . . . . . . 
                5 . . . . . . . 5 . . . 5 . 5 5 
                5 . . . . . . . 5 5 . 5 5 . 5 . 
                5 . 5 . . . 5 . 5 5 . 5 5 . 5 . 
                5 . . 5 . 5 . . 5 . 5 . 5 . 5 . 
                5 . . 5 . 5 . . 5 . . . 5 . 5 . 
                5 . . . 5 . . . 5 . . . 5 . 5 5 
                5 . . . 5 . . . 5 . . . 5 . 5 . 
                5 . . 5 . 5 . . 5 . . . 5 . 5 . 
                5 . . 5 . 5 . . 5 . . . 5 . 5 . 
                5 . 5 . . . 5 . 5 . . . 5 . 5 . 
                5 . . . . . . . 5 . . . 5 . 5 . 
                5 . . . . . . . 5 . . . 5 . 5 5 
                5 . . . . . . . . . . . . . . . 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                `)
            mercybutton_right.setImage(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . . . . . . . . . . . . . . . 5 
                5 5 . 5 5 5 . . 5 5 5 . 5 . 5 5 
                . . . 5 . . 5 . 5 . . . 5 . 5 5 
                . . . 5 . . 5 . 5 . . . 5 . 5 5 
                . . . 5 . . 5 . 5 . . . 5 . 5 5 
                . . . 5 . 5 . . 5 . . . . 5 . 5 
                5 5 . 5 5 . . . 5 . . . . 5 . 5 
                . . . 5 . 5 . . 5 . . . . 5 . 5 
                . . . 5 . . 5 . 5 . . . . 5 . 5 
                . . . 5 . . 5 . 5 . . . . 5 . 5 
                . . . 5 . . 5 . 5 . . . . 5 . 5 
                . . . 5 . . 5 . 5 . . . . 5 . 5 
                5 5 . 5 . . 5 . 5 5 5 . . 5 . 5 
                . . . . . . . . . . . . . . . 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                `)
        }
    }
})
forever(function () {
    health.sayText("" + damage + "/100")
})
forever(function () {
    if (selectmode == 1) {
        if (Fightbutton == 0) {
            fightbutton_left.setImage(img`
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                4 . . . . . . . . . . . . . . . 
                4 . . . . . . . . 4 4 4 4 . . 4 
                4 . . . . . . . . 4 . . . . . 4 
                4 . . . . . 4 4 . 4 . . . . . 4 
                4 . . . . . 4 4 . 4 . . . . . 4 
                4 . . . . 4 4 . . 4 . . . . . 4 
                4 . . . . 4 4 . . 4 4 4 4 . . 4 
                4 . 4 . 4 4 . . . 4 . . . . . 4 
                4 . . 4 4 4 . . . 4 . . . . . 4 
                4 . . 4 4 4 . . . 4 . . . . . 4 
                4 . . 4 4 . 4 . . 4 . . . . . 4 
                4 . 4 4 . . . . . 4 . . . . . 4 
                4 . 4 4 . . . . . . . . . . . . 
                4 . . . . . . . . . . . . . . . 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                `)
            fightbutton_right.setImage(img`
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                . . . . . . . . . . . . . . . 4 
                . 4 4 4 4 . . 4 . . 4 . 4 4 4 4 
                . 4 . . . . . 4 . . 4 . . 4 . 4 
                . 4 . . . . . 4 . . 4 . . 4 . 4 
                . 4 . . . . . 4 . . 4 . . 4 . 4 
                . 4 . . . . . 4 . . 4 . . 4 . 4 
                . 4 . . 4 4 . 4 4 4 4 . . 4 . 4 
                . 4 . . . 4 . 4 . . 4 . . 4 . 4 
                . 4 . . . 4 . 4 . . 4 . . 4 . 4 
                . 4 . . . 4 . 4 . . 4 . . 4 . 4 
                . 4 . . 4 4 . 4 . . 4 . . 4 . 4 
                . 4 4 4 4 4 . 4 . . 4 . . 4 . 4 
                . . . . . . . . . . . . . . . 4 
                . . . . . . . . . . . . . . . 4 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                `)
        }
        if (actbutton == 0) {
            actbutton_left.setImage(img`
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                4 . . . . . . . . . . . . . . . 
                4 . . . . . . . 4 4 4 4 4 4 4 . 
                4 . 4 4 . . . . 4 . . . . . 4 . 
                4 . . . 4 . . . 4 . . . . . 4 . 
                4 . 4 . . 4 . . 4 4 . . . 4 4 . 
                4 . . 4 . 4 . . 4 4 4 4 4 4 4 . 
                4 . . 4 . 4 . . 4 4 . . . 4 4 . 
                4 . . 4 . 4 . . 4 . . . . . 4 . 
                4 . 4 . . 4 . . 4 . . . . . 4 . 
                4 . . . 4 . . . 4 . . . . . 4 . 
                4 . 4 4 . . . . 4 . . . . . 4 . 
                4 . . . . . . . 4 . . . . . 4 . 
                4 . . . . . . . . . . . . . . . 
                4 . . . . . . . . . . . . . . . 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                `)
            actbutton_right.setImage(img`
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                . . . . . . . . . . . . . . . 4 
                . 4 4 4 4 4 . 4 4 4 4 4 4 4 . 4 
                . 4 . . . . . . . . 4 . . . . 4 
                . 4 . . . . . . . . 4 . . . . 4 
                . 4 . . . . . . . . 4 . . . . 4 
                . 4 . . . . . . . . 4 . . . . 4 
                . 4 . . . . . . . . 4 . . . . 4 
                . 4 . . . . . . . . 4 . . . . 4 
                . 4 . . . . . . . . 4 . . . . 4 
                . 4 . . . . . . . . 4 . . . . 4 
                . 4 . . . . . . . . 4 . . . . 4 
                . 4 4 4 4 4 . . . . 4 . . . . 4 
                . . . . . . . . . . . . . . . 4 
                . . . . . . . . . . . . . . . 4 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                `)
        }
        if (itembutton == 0) {
            itembutton_left.setImage(img`
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                4 . . . . . . . . . . . . . . . 
                4 . . . . . . . 4 4 4 4 4 . 4 4 
                4 . . . . . . . . . 4 . . . . . 
                4 . 4 . 4 . 4 . . . 4 . . . . . 
                4 . . 4 4 4 . . . . 4 . . . . . 
                4 . . . 4 . . . . . 4 . . . . . 
                4 . . 4 4 4 . . . . 4 . . . . . 
                4 . . 4 4 4 4 . . . 4 . . . . . 
                4 . 4 4 . . 4 4 . . 4 . . . . . 
                4 . 4 . 4 4 . 4 . . 4 . . . . . 
                4 . 4 . 4 4 . 4 . . 4 . . . . . 
                4 . . 4 . . 4 4 4 4 4 4 4 . . . 
                4 . . . 4 4 4 . . . . . . . . . 
                4 . . . . . . . . . . . . . . . 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                `)
            itembutton_right.setImage(img`
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                . . . . . . . . . . . . . . . 4 
                4 4 4 4 . 4 4 4 4 . 4 . . . 4 4 
                . 4 . . . 4 . . . . 4 4 . 4 4 4 
                . 4 . . . 4 . . . . 4 4 . 4 4 4 
                . 4 . . . 4 . . . . 4 . 4 . 4 4 
                . 4 . . . 4 . . . . 4 . . . 4 4 
                . 4 . . . 4 4 4 4 . 4 . . . 4 4 
                . 4 . . . 4 . . . . 4 . . . 4 4 
                . 4 . . . 4 . . . . 4 . . . 4 4 
                . 4 . . . 4 . . . . 4 . . . 4 4 
                . 4 . . . 4 . . . . 4 . . . 4 4 
                . 4 . . . 4 . . . . 4 . . . 4 4 
                . 4 . . . 4 4 4 4 . 4 . . . 4 4 
                . . . . . . . . . . . . . . . 4 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                `)
        }
        if (mercybutton == 0) {
            mercybutton_left.setImage(img`
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                4 . . . . . . . . . . . . . . . 
                4 . . . . . . . 4 . . . 4 . 4 4 
                4 . . . . . . . 4 4 . 4 4 . 4 . 
                4 . 4 . . . 4 . 4 4 . 4 4 . 4 . 
                4 . . 4 . 4 . . 4 . 4 . 4 . 4 . 
                4 . . 4 . 4 . . 4 . . . 4 . 4 . 
                4 . . . 4 . . . 4 . . . 4 . 4 4 
                4 . . . 4 . . . 4 . . . 4 . 4 . 
                4 . . 4 . 4 . . 4 . . . 4 . 4 . 
                4 . . 4 . 4 . . 4 . . . 4 . 4 . 
                4 . 4 . . . 4 . 4 . . . 4 . 4 . 
                4 . . . . . . . 4 . . . 4 . 4 . 
                4 . . . . . . . 4 . . . 4 . 4 4 
                4 . . . . . . . . . . . . . . . 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                `)
            mercybutton_right.setImage(img`
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                . . . . . . . . . . . . . . . 4 
                4 4 . 4 4 4 . . 4 4 4 . 4 . 4 4 
                . . . 4 . . 4 . 4 . . . 4 . 4 4 
                . . . 4 . . 4 . 4 . . . 4 . 4 4 
                . . . 4 . . 4 . 4 . . . 4 . 4 4 
                . . . 4 . 4 . . 4 . . . . 4 . 4 
                4 4 . 4 4 . . . 4 . . . . 4 . 4 
                . . . 4 . 4 . . 4 . . . . 4 . 4 
                . . . 4 . . 4 . 4 . . . . 4 . 4 
                . . . 4 . . 4 . 4 . . . . 4 . 4 
                . . . 4 . . 4 . 4 . . . . 4 . 4 
                . . . 4 . . 4 . 4 . . . . 4 . 4 
                4 4 . 4 . . 4 . 4 4 4 . . 4 . 4 
                . . . . . . . . . . . . . . . 4 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                `)
        }
    }
})
