export class FIFOQueue {
    constructor(maxSize) {
      this.queue = [];
      this.maxSize = maxSize;
    }
  
    // 入队操作
    enqueue(item) {
      if (this.queue.length < this.maxSize) {
        this.queue.push(item);
      } else {
        // 如果队列已满，移除最早的元素（队列头部），然后添加新元素
        this.queue.shift(); // 移除队列头部的元素
        this.queue.push(item); // 将新元素添加到队列尾部
      }
    }
  
    // 出队操作
    dequeue() {
      return this.queue.shift(); // 移除并返回队列头部的元素
    }
  
    // 查看队列头部的元素
    peek() {
      return this.queue[0];
    }
  
    // 获取队列的当前长度
    size() {
      return this.queue.length;
    }
  
    // 检查队列是否为空
    isEmpty() {
      return this.queue.length === 0;
    }
}