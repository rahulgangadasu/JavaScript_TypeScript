class KeyValuePair<K, v> {
  constructor(
    public key: K,
    public value: v,
  ) {}
}

let pair = new KeyValuePair<string, number>("age", 30);
console.log(pair);

console.log(pair.key);
console.log(pair.value);

//generic function
function createKeyValuePair<K, V>(key: K, value: V): KeyValuePair<K, V> {
  return new KeyValuePair(key, value);
}

let pair2 = createKeyValuePair("name", "Alice");
console.log(pair2);

console.log(pair2.key);
console.log(pair2.value);

//generic interface
interface MyInterface<K, V> {
  key: K;
  value: V;
}

let myInterface: MyInterface<string, number> = {
  key: "age",
  value: 30,
};
console.log(myInterface);
console.log(myInterface.key);
console.log(myInterface.value);

//generic constraints
interface MyConstraintInterface<T extends string | number> {
  value: T;
}

let myConstraintInterface: MyConstraintInterface<string> = {
  value: "Alice",
};
console.log(myConstraintInterface);
console.log(myConstraintInterface.value);

//Extending generic classes
class MyGenericClass<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}

class MyExtendedGenericClass<U> extends MyGenericClass<U> {
  constructor(value: U) {
    super(value);
  }
}

let myExtendedGenericClass = new MyExtendedGenericClass<number>(10);
console.log(myExtendedGenericClass);
console.log(myExtendedGenericClass.value);
