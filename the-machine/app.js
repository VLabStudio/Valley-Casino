// All of the possible slots
const slots = [{ name: "cherry", symbol: "assets/graphics/symbols/symbol-10.png" }, { name: "bar", symbol: "assets/graphics/symbols/symbol-8.png" }, { name: "7", symbol: "assets/graphics/symbols/symbol-5.png" }, { name: "bar x2", symbol: "assets/graphics/symbols/symbol-7.png" }, { name: "bar x3", symbol: "assets/graphics/symbols/symbol-6.png" }, { name: "plum", symbol: "assets/graphics/symbols/symbol-9.png" }];

let wallet;
$(document).ready(async function () {

    // Make a new wallet
    wallet = new Wallet(localStorage.getItem("money") ? localStorage.getItem("money") : 500);

    // Setup the click event for the spin button
    $("#spin").click(() => spin(15));

});

async function spin(bet) {

    // Return if the player doesn't have enough money
    if (wallet.take(bet))
        return

    // Disabled the spin button
    $("#spin").prop("disabled", true);

    // Set up the spin music
    const spin = new Audio('assets/sounds/rollover5.ogg');
    spin.volume = 0.1;

    // Set up the background music
    const background = new Audio('assets/sounds/1234_Rock_it.wav');
    background.loop = true;
    background.volume = 0.2;
    background.play();

    // Calculate the result
    let results;
    if (Math.random() > 0.80) {
        switch (Math.floor((Math.random() * slots.length - 1) + 1)) {
            case 1:
                results = [slots[1], slots[1], slots[1]];
                break;
            case 2:
                if (Math.random() > 0.95) {
                    results = [slots[2], slots[2], slots[2]];
                } else {
                    results = [slots[0], slots[0], slots[0]];
                }
                break;
            case 3:
                results = [slots[3], slots[3], slots[3]];
                break;
            case 4:
                results = [slots[4], slots[4], slots[4]];
                break;
            case 5:
                results = [slots[5], slots[5], slots[5]];
                break;

            default:
                results = [slots[0], slots[0], slots[0]];
                break;
        }
    } else {
        results = [slots[Math.floor((Math.random() * slots.length - 1) + 1)], slots[Math.floor((Math.random() * slots.length - 1) + 1)], slots[Math.floor((Math.random() * slots.length - 1) + 1)]];
    }

    const wheels = [$("#wheel1"), $("#wheel2"), $("#wheel3")];
    const spinTime = 60;

    for (let i = 15; i > 0; i--) {
        for (let w = 0; w < wheels.length; w++) {
            if (i !== 1) {
                // Wait for x milliseconds
                await timer(spinTime);

                // Find a new symbol
                let symbol = slots[Math.floor((Math.random() * slots.length - 1) + 1)].symbol;

                // Stop the last ones to be the same as the result  
                if (i === 2) {
                    while (symbol === wheels[w].src || symbol === results[w].symbol)
                        symbol = slots[Math.floor((Math.random() * slots.length - 1) + 1)].symbol;
                } else {
                    while (symbol === wheels[w].src)
                        symbol = slots[Math.floor((Math.random() * slots.length - 1) + 1)].symbol;
                }

                // Play sound effect
                spin.play();

                // Put the symbol on the wheel
                wheels[w].attr("src", symbol);

                // Wait for x milliseconds
                await timer(spinTime);
            } else {
                // Wait for x milliseconds
                await timer(spinTime * 3);

                // Put the symbol on the wheel
                wheels[w].attr("src", results[w].symbol);

                // Play sound effect
                spin.play();

                // Wait for x milliseconds
                await timer(spinTime * 3);
            }
        }
    }

    // Check game state and gift the reward
    if (results[0].name === "cherry" && results[1].name === "cherry" && results[2].name === "cherry") {
        wallet.give(15);
        new Audio('assets/sounds/winner.ogg').play();
    } else if (results[0].name === "plum" && results[1].name === "plum" && results[2].name === "plum") {
        wallet.give(30);
        new Audio('assets/sounds/winner.ogg').play();
    } else if (results[0].name === "bar" && results[1].name === "bar" && results[2].name === "bar") {
        wallet.give(50);
        new Audio('assets/sounds/winner.ogg').play();
    } else if (results[0].name === "bar x2" && results[1].name === "bar x2" && results[2].name === "bar x2") {
        wallet.give(100);
        new Audio('assets/sounds/winner.ogg').play();
    } else if (results[0].name === "bar x3" && results[1].name === "bar x3" && results[2].name === "bar x3") {
        wallet.give(200);
        new Audio('assets/sounds/winner.ogg').play();
    } else if (results[0].name === "7" && results[1].name === "7" && results[2].name === "7") {
        wallet.give(2000);
        new Audio('assets/sounds/winner.ogg').play();
    } else {
        new Audio('assets/sounds/loser.ogg').play();
    }

    // Pause the background music
    background.pause();

    // Enable the spin button
    $("#spin").prop("disabled", false);

}

// Returns a Promise that resolves after "ms" Milliseconds
function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}