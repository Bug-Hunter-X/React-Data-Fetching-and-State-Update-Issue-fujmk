```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}

export default MyComponent;
```