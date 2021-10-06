import Form from "components/Form";
import Navbar from "components/Navbar";
import PrivacyNote from "components/PrivacyNote";

const FormRegistration = () => {
  return (
    <>
      <Navbar />
      <Form />
      <PrivacyNote />
      <div className="d-flex justify-content-end px-5 mb-3">
        <button className="btn font-weight-bold px-4 py-2 form__button">
          CREATE CUSTOMER
        </button>
      </div>
      <div className="d-flex justify-content-center font-weight-bold py-2 px-5">
        V 1.7.0
      </div>
    </>
  );
};

export default FormRegistration;
