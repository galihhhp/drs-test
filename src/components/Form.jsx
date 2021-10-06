import Address from "./Address";
import Contact from "./Contact";
import MobilePhone from "./MobilePhone";
import Name from "./Name";
import Title from "./Title";

const Form = () => {
  return (
    <div className="p-5">
      <h5 className="font-weight-bold mb-4">Create new account</h5>
      <Title />
      <Name />
      <MobilePhone />
      <Address />
      <Contact />
    </div>
  );
};

export default Form;
