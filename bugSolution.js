```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: functional update to ensure the state update uses the latest value
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