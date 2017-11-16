const uuidv4 = require('uuid/v4');

/**
 * Generate a 16 character hash
 */
module.exports = {
    generateId() {
        return uuidv4();
    }
}