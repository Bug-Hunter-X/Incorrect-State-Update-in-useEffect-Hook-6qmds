```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: trying to update state based on previous state directly inside useEffect
    setCount(prevCount => prevCount + 1);
    console.log('Component rendered');
  }, []); // Empty dependency array means runs only once on mount

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```