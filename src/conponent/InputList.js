import Input from "./Input";

const InputList = ({ list, handleRemove, handleInputChange }) => {
  return (
    <div className="input-list">
      {list.map((value, index) => {
        return (
          <li key={index}>
            <Input
              index={index}
              value={value}
              onRemove={() => handleRemove(index)}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </li>
        );
      })}
    </div>
  );
};

export default InputList;
