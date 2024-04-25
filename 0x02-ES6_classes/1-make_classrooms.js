export default class ClassRoom {
  constructor(maxStudentsSize) {
    // the contructor accept one attribute named maxStudentsSize (Number)
    // and assigned to _maxStudentsSize
    this._maxStudentsSize = maxStudentsSize;
  }
}

export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
