const Animal = require("./animal");
const AnimalShelter = require("./animalShelter");

describe("AnimalShelter", () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test("Enqueue should add animals to the shelter", () => {
    const dog = new Animal("dog", "Buddy");
    const cat = new Animal("cat", "Whiskers");

    shelter.enqueue(dog);
    shelter.enqueue(cat);

    expect(shelter.dogs.length).toBe(1);
    expect(shelter.cats.length).toBe(1);
  });

  test("Dequeue with dog preference should return the oldest dog", () => {
    const dog1 = new Animal("dog", "Buddy");
    const dog2 = new Animal("dog", "Max");

    shelter.enqueue(dog1);
    shelter.enqueue(dog2);

    const result = shelter.dequeue("dog");

    expect(result).toBe(dog1);
    expect(shelter.dogs.length).toBe(1);
  });

  test("Dequeue with cat preference should return the oldest cat", () => {
    const cat1 = new Animal("cat", "Whiskers");
    const cat2 = new Animal("cat", "Mittens");

    shelter.enqueue(cat1);
    shelter.enqueue(cat2);

    const result = shelter.dequeue("cat");

    expect(result).toBe(cat1);
    expect(shelter.cats.length).toBe(1);
  });

  test("Dequeue with no preference should return the oldest animal", () => {
    const dog = new Animal("dog", "Buddy");
    const cat = new Animal("cat", "Whiskers");

    shelter.enqueue(dog);
    shelter.enqueue(cat);

    const result = shelter.dequeue("unknown");

    expect(result).toBe(dog);
    expect(shelter.dogs.length).toBe(0);
  });

  test("Dequeue when the preferred animal is not available should return null", () => {
    const cat = new Animal("cat", "Whiskers");

    shelter.enqueue(cat);

    const result = shelter.dequeue("dog");

    expect(result).toBeNull();
  });
});
