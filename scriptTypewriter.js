let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .typeString("En construcción...")
    .pauseFor(3000)
    .deleteAll()
    .start();