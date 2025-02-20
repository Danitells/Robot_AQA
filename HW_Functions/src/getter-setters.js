const user = {
    _firstName: 'Іван',
    _lastName: 'Петров',
    _age: 25,

    address: {
        _city: 'Київ',
        _street: 'Хрещатик',

        get city() {
            return this._city;
        },
        set city(newCity) {
            this._city = newCity;
        },

        get street() {
            return this._street;
        },
        set street(newStreet) {
            this._street = newStreet;
        }
    },

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    },

    set fullName(name) {
        const parts = name.split(' ');
        if (parts.length === 2) {
            [this._firstName, this._lastName] = parts;
        } else {
            console.error('Неправильний формат імені');
        }
    },

    get age() {
        return this._age;
    },

    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.error('Вік має бути позитивним числом');
        }
    },

    getBirthYear() {
        const currentYear = new Date().getFullYear();
        return currentYear - this._age;
    }
};

console.log(user.fullName);
user.fullName = 'Марія Іваненко';
console.log(user.fullName);

console.log(user.age);
user.age = 4;
console.log(user.age);

console.log(user.address.city);
user.address.city = 'Львів';
console.log(user.address.city);

console.log('Рік народження:', user.getBirthYear()); // Виведе, наприклад, 1995 (залежно від поточного року)
