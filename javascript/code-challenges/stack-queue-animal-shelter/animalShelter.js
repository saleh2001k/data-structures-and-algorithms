class AnimalShelter {
  constructor() {
    this.dogs = [];
    this.cats = [];
  }

  enqueue(animal) {
    if (animal.species === "dog") {
      this.dogs.push(animal);
    } else if (animal.species === "cat") {
      this.cats.push(animal);
    }
  }

  dequeue(pref) {
    if (pref === "dog") {
      if (this.dogs.length > 0) {
        return this.dogs.shift();
      }
    } else if (pref === "cat") {
      if (this.cats.length > 0) {
        return this.cats.shift();
      }
    } else {
      if (this.dogs.length > 0) {
        return this.dogs.shift();
      } else if (this.cats.length > 0) {
        return this.cats.shift();
      }
    }
    return null;
  }
}

module.exports = AnimalShelter;
