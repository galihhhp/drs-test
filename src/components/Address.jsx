import Input from "./Input";

const Address = () => {
  return (
    <div>
      <h4 className="font-weight-bold my-4">Address</h4>
      <Input label="Address" type="text" placeholder="Address" />
      <div className="d-flex mt-4 w-100">
        <div className="d-flex flex-column w-100 mr-3">
          <label className="font-weight-bold m-0">Country / Location</label>
          <select className="p-2 w-100 h-100" required>
            <option selected disabled value="">
              Select Country / Location
            </option>
            <option>...</option>
          </select>
        </div>
        <div className="d-flex flex-column w-100 ml-3">
          <label className="font-weight-bold m-0">Province / District</label>
          <select className="p-2 w-100 h-100" required>
            <option selected disabled value="">
              Select Province / District
            </option>
            <option>...</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Address;
