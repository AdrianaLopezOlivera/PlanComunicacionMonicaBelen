let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter.typeString("PENDIENTE")
    .pauseFor(3000)
    .deleteAll()
    .pauseFor(700)
    .typeString("En construcción...")
    .pauseFor(3000)
    .deleteAll()
    .start();