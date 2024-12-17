const chainMaker = {
    chain: [], // This array will store the links in the chain

    // Returns the number of links in the chain
    getLength() {
        return this.chain.length;
    },

    // Adds a new link with the provided value to the chain
    addLink(value = 'empty') {
        // If no value is provided, we add 'empty' to the chain
        this.chain.push(`( ${value} )`);
        return this; // Returning `this` allows for chaining method calls
    },

    // Removes the link at the specified position (1-indexed)
    removeLink(position) {
        // Check if the position is valid
        if (position < 1 || position > this.chain.length || !Number.isInteger(position)) {
            // Reset the chain if an invalid position is given
            this.chain = [];
            throw new Error("You can't remove incorrect link!");
        }
        // Remove the link at the specified position
        this.chain.splice(position - 1, 1);
        return this; // Returning `this` allows for chaining method calls
    },

    // Reverses the order of links in the chain
    reverseChain() {
        this.chain.reverse();
        return this; // Returning `this` allows for chaining method calls
    },

    // Returns the current chain as a string
    finishChain() {
        const result = this.chain.join('~~');
        this.chain = []; // Reset the chain after finishing
        return result;
    }
};

module.exports = {
    chainMaker
};