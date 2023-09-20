class Heap {
  constructor() {
    this.heap = [];
  }

  // Add a new element to the heap
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  // Remove and return the smallest element from the heap
  extractMin() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  // Get the minimum element without removing it
  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  // Check if the heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Restore the heap property by moving an element up
  bubbleUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[currentIndex] >= this.heap[parentIndex]) {
        break; // Heap property is satisfied
      }

      // Swap the current element with its parent
      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];
      currentIndex = parentIndex;
    }
  }

  // Restore the heap property by moving an element down
  bubbleDown() {
    let currentIndex = 0;
    const length = this.heap.length;

    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let swapIndex = null;

      if (leftChildIndex < length) {
        if (this.heap[leftChildIndex] < this.heap[currentIndex]) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        if (
          (swapIndex === null &&
            this.heap[rightChildIndex] < this.heap[currentIndex]) ||
          (swapIndex !== null &&
            this.heap[rightChildIndex] < this.heap[leftChildIndex])
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) {
        break; // Heap property is satisfied
      }

      // Swap the current element with the smaller child
      [this.heap[currentIndex], this.heap[swapIndex]] = [
        this.heap[swapIndex],
        this.heap[currentIndex],
      ];
      currentIndex = swapIndex;
    }
  }
  display() {
    console.log("Min Heap:", this.heap);
  }
}

module.exports = Heap;

// // Example usage:

// const minHeap = new Heap();
// Heap.insert(4);
// Heap.insert(2);
// Heap.insert(7);
// Heap.insert(1);
// Heap.insert(9);

// console.log("Min Heap:", Heap.heap);
// Heap.display();

// console.log("Extract Min:", Heap.extractMin());
// console.log("Min Heap after extraction:", Heap.heap);
