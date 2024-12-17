function getEmailDomain(email) {
    // Validate input
    if (!email || typeof email !== 'string') return '';

    // Split email by @ and return last part
    const parts = email.split('@');
    return parts[parts.length - 1];
}

module.exports = {
    getEmailDomain
};