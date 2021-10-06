import Input from "./Input";

const Contact = () => {
  return (
    <div>
      <h4 className="font-weight-bold my-4">Contact</h4>
      <div className="d-flex justify-content-around">
        <Input
          label="Email"
          type="email"
          placeholder="email"
          className="w-100 mr-3"
        />
        <Input
          label="Date of Birth"
          type="number"
          placeholder="DD"
          className="mx-3"
        />
        <Input label="Month" type="number" placeholder="MM" className="mx-3" />
        <Input label="Year" type="number" placeholder="YY" className="mx-3" />
      </div>
    </div>
  );
};

export default Contact;
