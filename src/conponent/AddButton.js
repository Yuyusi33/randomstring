import InputComponent from "./components/InputComponent";

const AddButton = () => {
  const handleClick = () => {
    console.log("add");
  };

  return (
    <button className="add-button" onClick={handleClick}>
      +
    </button>
  );
};
export default AddButton;
