import { useRef } from 'react';

export default function Div() {
  const divRef = useRef<HTMLDivElement>(null)

  function handleClick() {
    divRef.current!.style.backgroundColor === "blue"
        ? divRef.current!.style.backgroundColor = "red"
        : divRef.current!.style.backgroundColor = "blue"
  }

  return (
    <>
        <div
            ref={divRef}
            style={
                {
                    backgroundColor: "blue", padding: "10px"
                }
            }
        >
            <h4>Element Test</h4>
        </div>
        <button onClick={handleClick}>
            Change Div Background
        </button>
    </>
  );
}