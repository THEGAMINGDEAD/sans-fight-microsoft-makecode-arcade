namespace SpriteKind {
    export const button = SpriteKind.create()
    export const placeholder = SpriteKind.create()
    export const wall = SpriteKind.create()
    export const bone1 = SpriteKind.create()
    export const sans = SpriteKind.create()
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
function sans_attack1 () {
    inbattle = 1
    bone_end = sprites.create(img`
        . 
        . 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        . 
        . 
        `, SpriteKind.wall)
    bone_end.setPosition(17, 72)
    bone1()
    timer.after(150, function () {
        bone2()
        timer.after(150, function () {
            bone3()
            timer.after(150, function () {
                bone4()
                timer.after(150, function () {
                    bone6()
                    timer.after(150, function () {
                        bone7()
                        timer.after(150, function () {
                            bone8()
                        })
                    })
                })
            })
        })
    })
}
function bootupgui () {
    selectmode = 1
    tiles.setCurrentTilemap(tilemap`level`)
    info.setScore(100)
    sans = sprites.create(img`
        . . . . . . . 1 1 . . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 f f 1 1 1 1 f f 1 1 . . 
        . 1 1 1 f f 1 1 1 1 f f 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 f 1 f 1 1 f 1 1 f 1 1 . 
        . 1 1 f f 1 f 1 1 f 1 1 f f 1 . 
        . . 1 1 1 1 f 1 1 f 1 1 1 1 . . 
        . . . 1 1 f f 1 1 f f 1 1 . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.sans)
    sans.setPosition(74, 39)
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
function bone6 () {
    bone62 = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
    scaling.scaleByPixels(bone62, 30, ScaleDirection.Vertically, ScaleAnchor.Bottom, false)
    bone62.setPosition(142, 81)
    bone62.setVelocity(-50, 0)
    bone62.setFlag(SpriteFlag.DestroyOnWall, true)
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
function turn_ended_reset_vars () {
    gui_message_number = 0
    guimode = 0
    guitext = ""
    gui_message_number = 0
}
function bone1 () {
    bone = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
    scaling.scaleByPixels(bone, 10, ScaleDirection.Vertically, ScaleAnchor.Bottom, false)
    bone.setPosition(142, 81)
    bone.setVelocity(-50, 0)
    bone.setFlag(SpriteFlag.DestroyOnWall, true)
}
function bone7 () {
    bone72 = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
    scaling.scaleByPixels(bone72, 20, ScaleDirection.Vertically, ScaleAnchor.Bottom, false)
    bone72.setPosition(142, 81)
    bone72.setVelocity(-50, 0)
    bone72.setFlag(SpriteFlag.DestroyOnWall, true)
}
function sansturn () {
    sans_attack1()
    attacknumber = randint(1, 1)
    if (attacknumber == 1) {
        sans_attack1()
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectmode == 1) {
        selectedbutton += 1
    }
})
function mercyselected () {
    debug.sayText("mercy")
}
function bone2 () {
    bone22 = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
    scaling.scaleByPixels(bone22, 20, ScaleDirection.Vertically, ScaleAnchor.Bottom, false)
    bone22.setPosition(142, 81)
    bone22.setVelocity(-50, 0)
    bone22.setFlag(SpriteFlag.DestroyOnWall, true)
}
function bone3 () {
    bone32 = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
    scaling.scaleByPixels(bone32, 40, ScaleDirection.Vertically, ScaleAnchor.Bottom, false)
    bone32.setPosition(142, 81)
    bone32.setVelocity(-50, 0)
    bone32.setFlag(SpriteFlag.DestroyOnWall, true)
}
function bone5 () {
    bone52 = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
    scaling.scaleByPixels(bone52, 40, ScaleDirection.Vertically, ScaleAnchor.Bottom, false)
    bone52.setPosition(142, 81)
    bone52.setVelocity(-50, 0)
    bone52.setFlag(SpriteFlag.DestroyOnWall, true)
}
function bone4 () {
    bone42 = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
    scaling.scaleByPixels(bone42, 50, ScaleDirection.Vertically, ScaleAnchor.Bottom, false)
    bone42.setPosition(142, 81)
    bone42.setVelocity(-50, 0)
    bone42.setFlag(SpriteFlag.DestroyOnWall, true)
}
function bone8 () {
    bone82 = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
    scaling.scaleByPixels(bone82, 10, ScaleDirection.Vertically, ScaleAnchor.Bottom, false)
    bone82.setPosition(142, 81)
    bone82.setVelocity(-50, 0)
    bone82.setFlag(SpriteFlag.DestroyOnWall, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    damage += -1
})
let bone82: Sprite = null
let bone42: Sprite = null
let bone52: Sprite = null
let bone32: Sprite = null
let bone22: Sprite = null
let attacknumber = 0
let bone72: Sprite = null
let bone: Sprite = null
let guitext = ""
let selectedbutton = 0
let gui_message_number = 0
let bone62: Sprite = null
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
let sans: Sprite = null
let selectmode = 0
let bone_end: Sprite = null
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
    gui.sayText(guitext)
})
forever(function () {
    if (inbattle == 1) {
        controller.moveSprite(mySprite)
    }
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
                sansturn()
            }
        }
    }
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
