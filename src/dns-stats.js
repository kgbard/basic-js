function getDNSStats(domains) {
    // Object to store DNS stats
    const stats = {};

    // Process each domain
    domains.forEach(domain => {
        // Split domain into parts and reverse
        const parts = domain.split('.').reverse();

        // Build DNS stats
        for (let i = 0; i < parts.length; i++) {
            // Construct DNS key
            const key = '.' + parts.slice(0, i + 1).join('.');

            // Increment count for each key
            stats[key] = (stats[key] || 0) + 1;
        }
    });

    return stats;
}

module.exports = {
    getDNSStats
};