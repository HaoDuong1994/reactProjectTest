import { useEffect, useState, useRef } from "react";
function Content() {
  const [count, setCount] = useState(0);
  console.log(count);
  const preCount = useRef(count);
  console.log("precount", preCount.current);
  useEffect(() => {
    console.log("count in useEffect", preCount.current);
  }, [count]);
  return (
    <>
      {console.log("countttttttt")}
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Click
      </button>
    </>
  );
}

export default Content;
