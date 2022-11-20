const ButtonHandlers = {
    currentLogin: 0,
    currentDatabase: 0,

    get getLogin() {
        return this.currentLogin
    },
    get getDatabase() {
        return this.currentDatabase
    },

    set setLogin(value) {
        this.currentLogin = value
    },
    set setDatabase(value) {
        this.currentDatabase = value
    }
}

export default ButtonHandlers