# JavaScript Event Loop Architecture


## 1. JavaScript Engine
   - **Memory Heap**: Stores objects and data.
   - **Call Stack**: Holds function calls in a Last-In-First-Out (LIFO) order.
     - Functions (`fn`, `fn`, `fn`) are stacked.
     - **Global Context** is at the base of the stack.

## 2. Web API
   - **DOM API**
   - **Set Timeout**: Registers a callback after a specified time.
   - **Set Interval**: Registers a callback to run at specified intervals.
   - **fetch()**: Registers an asynchronous call.
     - Once `fetch()` is called, it:
       - Registers a **callback**.
       - Handles the **Promise** response.

## 3. Event Loop
   - Continuously checks if the **Call Stack** is empty.
   - Adds callbacks from the **Task Queue** or **Microtasks** into the **Call Stack**.

## 4. Task Queue
   - Contains **Callbacks (CB)** to be added to the **Call Stack**.
   - **High Priority** tasks are added first.
