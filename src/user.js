/**
 * Example user object
 */
class User {
    constructor() {
        this.id = '1';
        this.name = 'Firstname Surname';
        this.canInstall = true;
        this.canUseRestricted = true;
        this.type = 'local';
    }
}

module.exports = User;