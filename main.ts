let icon_background = assets.image`icon_background`
let rope_end = img`
    . e b b e e . 
    . e b e b e . 
    . e e b b e . 
    . e b b b e . 
    . e e e b e . 
    e b e b e e . 
    . b e b e e . 
    . e b b e b e 
    `
let rope_hook = img`
    e e e e e . . . e e e e e 
    e b b e e . . . e b b e e 
    . e e e . . . . . e e e . 
    . e b e . . . . . e b e . 
    . e b e . e e e . e b e . 
    . e b e e b b b e e b e . 
    . e b b e b e e e b b e . 
    . . e b e e b b e b e . . 
    . . . e e b b b e e . . . 
    `
let cat_walk1 = img`
    ......................e....
    ..................e..ebe...
    .................ebeebbbe..
    ................ebbbebbbe..
    ................ebbbbbbbbe.
    ......eeee.....eebbbbbbebe.
    .....ebbbbeeeeebbbbbbebbbbe
    .....bbbbbbbbbbbbbbbbbbbebe
    ...ebbbbbbbbbbbbbbbbbbbeebe
    ...ebbbbbbbbbbbbbbbbbebbbe.
    ...ebbbbbbbbbbbbbbbebbeee..
    ..ebebbbbbbbbbbbbbbeee.....
    .ebbebbbbbbebbbbbbebe......
    ebbbbebbbbebbebbbebbbe.....
    ebbbeebbbbbeebbbebbbbee....
    ebbbbeeebbbbebbbeeebbbbe...
    .ebbbe..eebbebbe...ebbbe...
    ..eee.....ee.ee.....eee....
    `
let cat_walk2 = img`
    ......................e....
    ..................e..ebe...
    .................ebeebbbe..
    ................ebbbebbbe..
    ................ebbbbbbbbe.
    ......eeee.....eebbbbbbebe.
    .....ebbbbeeeeebbbbbbebbbbe
    .....bbbbbbbbbbbbbbbbbbbebe
    ...ebbbbbbbbbbbbbbbbbbbeebe
    ...ebbbbbbbbbbbbbbbbbebbbe.
    ...ebbbbbbbbbbbbbbbebbeee..
    ...ebbbbbbbbbbbbbbbbee.....
    ..ebebbbbbbbbbbbbbbbe......
    .ebebbbbbbebbbbebbbbbe.....
    .ebebbbbbebbbbeeebbbbbe....
    ebbbebbbeeeeeeebbeeebbe....
    ebbeebbbbe....ebbbbeee.....
    .ee..ebbbe.....ebbbe.......
    ......eee.......eee........
    `
let cat_walk3 = img`
    ......................e....
    ..................e..ebe...
    .................ebeebbbe..
    ................ebbbebbbe..
    ................ebbbbbbbbe.
    ......eeee.....eebbbbbbebe.
    .....ebbbbeeeeebbbbbbebbbbe
    .....bbbbbbbbbbbbbbbbbbbebe
    ...ebbbbbbbbbbbbbbbbbbbeebe
    ...ebbbbbbbbbbbbbbbbbebbbe.
    ...ebbbbbbbbbbbbbbbebbeee..
    ..ebbbbbbbbbbbbbbbbeee.....
    .ebbbbbbbbbbbbbbbbbbe......
    ebbbbbbeeebbbbeebbbbbe.....
    ebbbeeebbbeeeebbebbbbee....
    ebbbbe.ebbbbebbbeeebbbbe...
    .ebbbe..eebbebbe...ebbbe...
    ..eee.....ee.ee.....eee....
    `
let cat_walk4 = img`
    ......................e....
    ..................e..ebe...
    .................ebeebbbe..
    ................ebbbebbbe..
    ................ebbbbbbbbe.
    ......eeee.....eebbbbbbebe.
    .....ebbbbeeeeebbbbbbebbbbe
    .....bbbbbbbbbbbbbbbbbbbebe
    ...ebbbbbbbbbbbbbbbbbbbeebe
    ...ebbbbbbbbbbbbbbbbbebbbe.
    ...ebbbbbbbbbbbbbbbebbeee..
    ...ebbbbbbbbbbbbbbbeee.....
    ..ebbbbbbbbbbbbbbbebe......
    .ebbbbbbbebbbebbbebbbe.....
    .ebbbbbeebbbebbbbebbbbe....
    ebbbeeebeeee.ebbbbeebbe....
    ebbeebbbbe....ebbbbeee.....
    .ee..ebbbe.....ebbbe.......
    ......eee.......eee........
    `
let cat_transform1 = img`
    .ee.................e....
    ebbe.............e.ebe...
    ebbbe...........ebebbbe..
    .ebbbeeee.....eebbbbbbbe.
    .ebbbbbbbeeeeebbbbbbbebe.
    ..ebbbbbbbbbbbbbbbbebbbbe
    ..ebbbbbbbbbbbbbbbbbbbbbe
    ...ebbbbbbbbbbbbbbbbbebbe
    ....ebbbbbbbbbbbbbbbbbbe.
    ....ebbbbbbbbbbbbbbbbbe..
    ....ebbbbbbbbbbbbbbbee...
    ...ebbbbbbbbbbbbbbbe.....
    ..ebbbbbbbbbbbbbbbbbe....
    ..ebbbbbebbbbbbbbebbe....
    .ebbbbeebebbbebbbebbbe...
    .ebbbebbbbeeebbbbbebbe...
    ..eee.ebbbe..ebbbbeee....
    .......eee....eeee.......
    `
let cat_transform2 = img`
    ...............e.ee...
    ..e...........ebebbe..
    .ebeeee.....eebbbbbbe.
    ebbbbbbeeeeebbbbbbbbbe
    ebbbbbbbbbbbbbbbbbebbe
    .ebbbbbbbbbbbbbbebbbbe
    ..ebbbbbbbbbbbbbbbbbbe
    ...ebbbbbbbbbbbbbbbbe.
    ...ebbbbbbbbbbbbbbbe..
    ...ebbbbbbbbbbbbbbbe..
    ...ebbbbbbbbbbbbbbbe..
    ..ebbbbbbbbbbbbbbbe...
    ..ebbbbbbbbbbbbebbe...
    ..ebbebbbbbbbbbebbe...
    ..ebbbbbebbbbbbbee....
    ...eebbbbeeebbbbe.....
    .....eeee...eeee......
    `
let cat_tail1 = img`
    . . . e e . . 
    . . e b b e . 
    . e b b e . . 
    e b b b e . . 
    e b b b b e . 
    e b b b b e . 
    e b b b b e . 
    . e b b b b e 
    . e b b b b e 
    . . e e b b b 
    . . . . e . . 
    `
let cat_tail2 = img`
    . . e . . . . . 
    . e b e . . . . 
    e b b e . . . . 
    e b b b e . . . 
    e b b b b e . . 
    e b b b b b e . 
    . e b b b b e . 
    . e b b b b b e 
    . . e b b b b e 
    . . . e e b b b 
    . . . . . e . . 
    `
let cat_tail3 = img`
    . . e . . . . . . . 
    . e b e . . . . . . 
    e b b e . . . . . . 
    e b b b e e . . . . 
    e b b b b b e e . . 
    . e b b b b b b e . 
    . . e b b b b b b e 
    . . . e e b b b b b 
    . . . . . e e e . . 
    `
let cat_tail4 = img`
    . e . . . . . . . . . . 
    e b e e . . . . . . . . 
    e b b b e e e e e . . . 
    e b b b b b b b b e e . 
    . e b b b b b b b b b e 
    . . e e b b b b b b b b 
    . . . . e e e e e e . . 
    `
let cat_tail5 = img`
    . . e e e e e . . . . . 
    . e b b b b b e e . . . 
    e b b b b b b b b e e . 
    . e e e b b b b b b b e 
    . . . . e e b b b b b b 
    . . . . . . e e e e . . 
    `
let cat_tail6 = img`
    . . e e e . . . . . . 
    . e b b b e e . . . . 
    e b b b b b b e . . . 
    . e e b b b b b e . . 
    . . . e b b b b b e . 
    . . . . e b b b b b e 
    . . . . . e e b b b b 
    . . . . . . . e e . . 
    `
let cat_tail7 = img`
    . . e e e . . . . 
    . e b b b e . . . 
    e b b b b b e . . 
    . e e b b b b e . 
    . . . e b b b e . 
    . . . e b b b b e 
    . . . e b b b b e 
    . . . . e b b b b 
    . . . . . e e . . 
    `
let cat_tail8 = img`
    . e e e . . . 
    e b b b e . . 
    . e b b b e . 
    . e b b b e . 
    . e b b b e . 
    . e b b b e . 
    . e b b b e . 
    . . e b b b e 
    . . e b b b e 
    . . . e b b b 
    . . . . e . . 
    `
let cat_jump = img`
    .......................e....
    ...................e..ebe...
    ..................ebeebbbe..
    .................ebbbebbbe..
    .................ebbbbbbbbe.
    .......eeee.....eebbbbbbebe.
    ......ebbbbeeeeebbbbbbebbbbe
    ......bbbbbbbbbbbbbbbbbbbebe
    ....ebbbbbbbbbbbbbbbbbbbeebe
    ....ebbbbbbbbbbbbbbbbbebbbe.
    ....ebbbbbbbbbbbbbbbebbeee..
    ....ebbbbbbbbbbbbbbbeeee....
    ..eebbbbbbbbbbbbbbbbbebbee..
    .ebbbbbbbbebbbbbebbbbbeebbe.
    ebbbbbbeeebbbbbe.eebbbbbebe.
    ebbeeeebbeeeeee....eebbbee..
    .eeebbbee............eee....
    ....eee.....................
    `
let cat1 = img`
    ....................e....
    ................e..ebe...
    ...............ebeebbbe..
    ..............ebbbebbbe..
    ..............ebbbbbbbbe.
    ....eeee.....eebbbbbbebe.
    ...ebbbbeeeeebbbbbbebbbbe
    ...bbbbbbbbbbbbbbbbbbbebe
    .ebbbbbbbbbbbbbbbbbbbeebe
    .ebbbbbbbbbbbbbbbbbebbbe.
    .ebbbbbbbbbbbbbbbebbeee..
    .ebbbbbbbbbbbbbbbbee.....
    ebbbbbbbbbbbbbbbbbe......
    ebbbbbbebbbebbbbebe......
    ebbbbbeebbbbebbbebe......
    .ebbbebbeeeeebbbebbe.....
    .ebbbbebbe..ebbbbebe.....
    ..ebbbeee....ebbbee......
    ...eee........eee........
    `
let circle = img`
    . . . . . e e e e e e . . . . . 
    . . . e e b b b b b b e e . . . 
    . . e b b b b b b b b b b e . . 
    . e b b b b b b b b b b b b e . 
    . e b b b b b b b b b b b b e . 
    e b b b b b b b b b b b b b b e 
    e b b b b b b b b b b b b b b e 
    e b b b b b b b b b b b b b b e 
    e b b b b b b b b b b b b b b e 
    e b b b b b b b b b b b b b b e 
    . e b b b b b b b b b b b b e . 
    . e b b b b b b b b b b b b e . 
    . . e b b b b b b b b b b e . . 
    . . . e e b b b b b b e e . . . 
    . . . . . e e e e e e . . . . . 
    `
let menu_item_completion_spell = img`
    b e b e e e b e b 
    e b e e b e e b e 
    b e e b b b e e b 
    e e b b b b b e e 
    e b b b b b b b e 
    e e b b b b b e e 
    b e e b b b e e b 
    e b e e b e e b e 
    b e b e e e b e b 
    `
let sparkles1 = img`
    . . e . . . . . . . e . . 
    . e b e . . . . . e b e . 
    e b b b e . e . e b b b e 
    . e b e . e b e . e b e . 
    . . e . e b b b e . e . . 
    . . . e b b b b b e . . . 
    . . e b b b b b b b e . . 
    . . . e b b b b b e . . . 
    . . . . e b b b e . . . . 
    . . . . . e b e . . . . . 
    . . . . . . e . . . . . . 
    `
let sparkles2 = img`
    . . . . . e . . . . . . . 
    . . . . e b e . . . . . . 
    . . . . . e . . . e . . . 
    . . . . . . . . e b e . . 
    . e . . . . . e b b b e . 
    e b e . . . e b b b b b e 
    . e . . . e . e b b b e . 
    . . . . e b e . e b e . . 
    . . . e b b b e . e . . . 
    . . e b b b b b e . . . . 
    . . . e b b b e . . . . . 
    . . . . e b e . . . . . . 
    . . . . . e . . . . . . . 
    `
let sparkles3 = img`
    . . e . . . . . . . . 
    . e b e . . . . . . . 
    e b b b e . e . . . . 
    . e b e . e b e . . . 
    . . e . e b b b e . . 
    . . . e b b b b b e . 
    . . e b b b b b b b e 
    . . . e b b b b b e . 
    . . e . e b b b e . . 
    . e b e . e b e . . . 
    e b b b e . e . . . . 
    . e b e . . . . . . . 
    . . e . . . . . . . . 
    `
let sparkles4 = img`
    . . . . . e . . . . . . . 
    . . . . e b e . . . . . . 
    . . . e b b b e . . . . . 
    . . e b b b b b e . . . . 
    . . . e b b b e . e . . . 
    . . . . e b e . e b e . . 
    . e . . . e . e b b b e . 
    e b e . . . e b b b b b e 
    . e . . . . . e b b b e . 
    . . . . . . . . e b e . . 
    . . . . . e . . . e . . . 
    . . . . e b e . . . . . . 
    . . . . . e . . . . . . . 
    `
let sparkles5 = img`
    . . . . . . e . . . . . . 
    . . . . . e b e . . . . . 
    . . . . e b b b e . . . . 
    . . . e b b b b b e . . . 
    . . e b b b b b b b e . . 
    . . . e b b b b b e . . . 
    . . e . e b b b e . e . . 
    . e b e . e b e . e b e . 
    e b b b e . e . e b b b e 
    . e b e . . . . . e b e . 
    . . e . . . . . . . e . . 
    `
let diamond1 = img`
    . e . 
    e b e 
    . e . 
    `
let diamond2 = img`
    . . e . . 
    . e b e . 
    e b b b e 
    . e b e . 
    . . e . . 
    `
let diamond3 = img`
    . . e . . . 
    . e b e . . 
    e b b b e . 
    . b b b b e 
    . b b b e . 
    . e b e . . 
    . . e . . . 
    `
let diamond4 = img`
    . . e . . . . 
    . e b e . . . 
    e b b b e . . 
    b b b b b e . 
    . b b b b b e 
    . b b b b e . 
    e b b b e . . 
    . e b e . . . 
    . . e . . . . 
    `
let diamond5 = img`
    . . . e . . . . . 
    . . e b e . . . . 
    . e b b b e . . . 
    e b b b b b e . . 
    . b b b b b b e . 
    . . b b b b b b e 
    . . b b b b b e . 
    . b b b b b e . . 
    . e b b b e . . . 
    . . e b e . . . . 
    . . . e . . . . . 
    `
let corner_top_left = img`
    . . . . e e e e 
    . . e e b b b b 
    . e b b b b e b 
    . e b b b b b b 
    e b b b e b b b 
    e b e b b b b b 
    e b b b e e e e 
    e b e e b b b b 
    e e b b b e b b 
    e e b b b b b b 
    e b b e b b b b 
    e b b b b b e e 
    e b e b b e . . 
    e b b b b e . . 
    `
let corner_bottom_left = img`
    e b b b b e . . 
    e b e b b e . . 
    e b b b b b e e 
    e b b e b b b b 
    b e b b b e b b 
    b e b b b b b b 
    b b e e b b b b 
    b b b b e e e e 
    `
let corner_bottom_right = img`
    b b b b b e 
    b b b e b e 
    b e b b e . 
    b b b b e . 
    b b e e . . 
    e e . . . . 
    `
let corner_top_right = img`
    e e . . . . 
    b b e e . . 
    b b b b e . 
    b e b b e . 
    b b b e b e 
    b b b b b e 
    `
let wizard1 = img`
    .......eeee........
    .....eebbbbee......
    ....ebbebebbbee....
    ...ebebbbbbebbbe...
    ..ebbbbebebbbebbe..
    ..ebeeebbbbebbbbbe.
    ...e...ebebbbeeeee.
    .......ebbbeebeebe.
    .......ebeeeeeebe..
    .......ebebeebbbbe.
    ........eebbbbbebe.
    .......ebbebbbbbbe.
    ......ebbbebbebbbe.
    .....ebbbbbeeebebe.
    .....ebbbbbbbbeebe.
    ....ebbbbbebbbbbe..
    ....ebbbbbebbbbeee.
    ....ebbbbbbeebbbebe
    ....ebbbbbbebebeebe
    ....eebbbbebbebbee.
    ....ebebbbeeebbbe..
    ....ebbebbebbbbbe..
    ...ebebbeebbbbbbe..
    ...ebbbbbbbbbbbee..
    .eebebbbbeeeeebbe..
    ebbbbbbbeebbbbebbe.
    .eeeeeee..eeee.ee..
    `
let wizard2 = img`
    .......eeee.......
    .....eebbbbee.....
    ....ebbebebbbee...
    ...ebebbbbbebbbe..
    ..ebbbbebebbbebbe.
    ..ebeeebbbbebbbbbe
    ...e...ebebbbeeeee
    .......ebbbeebeebe
    .......ebeeeeeebe.
    .......ebebeebbbbe
    ........eebbbbbebe
    .......ebbebbbbbbe
    ......ebbbebbebbbe
    .....ebbbbbeeebebe
    .....ebbbbbbbbeebe
    ....ebbbbbebbbbbe.
    ....ebbbbbbeebbee.
    ....ebbbbbbbbeebe.
    ....eebbbbbbbebee.
    ....ebebbbbbebbee.
    ....ebbebbbbeeebe.
    ...ebbbbeebbebbbe.
    ...ebebbbbeebbbbe.
    ..ebebbbbbbbbbbbe.
    ..ebbbeeeebbbbbbe.
    .ebbbebbbeebbbbee.
    ebbbeeebbbeebbbbbe
    .eee...eee..eeeee.
    `
let wizard3 = img`
    .......eeee........
    .....eebbbbee......
    ....ebbebebbbee....
    ...ebebbbbbebbbe...
    ..ebbbbebebbbebbe..
    ..ebeeebbbbebbbbbe.
    ...e...ebebbbeeeee.
    .......ebbbeebeebe.
    .......ebeeeeeebe..
    .......ebebeebbbbe.
    ........eebbbbbebe.
    .......ebbebbbbbbe.
    ......ebbbebbebbbe.
    .....ebbbbbeeebebe.
    .....ebbbbbbbbeebe.
    ....ebbbbbebbbbbe..
    ....ebbbbbebbbbeee.
    ....ebbbbbbeebbbebe
    ....ebbbbbbebebeebe
    ....eebbbbebbebbee.
    ....ebebbbeeebbbe..
    ....ebbebbebbbbbe..
    ...ebebbeebbbbbbe..
    ...ebbbbbbbbbbbbe..
    .eebebbbbbbbbbbee..
    ebbbbbbbbbbbbbbbbe.
    .eeeeeeeeeeeeeeee..
    `
let wizard4 = img`
    .......eeee.........
    .....eebbbbee.......
    ....ebbebebbbee.....
    ...ebebbbbbebbbe....
    ..ebbbbebebbbebbe...
    ..ebeeebbbbebbbbbe..
    ...e...ebebbbeeeee..
    .......ebbbeebeebe..
    .......ebeeeeeebe...
    .......ebebeebbbbe..
    ........eebbbbbebe..
    .......ebbebbbbbbe..
    ......ebbbebbebbbe..
    .....ebbbbbeeebebe..
    .....ebbbbbbbbeebe..
    ....ebbbbbbbbbbbe...
    ...ebbbbebbbbbbeeee.
    ..ebbbbbbeebbbbbeebe
    ..ebbbbbbebebbbeebbe
    ...ebbbbebbebbbbeee.
    ...eebbbeeebbbbbe...
    ...ebebbebbbbbbebe..
    ...ebbeebbbbbbbbbe..
    ..ebebbbbbbbbbbbee..
    ..ebbbbbbbbbbbeeebe.
    .ebebbbbbbbbbeebbbe.
    ebbbbbbbbbbbeebbbe..
    .eeeeeeeeeee..eee...
    `
let wizard5 = img`
    ......eeee........
    ....eebbbbee......
    ...ebbebebbbee....
    ..ebebbbbbebbbe...
    .ebbbbebebbbebbe..
    .ebeeebbbbebbbbbe.
    ..e...ebebbbeeeee.
    ......ebbbeebeebe.
    ......ebeeeeeebe..
    ......ebebeebbbbe.
    .......eebbbbbebe.
    ......ebbebbbbbbe.
    .....ebbbebbebbbe.
    ....ebbbbbeeebebe.
    ....ebbbbeebbeebe.
    ...ebbbbbbbeebbebe
    ...ebbbbbbbebeeebe
    ...ebbbbbbebbebee.
    ...eebbbbbeeebee..
    ...ebeebbbebbbbe..
    .eebbbbeeebbbbbee.
    ebbebbbbbbbbbbeebe
    .ebbbbbbbbbbbbbbbe
    ..eeebbbbbbbbbbbe.
    ..ebbeebbbbbbeeebe
    ..ebbbeeeeeeeebbbe
    ...ebbbe....ebbbe.
    ....eee......eee..
    `
let wizard_using_object = img`
    .......eeee........
    .....eebbbbee......
    ....ebbebebbbee....
    ...ebebbbbbebbbe...
    ..ebbbbebebbbebbe..
    ..ebeeebbbbebbbbbe.
    ...e...ebebbbeeeee.
    .......ebbbeebeebe.
    .......ebeeeeeebe..
    .......ebebeebbbbe.
    ........eebbbbbebe.
    .......ebbebbbbbbe.
    ......ebbbebbebbbe.
    .....ebbbbbeeebebe.
    .....ebbbbbbbbeebe.
    ....ebbbbbbeebbbee.
    ....ebbbbbbbbeeeebe
    ....ebbbbbbbbebeebe
    ....eebbbbbbebbeee.
    ....ebeebbbbeeebe..
    ....ebbbeebbebbbe..
    ...ebbbbbbeebbbbe..
    ...ebbbbbbbbbbbbe..
    ..ebebbbbbbbbbbbe..
    ..ebbbbbbbbbbbbbe..
    .ebebbbbbbbbbbbee..
    ebbbbbbbbbbbbbbbbe.
    .eeeeeeeeeeeeeeee..
    `
let wizard7 = img`
    .......eeee........
    .....eebbbbee......
    ....ebbebebbbee....
    ...ebebbbbbebbbe...
    ..ebbbbebebbbebbe..
    ..ebeeebbbbebbbbbe.
    ...e...ebebbbeeeee.
    .......ebbbeebeebe.
    .......ebeeeeeebe..
    .......ebebeebbbbe.
    ........eebbbbbebe.
    .......ebbebbbbbbe.
    ......ebbbebbebbbe.
    .....ebbbbbeeebebe.
    .....ebbbbbbbbeebe.
    ....ebbbbbebbbbbe..
    ....ebbbbbebbbbeee.
    ....ebbbbbbeebbbebe
    ....ebbbbbbebebeebe
    ....eebbbbebbebbee.
    ....ebebbbeeebbbe..
    ...ebbbebbebbbbbe..
    ...ebbbbeebbbbbbe..
    ..ebebbbbbbbbbbbe..
    ..ebbbbbbbbbbbbbe..
    .ebebbbbbbbbbbbee..
    ebbbbbbbbbbbbbbbbe.
    .eeeeeeeeeeeeeeee..
    `
let wizard_hand = img`
    . . e . 
    . e b e 
    e b b e 
    . e e . 
    `
let wizard_transform1 = img`
    ......eeeee......
    ....eebbbbbee....
    ...ebbbbbebbbe...
    ..ebbebebbbebbe..
    ...eebbbbebbbbbe.
    .....ebebbbeeeee.
    .....ebbbbebeebe.
    .....ebbeeeebbe..
    .....ebbbebbbbbe.
    .....eebbbbbbebe.
    ....ebbbbbbbbbbe.
    ...ebbbbbebbbbbe.
    ..ebbbbbbbeeebbe.
    ..ebbbbbebbbbee..
    ..ebbbbbeebbbbbe.
    ..eebbbebbebbbbe.
    .ebbeeeebbebbbbe.
    .ebbbbbbeebbbbbe.
    ebbbbbbbbbbbbbbbe
    ebeebbbbbbbbbbbbe
    .ebbebbbbbbbbeee.
    .ebbbebbbbbbebbbe
    ..ebbbeeeeeebbbe.
    ...eee......eee..
    `
let wizard_transform2 = img`
    ......eeee......
    ....eebbbbee....
    ...ebbbbbbbbe...
    ..ebbbbebbebbe..
    ...ebbbbbbbbbbe.
    ....ebebbbbbbbe.
    ....ebbbbebeebe.
    ...ebbbbeeebbee.
    ..ebbbbbbbbbbbe.
    .ebbbbbbbbbbbbbe
    .ebbbbbbbbbbbbbe
    ebbbbbebbbeebbe.
    ebbbbbbebbbbeebe
    ebbbebbebbbbbbbe
    .ebbbeebbbbbbbbe
    ..ebbbbbbbbbbbe.
    .ebbbbbbbbbbbbbe
    .ebbbbbbbbbbbbbe
    ..ebbbbeeebbbbe.
    ...eeee...eeee..
    `
let brazier = img`
    . . . . . e e . . . . . . . 
    . . . . e b b e e e . . . . 
    . . . . e b b b b b e e b e 
    . . . . . e e b b b b b e . 
    e e e e e e b e e b b e . . 
    e . . . e b b b e e e . . . 
    e e e e b b b e . . . . . . 
    . . e b b b e . . . . . . . 
    . e b b b e . . . . . . . . 
    . e b b e . . . . . . . . . 
    . . e e . . . . . . . . . . 
    `
let ball = img`
    . . e e e e . . 
    . e b b b e e . 
    e b b b b b e e 
    e b b b b b e e 
    e b b b b b e e 
    . e b b b e e . 
    . . e e e e . . 
    `
let fire1 = img`
    . . . . . . . . e . . 
    . . . . . e . e b e . 
    . . . . e b e b e . . 
    . . . e e e e b e . . 
    . . e b e e b e b e . 
    . e b b b e b b b e . 
    . e b e b e b b b e . 
    . e e b b b e b b b e 
    e b e b b b b b b b e 
    e b b b b b b b e b e 
    . . . b b b b b e e . 
    . . . . . . b b b e . 
    `
let fire2 = img`
    . . . . . . e . . . . 
    . . . . . e b e . . . 
    . . . e . e b e . . . 
    . . e b e e e b e . . 
    . e b b b e b b e . . 
    . e e e b e e e b e . 
    e b e e e b b e b b e 
    e b b e e b b b b b e 
    e b b b b b b b e b e 
    . e e b b b b b e e . 
    . . . b b b b b b e . 
    . . . . . . b b b e . 
    `
let fire3 = img`
    . . . e . . . . . . . 
    . . e b e . e . . . . 
    . e b b e e b e e . . 
    . . e b e e b e b e . 
    . e b e e b e b b e . 
    . e b e e b e e b e . 
    e b b b e b b e b e . 
    . e e b b b b b e e . 
    . e b b b b b b e b e 
    . . . b b b b b b b e 
    . . . . . . b b b e . 
    `
let fire4 = img`
    . . e e . . e . . . . 
    . e b b e e b e . . . 
    . . e b e e b e e . . 
    . e b e e b e b b e . 
    e b b e b b e e b e . 
    . e b b e b b e e e . 
    . . e b e b b b e b e 
    . e b b b b b b b b e 
    . e b b b b b b b b e 
    . . . b b b b b e b e 
    . . . . . . b b e e . 
    `
let fire5 = img`
    . . . e . . e . . . . 
    . . e b e e b e . . . 
    . . e b e e e e e . . 
    . e b e e b e e b e . 
    e b b e b b e e e . . 
    . e b b e b b e b e . 
    . . e e b b b b b b e 
    . e b b b b b b b b e 
    . e b b b b b b e b e 
    e b b b b b b b e e . 
    . . . b b b b b e . . 
    . . . . . . b b b e . 
    `
let fire6 = img`
    . . . . . e . . . . . 
    . . . e e b e . . . . 
    . . e b e e . . . . . 
    . e b b e b e . e . . 
    . e b e e b e e b e . 
    . . e e b b b e b b e 
    . . e b b b b b b b e 
    . e b b b b b b e b e 
    e b b b b b b e e e . 
    . e e b b b b b e . . 
    . . . b b b b b b e . 
    . . . . . . b b b e . 
    `
let fire7 = img`
    . . . e . . . . . . . 
    . . e b e e . . . . . 
    . . e b e b e . e . . 
    . . . e e e e e b e . 
    . . e e b e b e b b e 
    . e b e b e b e e b e 
    . e b b b b b e b e . 
    e b b b b b e b e . . 
    e b e b b b b b e . . 
    . e b b b b b b b e . 
    . . . b b b b b b e . 
    . . . . . . b b e . . 
    `
let fire8 = img`
    . . . e . . . . . . . 
    . . e b e . . . e . . 
    . . . e . e . e b e . 
    . . . . e b e e b e . 
    . . e . e b b e e . . 
    . e b e e e b b e . . 
    e b b b e b b b e . . 
    e b e b b b b e b e . 
    . e e b b b b b b b e 
    . e b b b b b b b b e 
    . . . b b b b b e b e 
    . . . . . . b b e e . 
    `
let monkey_transform1 = img`
    ..ee......eeeee......
    .ebbe...eebbbbbe.....
    .ebbbe.ebbbbeeeee....
    ..ebbe.ebbbebbbbbe...
    .ebbbeebbbbebebebee..
    .ebbeebbbbbebbbbbbbe.
    .ebbebbbbbbbbbbbbbbbe
    ebbbebbbbbbbbebbbbbbe
    ebbebbbebbbbbbeebbbbe
    ebbbbbebbbbbbbbbbbbe.
    ebbbbbebbbbebbbeeee..
    .ebbbbebbbbbebbbbee..
    .ebbbbbeeebbebbbbebe.
    ..eebbbbbbeebbbbbebe.
    ....ebbbbbbbbbbbebe..
    .....ebbbbbbbbbeee...
    ....ebeebbbbbbebbe...
    ....ebbbeebebbbbbe...
    .....ebbbbeebbbbe....
    ......eeee..eeee.....
    `
let monkey_transform2 = img`
    ........eeeeee.....
    ..ee..eebbbbbbe....
    .ebbeebbbbbeeeee...
    .ebbebbbbbebbbbbe..
    ebbbebbbbbbbebebe..
    ebbebbbbbbbbbbbbbe.
    ebbbbbbbbbbbbbbbbbe
    ebbbbbbbbbbbbbbbbbe
    ebbbbbbbbbbbbbbbbbe
    ebbbbbbbbbbbbbbbbe.
    .ebbbbbbbbebbbbeebe
    .ebbbbbebbebbbbbbbe
    ..ebbbbbeebbbbbbbbe
    ...eebbbbbbbbbbebe.
    ...ebbbbbbbbbbbbe..
    ...ebbbbbbbbbbbbe..
    ....ebbbbeebbbbe...
    .....eeee..eeee....
    `
let monkey_tail1 = img`
    . . . . . . e e . 
    . . . . . e b b e 
    . . . . . e b b e 
    . . . . . e b b e 
    . . . . e b b e . 
    . . . . e b b e . 
    . . . e b b e . . 
    . . e b b b e . . 
    . e b b b e . . . 
    . e b b e . . . . 
    e b b b e . . . . 
    e b b b e . . . . 
    . e b b e . . . . 
    . e b b e . . . . 
    . . e b e . . . . 
    . . . e . . . . . 
    `
let monkey_tail2 = img`
    . . . . . . e e . 
    . . . . . e b b e 
    . . . . e b b b e 
    . . . . e b b e . 
    . . . e b b e . . 
    . . e b b b e . . 
    . . e b b e . . . 
    . e b b b e . . . 
    . e b b e . . . . 
    e b b b e . . . . 
    e b b e . . . . . 
    e b b e . . . . . 
    e b b b e . . . . 
    . e b b e . . . . 
    . . e b e . . . . 
    . . . e . . . . . 
    `
let monkey_tail3 = img`
    . . . . e e . 
    . . . e b b e 
    . . e b b b e 
    . . e b b e . 
    . . e b b e . 
    . e b b e . . 
    . e b b e . . 
    . e b b e . . 
    e b b b e . . 
    e b b e . . . 
    e b b e . . . 
    e b b e . . . 
    e b b b e . . 
    . e b b e . . 
    . . e b e . . 
    . . . e . . . 
    `
let monkey_tail4 = img`
    . . . e e . 
    . . e b b e 
    . e b b b e 
    . e b b e . 
    e b b b e . 
    e b b e . . 
    e b b e . . 
    e b b e . . 
    e b b e . . 
    e b b b e . 
    e b b b e . 
    . e b b e . 
    . e b b b e 
    . . e b b e 
    . . . e b e 
    . . . . e . 
    `
let monkey_tail5 = img`
    . . e e . . . 
    . e b b e . . 
    e b b b e . . 
    e b b e . . . 
    e b b b e . . 
    . e b b e . . 
    . e b b b e . 
    . . e b b e . 
    . . e b b e . 
    . . e b b e . 
    . . e b b b e 
    . . . e b b e 
    . . . e b b e 
    . . . e b b e 
    . . . . e b e 
    . . . . . e . 
    `
let monkey_tail6 = img`
    . e e . . . 
    e b b e . . 
    e b b e . . 
    e b b e . . 
    e b b e . . 
    . e b b e . 
    . e b b e . 
    . e b b b e 
    . . e b b e 
    . . e b b e 
    . . e b b e 
    . . e b b e 
    . . e b b e 
    . . e b b e 
    . . . e b e 
    . . . . e . 
    `
let monkey_tail7 = img`
    . e e . . . 
    e b b e . . 
    e b b b e . 
    . e b b e . 
    . . e b b e 
    . . e b b e 
    . . e b b e 
    . . e b b e 
    . e b b b e 
    . e b b e . 
    . e b b e . 
    . e b b e . 
    . e b b e . 
    . e b b e . 
    . . e b e . 
    . . . e . . 
    `
let monkey_tail8 = img`
    . . . e e . . 
    . . e b b e . 
    . . e b b b e 
    . . . e b b e 
    . . . e b b e 
    . . e b b b e 
    . . e b b e . 
    . e b b b e . 
    . e b b e . . 
    e b b b e . . 
    e b b b e . . 
    e b b e . . . 
    e b b e . . . 
    e b b e . . . 
    . e b e . . . 
    . . e . . . . 
    `
let monkey1 = img`
    .........eeeee......
    .......eebbbbbe.....
    ......ebbbbeeeee....
    ......ebbbebbbbbe...
    .....ebbbbebebebee..
    ....ebbbbbebbbbbbbe.
    ...ebbbbbbbebbbbbbbe
    ..ebbbbbbbbebebbbbbe
    ..ebbbebbbbebbeeebbe
    .ebbbbebbbbbebbbbbe.
    .ebbbebbbbebbeeeee..
    ebbbbebbbbbeebbee...
    ebbbbebbbbbbbebebe..
    ebbbbbeeeeebbbebbe..
    ebbbbbbbbbbebbeebe..
    .ebbbbbbbebbee..e...
    ebebbbbbbbebbe......
    ebbeebebbbebe.......
    .ebbbebbbeee........
    ..eeeebbbbbe........
    ......eeeee.........
    `
let monkey2 = img`
    .........eeeee......
    .......eebbbbbe.....
    ......ebbbbeeeee....
    ......ebbbebbbbbe...
    .....ebbbbebebebee..
    ....ebbbbbebbbbbbbe.
    ...ebbbbbbbebbbbbbbe
    ..ebbbbbbbbebebbbbbe
    ..ebbbbbbbbebbeeebbe
    .ebbbebbbbbbebbbbbe.
    .ebbbebbbbebbeeeee..
    ebbbbebbbbbeeeee....
    ebbbbbebbbbbbbbe....
    ebbbbbbeebbbbbbbe...
    ebbbbbbbbeeeeebbe...
    .ebbbbbbbbbbbbebe...
    ..eebbbbbbbbbe.e....
    ..ebbbbbebbbeee.....
    .ebbbbbebbbeebbe....
    .ebbbeeeeeebbbe.....
    ..ebbbbe.ebbbe......
    ...eeee...eee.......
    `
let monkey3 = img`
    .........eeeee......
    .......eebbbbbe.....
    ......ebbbbeeeee....
    ......ebbbebbbbbe...
    .....ebbbbebebebee..
    ....ebbbbbebbbbbbbe.
    ...ebbbbbbbebbbbbbbe
    ..ebbbbbbbbebebbbbbe
    ..ebbbebbbbebbeeebbe
    .ebbbbebbbbbebbbbbe.
    .ebbbebbbbebbeeeee..
    ebbbbebbbbbeebbee...
    ebbbbebbbbbbbebebe..
    ebbbbbeeeeebbbebbe..
    ebbbbbbbbbbebbeebe..
    .eebbbbbbbbbee..e...
    ebbbbbbbbebbbe......
    ebbbeeeeebbbe.......
    .ebbbebbbeee........
    ..eeeebbbbbe........
    ......eeeee.........
    `
let monkey4 = img`
    .........eeeee......
    .......eebbbbbe.....
    ......ebbbbeeeee....
    ......ebbbebbbbbe...
    .....ebbbbebebebee..
    ....ebbbbbebbbbbbbe.
    ...ebbbbbbbebbbbbbbe
    ..ebbbbbbbbebebbbbbe
    ..ebbbebbbbebbeeebbe
    .ebbeebbbbbbebbbbbe.
    .ebebbbbbeebbeeeee..
    ebbebbbbbbbebbbeee..
    ebbbebbbbbbbebbebbe.
    ebbbbeeeeebbebbebbe.
    ebbbbbbbbbebebe.ebe.
    .ebbbbbbbbbebbe..e..
    ..ebbbbbbbbbbe......
    ..eebbbebbbbeee.....
    .ebbeebbebbbebbe....
    .ebbbeeeeebbbbe.....
    ..ebbbbe.ebbbe......
    ...eeee...eee.......
    `
let monkey5 = img`
    .........eeeee......
    .......eebbbbbe.....
    ......ebbbbeeeee....
    ......ebbbebbbbbe...
    .....ebbbbebebebee..
    ....ebbbbbebbbbbbbe.
    ...ebbbbbbbebbbbbbbe
    ..ebbbbbbbbebebbbbbe
    ..ebbbebbbbebbeeebbe
    .ebbbebbbbbbebbbbbe.
    .ebbebbbbbbbbeeeee..
    ebbbebbbbebbbbbe....
    ebbbebbbbbebbbbee...
    ebbbbeebbbebbbbebe..
    ebbbbbbebbebbbebbe..
    .ebbbbbebebbbbeebe..
    ..ebbbbbebebbe..e...
    ...ebebbbbebe.......
    ....ebbbbebbee......
    ....ebbbeebbbbe.....
    ....ebbbbbeeee......
    .....eeeee..........
    `
let monkey_climb1 = img`
    .........eeeee......
    .......eebbbbbe.....
    ......ebbbbeeeee....
    ......ebbbebbbbbe...
    .....ebbbbebebebee..
    ....ebbbbbebbbbbbbe.
    ...ebbbbbbbebbbbbbbe
    ..ebbbbbbbbebebbbbbe
    ..ebbbbbbbbebbeeebbe
    .ebbbebbbbbbebbbbbe.
    .ebbbebbbbebbeeeee..
    ebbbbebbbbbeeeebebe.
    ebbbbbebbbbbbbbbebe.
    ebbbbbbeebbbbbbeee..
    ebbbbbbbbeebbbeeebe.
    .ebbbbbbbbbeeeebebe.
    ..eebbbbbbbbeebbee..
    ....ebbbbbbbbbbbe...
    .....eeeebbbbbbe....
    .........eeeeee.....
    `
let monkey_climb2 = img`
    ........eeeee.ee...
    ......eebbbbbebbe..
    .....ebbbbeeeeebe..
    .....ebbbebbbbbe...
    ....ebbbbebebebee..
    ...ebbbbbebbbbbbbe.
    ..ebbbbbbbebbbbbbbe
    ..ebbbbbbbebebbbbbe
    .ebbbbbbbbebbeeebbe
    .ebbebbbbbbebbbbbe.
    ebbbebbbbebbeeeee..
    ebbbebbbbbeeeebe...
    ebbbbebbbbbbbbbe...
    ebbbbbeebbbbbbe....
    ebbbbbbbeebbbe.....
    .ebbbbbbbbeee..e...
    ..ebbbbbbbbe..ebe..
    ...eebbbbbbbe.bbe..
    .....eebbbbbbeee...
    .......eebbbbebe...
    .........ebbbbbe...
    ..........ebbbe....
    ...........eee.....
    `
let rope1 = img`
    e b b e e 
    e b e b e 
    e e b b e 
    . e b b e 
    e b b e e 
    e b e b e 
    e e b b e 
    e b b b e 
    `
let rope2 = img`
    e b b e e . 
    e b e b e e 
    e e b e . . 
    e b b b e . 
    e b b e e . 
    e b e b e . 
    e e b b e . 
    e b b b e . 
    `
let rope3 = img`
    . e b b e e 
    . e b e b e 
    . e e b b e 
    . e b b b e 
    . . e b e e 
    e e b e b e 
    . e e b b e 
    . e b b b e 
    `
let rope4 = img`
    e b b e e . 
    e b e b e . 
    e e b b e . 
    e b b e . . 
    e b b e . e 
    e b e b e . 
    e e b b e . 
    e b b b e . 
    `
