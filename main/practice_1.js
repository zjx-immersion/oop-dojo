export default class TestMe {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    display() {
        return `i am ${this.name}, a ${this.role}`
    }
}