import Forms from "./components/1-forms/Forms";
import "bootstrap/dist/css/bootstrap.min.css";
import KeyboardsClipboard from "./components/2-keyboardsClipboardEvent/KeyboardsClipboard";
import MouseEvent from "./components/3-mouseEvents/MouseEvent";
import FormObject from "./components/1-forms/FormObject";

function App() {
  return (
    <div className="container mt-4 text-center">
      {/* <Forms /> */}
      {/* <FormObject /> */}
      {/* <KeyboardsClipboard /> */}
      <MouseEvent />
    </div>
  );
}

export default App;
