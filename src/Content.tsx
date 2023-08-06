import {
  useLayoutEffect,
  useInsertionEffect,
  useState,
  useEffect,
} from "react";

// useEffect
// 1. Update state
// 2. Update DOM (mutated)
// 3. Render UI
// 4. Clean up if deps changed
// 5. Call useEffect callback

// useLayoutEffect
// 1. Update state
// 2. Update DOM (mutated)
// 3. Clean up if deps changed (sync)
// 4. Clean up if deps changed (sync)
// 5. Render UI

const Content = () => {
  const [count, setCount] = useState(0);
  console.log("🚀 ~ file: Content.tsx:24 ~ Content ~ count:", count);

  useEffect(() => {
    console.log("useEffect is called");
    // if (count > 3) setCount(0);
  }, [count]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect is called");
    // if (count > 3) setCount(0);
  }, [count]);

  useInsertionEffect(() => {
    console.log("useInsertionEffect is called");
  }, [count]);

  const handlePressButton = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handlePressButton}>Count</button>
    </>
  );
};

export default Content;
