import axios from "axios";
import { useEffect, useState } from "react";

const MobilePhone = () => {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((res) => {
        setFlags(res.data.data);
        console.log(flags);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <p className="font-weight-bold m-0 mt-4">Mobile phone number</p>
      <div className="d-flex">
        <select className="mr-5 p-2" required>
          {flags.map((flag) => {
            return <option value={flag.flag}>{flag.flag}</option>;
          })}
          <option selected disabled value=""></option>
          <option>...</option>
        </select>
        <div>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">+852</div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Mobile phone number"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobilePhone;
