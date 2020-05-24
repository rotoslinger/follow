let mySprite = sprites.create(img`
4 4 4 4 4 4 4 4 
4 f f 4 4 f f 4 
4 f f 4 4 f f 4 
4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
let mySprite2 = sprites.create(img`
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
`, SpriteKind.Player)
let mySprite3 = sprites.create(img`
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
`, SpriteKind.Player)
let mySprite4 = sprites.create(img`
5 5 5 5 5 5 
5 5 5 5 5 5 
5 5 5 5 5 5 
5 5 5 5 5 5 
5 5 5 5 5 5 
5 5 5 5 5 5 
`, SpriteKind.Player)
mySprite2.follow(mySprite, 90)
mySprite3.follow(mySprite2, 90)
mySprite4.follow(mySprite3, 90)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
scene.setBackgroundColor(11)
forever(function () {
    if (mySprite.vy == 0 || mySprite.vx == 0) {
    	
    }
})
