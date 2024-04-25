export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // the get method for the name attribute
  get name() { return this._name; }

  // the get method for the length attribute
  get length() { return this._length; }

  // the get method for the students attribute
  get students() { return this._students; }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    // set method for the name attribute after type checking
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    // set method for the length attribute
    this._length = length;
  }

  set students(students) {
    if (!students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    // set method for the students attribute
    this._students = students;
  }
}
