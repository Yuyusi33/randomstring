const Input = ({ index, onRemove, value, onChange }) => {
  return (
    <div className="input-section">
      <input
        type="text"
        placeholder={`text ${index + 1}`}
        value={value}
        onChange={onChange}
      />
      <button onClick={onRemove} className="remove-button">
        -
      </button>
    </div>
  );
};

export default Input;
