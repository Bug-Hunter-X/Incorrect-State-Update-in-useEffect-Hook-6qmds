# Incorrect State Update in useEffect Hook

This repository demonstrates a common error in React applications: incorrectly updating state within the `useEffect` hook, leading to unexpected behavior.

## Bug Description
The bug lies in the `MyComponent` component. The `useEffect` hook, designed to perform side effects, attempts to directly update state (`setCount`) based on the previous state.  However, because of the nature of closures and how React batches updates, this doesn't work as expected. The state is not updated, resulting in `count` always remaining 0. 

## Bug Solution
The solution utilizes the functional update form of `setCount`, ensuring that the state is correctly updated based on its previous value. This approach correctly addresses the asynchronous nature of state updates in React.