class Wallet {

    constructor(value = 0) {
        // Set up the wallet
        this.value = value;
        this.countUp = new CountUp("wallet", value, value);

        this.countUp.options.prefix = "$";
        this.countUp.start();
    }

    give(value) {
        // Add the new money to the current money
        this.value += value;

        // Update the UI
        this.countUp.update(this.value);

        // Update the money value in local storage
        localStorage.setItem("money", this.value);
    }

    take(value) {
        // Check if we have enough money
        if (this.value - value >= 0) {
            // Remove the new money from the current money
            this.value -= value;

            // Update the UI
            this.countUp.update(this.value);

            // Update the money value in local storage
            localStorage.setItem("money", this.value);

            return false;
        }

        return true;
    }

}