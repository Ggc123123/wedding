new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("GGC && TF")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走过的第五个4.20，第五个结婚纪念日...")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();