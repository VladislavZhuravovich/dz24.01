class User {
	constructor(name, surname,admission,year) {
		this.name = name;
		this.surname = surname;
        this.admission = admission;
        this.year = year;
	}

	get FullName() {
		return this.name + ' ' + this.surname;
	}

    get Course(){
        return this.year-this.admission;
    }
}

let student = new User ('Влад', 'Журавович',2017,2022);

console.log(student.FullName)
console.log(student.Course)