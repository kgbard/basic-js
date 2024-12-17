const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
    if (arguments.length === 0 || typeof sampleActivity !== 'string') {
        return false;
    }

    const activity = parseFloat(sampleActivity);

    if (isNaN(activity) || activity <= 0 || activity >= MODERN_ACTIVITY) {
        return false;
    }

    const DC = Math.LN2 / HALF_LIFE_PERIOD;

    const age = Math.log(MODERN_ACTIVITY / activity) / DC;

    return Math.ceil(age);
}

module.exports = {
    dateSample
};