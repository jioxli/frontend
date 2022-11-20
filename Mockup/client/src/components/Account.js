const Account = {
    username: "",
    password: "",
    isAdmin: false,

    get getUsername() {
        return this.username
    },

    get getPassword() {
        return this.password
    },

    get getIsAdmin() {
        return this.isAdmin
    },

    set setUsername(value) {
        this.username = value
    },
    set setPassword(value) {
        this.password = value
    },
    set setIsAdmin(value) {
        this.isAdmin = value
    }
}

export default Account