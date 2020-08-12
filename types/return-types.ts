// Javascript allows you to create simple objects
// from constructors.  Did you know TypeScript can extract
// the type from your constructor function?

function person(name: string, age: number) {
  // Let's return a simple object
  return { 
    name, 
    age,
    haveBirthday() {
      return person(name, age + 1);
    }
  };
}

//  We can ask TypeScript:  
//  What is the return type for the person function?
type Person = ReturnType<typeof person>;

//  And voila!  We can use that type anywhere in our program.
//  If you change your function, your type is automatically updated.

let bob: Person = person('Bob', 20).haveBirthday();
console.log(`Bob is now ${bob.age}`);