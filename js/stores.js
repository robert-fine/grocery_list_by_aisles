class Store {
  constructor(name, id, location) {
    this.name = name;
    this.id = id;
    this.location = location;
  }
}

class Aisle {
  constructor(name, id, number, description) {
    this.name = name;
    this.id = id;
    this.number = number;
    this.description = description;
  }
}

class Item {
  constructor(name, id, store, storeLocation, aisle) {
    this.name = name;
    this.id = id;
    this.store = store;
    this.storeLocation = storeLocation;
    this.aisle = aisle;
  }
}
