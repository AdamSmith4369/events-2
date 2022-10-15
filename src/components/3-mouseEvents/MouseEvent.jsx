import { useState } from "react";

const MouseEvent = () => {
  const [showHint, setShowHint] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [coordX, setCoordX] = useState();
  const [coordY, setCoordY] = useState();

  const handleDoubleClick = (e) => {
    setToggle(!toggle);
    toggle
      ? (e.target.className = "bg-success text-light w-50 p-4 mt-4 mb-4 ")
      : (e.target.className = "bg-danger text-light w-50 p-4 mt-4 mb-4  ");
  };
  const handleMouseMove = (e) => {
    setCoordX(e.nativeEvent.offsetX);
    setCoordY(e.nativeEvent.offsetY);
    // setCoordX(e.pageX);
    // setCoordY(e.pageY);
  };

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>
      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4 mt-4  "
        onMouseEnter={() => setShowHint(true)}
        onMouseOut={() => setShowHint(false)}
      >
        TODO ITEM 1
      </div>
      {showHint && <span className="text-danger fw-bold">Hello React</span>}

      <div
        id="todo-2"
        className="bg-success text-light w-50 p-4 my-4 "
        onDoubleClick={handleDoubleClick}
      >
        TODO ITEM 2
      </div>
      <div
        id="todo-3"
        className="bg-success text-light w-50 p-4 "
        onMouseMove={handleMouseMove}
      >
        TODO ITEM 3
      </div>
      <p> X and Y</p>
      <p className="text-danger fw-bold">
        {coordX} - {coordY}
      </p>
    </div>
  );
};

export default MouseEvent;
