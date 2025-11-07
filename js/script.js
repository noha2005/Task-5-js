// 🐾 animals (draggable)
var lion = document.getElementById("lion");
var fish = document.getElementById("fish");
var cow = document.getElementById("cow");

// 🌍 homes (drop zones)
var jungle = document.getElementById("jungle");
var ocean = document.getElementById("ocean");
var farm = document.getElementById("farm");

// 🧩 parent containers
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");

// ✅ dragover events (to allow dropping)
[jungle, ocean, farm].forEach(home => {
    home.addEventListener("dragover", e => e.preventDefault());
});

// ✅ dragstart for animals
lion.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text", "lion");
});
fish.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text", "fish");
});
cow.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text", "cow");
});

// ✅ drop for each home
jungle.addEventListener("drop", e => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const el = document.getElementById(id);
    jungle.appendChild(el);
});

ocean.addEventListener("drop", e => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const el = document.getElementById(id);
    ocean.appendChild(el);
});

farm.addEventListener("drop", e => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const el = document.getElementById(id);
    farm.appendChild(el);
});

// 🔁 double-click to return animal to original position
lion.addEventListener("dblclick", () => {
    a1.appendChild(lion);
});
fish.addEventListener("dblclick", () => {
    a2.appendChild(fish);
});
cow.addEventListener("dblclick", () => {
    a3.appendChild(cow);
});

// 🎮 check result button
var btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const correct =
        jungle.contains(lion) &&
        ocean.contains(fish) &&
        farm.contains(cow);

    if (correct) {
        alert("🎉 Great job! You matched all the animals with their homes correctly 🦁🐟🐄");
        location.reload(); // restart game
    } else {
        alert("❌ Oops! Try again — some animals are in the wrong place.");
    }
});

