class Queue {
  constructor() {
    this.items = [];
  }

  // Add an item to the end of the queue
  enqueue(item) {
    this.items.push(item);
  }

  // Remove and return the item at the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  // Return the item at the front of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the number of items in the queue
  size() {
    return this.items.length;
  }

  // Display the elements of the queue
  display() {
    console.log("Queue:", this.items);
  }
}

module.exports = Queue;

// Example usage:

// const queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);

// queue.display(); // Queue: [1, 2, 3]

// console.log("Dequeue:", queue.dequeue()); // Dequeue: 1

// queue.display(); // Queue: [2, 3]

// console.log("Peek:", queue.peek()); // Peek: 2

// console.log("Is Empty:", queue.isEmpty()); // Is Empty: false

// console.log("Queue Size:", queue.size()); // Queue Size: 2
