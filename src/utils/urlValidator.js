/**
 * Validates and sanitizes a frontend URL for safe use in HTML contexts
 * @param {string} url - The URL to validate
 * @param {string} fallbackUrl - The fallback URL to use if validation fails
 * @returns {string} The sanitized URL
 * @throws {Error} If the URL is invalid or not allowed
 */
function validateFrontendUrl(url, fallbackUrl = 'http://localhost:5173') {
    try {
        const parsedUrl = new URL(url ?? fallbackUrl);
        
        // Validate protocol
        if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
            throw new Error('Invalid protocol. Only http and https are allowed.');
        }

        // Validate hostname
        const allowedHostnames = [
            'localhost',
            '127.0.0.1',
            'ittoday.web.id',
        ];
        
        if (!allowedHostnames.includes(parsedUrl.hostname)) {
            throw new Error(`Invalid hostname. Only allowed domains are permitted. ${parsedUrl.hostname} is not allowed`);
        }

        // Remove trailing slash and return sanitized URL
        return parsedUrl.toString().replace(/\/$/, '');
    } catch (error) {
        if (error instanceof TypeError) {
            throw new Error('Invalid URL format');
        }
        throw error;
    }
}

module.exports = {
    validateFrontendUrl
}; 