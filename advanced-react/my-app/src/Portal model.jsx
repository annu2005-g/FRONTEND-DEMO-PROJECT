import React from "react";
import ReactDOM from "react-dom";

function Modal() {
  return ReactDOM.createPortal(
    <div
      style={{
        background: "black",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>This is Portal Modal</h2>
    </div>,
    document.getElementById("portal-root")
  );
}

function App() {
  return (
    <div>
      <h1>Main App</h1>

      <Modal />
    </div>
  );
}

export default App;