interface IStack<T> {
  push(item: T): void;
  pop(): T | void;
  peek(): T | undefined;
  size(): number;
}

class Stack<T> implements IStack<T> {
  private storage: T[] = [];

  constructor(private capacity = 4) {}
  // constructor : const stack = new Stack<string>(); 을 했을때 실행됨

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("stack is full");
    }

    this.storage.push(item);
  }

  pop(): T | void {
    // this.storage.pop() === undefined
    if (this.size() === 0) {
      throw Error("stack is empty");
    }
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
numberStack.push(100);

const stringStack = new Stack<string>();
stringStack.pop();
// stringStack.push("hello");
// stringStack.push("world");
// stringStack.push("!");
// stringStack.push("!");

// console.log(numberStack.peek()); // 100
// console.log(numberStack.size()); // 4

// console.log(stringStack.peek()); // "!"
// console.log(stringStack.size()); // 4

// numberStack.push(101); // ❌ Error: stack is full

//Queue
