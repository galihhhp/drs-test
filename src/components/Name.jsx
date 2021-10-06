import Input from "./Input";

const Name = () => {
  return (
    <div className="d-flex mt-4">
      <Input
        label="Last name"
        type="text"
        placeholder="Last name"
        className="mr-3 w-75"
      />
      <Input
        label="First name"
        type="text"
        placeholder="First name"
        className="pl-3 w-75"
      />
    </div>
  );
};

export default Name;
