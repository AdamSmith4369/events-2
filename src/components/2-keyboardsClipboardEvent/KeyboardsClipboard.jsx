import { useState } from "react";
const KeyboardsClipboard = () => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert("Lütfen bir sayı girmeyiniz.");
      e.preventDefault();
    }
    if (e.keyCode == 13) {
      setInputValue("");
    }
  };

  const handleAreaPaste = (e) => {
    e.target.style.border = "3px groove blue";
    e.preventDefault();
    e.target.value += e.clipboardData.getData("text").toLocaleUpperCase();
  };
  return (
    <div className="container text-center">
      <h1>CLIPBOARD EVENTS</h1>
      <input
        className="form-control"
        type="text"
        value={inputValue}
        onChange={(e) => {
          e.target.value = e.target.value.toLocaleUpperCase();
          setInputValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <p
        style={{ textDecoration: "underline" }}
        className="text-start mt-4 text-danger "
        onCopy={(e) => {
          e.preventDefault();
          alert("Bu alana kopyalayamazsınız.");
        }}
      >
        {inputValue}
      </p>
      <textarea
        className="form-control"
        id="area"
        rows="7"
        style={{ resize: "none", border: "5px solid purple" }}
        onPaste={handleAreaPaste}
      ></textarea>
    </div>
  );
};

export default KeyboardsClipboard;
