# React Data Fetching and State Update Issue

This repository demonstrates a common error in React applications involving data fetching and state updates. The `MyComponent` component uses `useEffect` to fetch data from an API and update the component's state. However, there's a subtle issue that causes the component to show a loading state even after the data is fetched.

## Bug Description

The bug is in the handling of the component's state and the use of useEffect. The loading state is not properly cleared after the data is successfully fetched, resulting in a persistent loading indicator.