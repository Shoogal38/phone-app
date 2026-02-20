function UIButton({ text, onClick, type }) {
    return (
      <button
        className={type === "delete" ? "deleteBtn" : "saveBtn"}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
  
  export default UIButton;