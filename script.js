class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(value) {
    if (value.isNaN()){
      console.log('Invalid input: numberOfStudents must be set to a number');
    } else {
        this._numberOfStudents = value;
    }
  }
  quickFacts() {
    console.log(`${this.name} School educates ${this.numberOfStudents} students at the ${this.level} school level.`)
  }
  static pickSubstituteTeacher(substituteTeachers) {
    let randSubstituteTeacher = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randSubstituteTeacher];
  }
}

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class Middle extends School {

}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high', numberOfStudents);
    this._sportsTeam = sportsTeams;
  }
  get sportsTeam() {
    console.log(this._sportsTeam);
  }
}

const lorraineHansbury = new Primary ('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts();

const subTeacher = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(subTeacher);

const alSmith = new HighSchool ('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeam);
