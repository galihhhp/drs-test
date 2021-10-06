import { useState } from "react";
import Switch from "react-switch";

const PrivacyNote = () => {
  return (
    <div className="p-5">
      <h5 className="font-weight-bold">Standard Privacy Note</h5>
      <p className="font-italic pr-3">
        I Warrant that the above information is true and correct. I understand
        that failure to answer all questions listed in this application form may
        may prevent L'OCCITANE from processing my application; and L'OCCITANE my
        refuse to accept this application in the right of my individual
        circumstances.
      </p>
      <p className="font-italic pr-3">
        I undestand that the information collected will be used and retained by
        L'OCCITANE for the purpose of (i)my application of membership program of
        L'OCCITANE (ii) providing member-exclusive services; and (iii) the daily
        management operation and maintenance of membership account at
        L'OCCITANE.
      </p>
      <p className="font-italic pr-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
        dolorum facilis animi fugit atque at, corporis rem tempora. Aperiam,
        odit pariatur, eum et numquam optio facilis excepturi, error velit illum
        repellat repellendus impedit corrupti. Facere consectetur ea eos dolores
        nulla. Inventore quasi dicta ex nam quae?
      </p>
      <p className="font-italic pr-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
        dolorum facilis animi fugit atque at, corporis rem tempora. Aperiam,
        odit pariatur, eum et numquam optio facilis excepturi, error velit illum
        repellat repellendus impedit corrupti. Facere consectetur ea eos dolores
        nulla. Inventore quasi dicta ex nam quae?
      </p>
      <p className="font-italic pr-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
        dolorum facilis animi fugit atque at, corporis rem tempora. Aperiam,
        odit pariatur, eum et numquam optio facilis excepturi, error velit illum
        repellat repellendus impedit corrupti. Facere consectetur ea eos dolores
        nulla. Inventore quasi dicta ex nam quae?
      </p>
      <p className="font-italic pr-3">
        I Want to receive information or communication from L'OCCITANE
      </p>
      <Toggle />
      <Agreement />
    </div>
  );
};

const Toggle = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => setChecked(!checked);

  return (
    <div className="d-flex flex-column flex-md-row justify-content-between">
      <div className="d-flex ">
        <span className="mr-2">SMS & Mobile Call</span>
        <Switch onChange={handleChange} checked={checked} />
      </div>
      <div className="d-flex">
        <span className="mr-2">Emailing</span>
        <Switch onChange={handleChange} checked={checked} />
      </div>
      <div className="d-flex">
        <span className="mr-2">Mailing</span>
        <Switch onChange={handleChange} checked={checked} />
      </div>
    </div>
  );
};

const Agreement = () => {
  return (
    <div className="custom-control custom-checkbox mt-4 mb-2">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customControlInline"
      />
      <label
        className="custom-control-label font-italic"
        for="customControlInline">
        I have read and understood the above terms and conditions and hereby
        agree that I will be bounded by these conditions and policies once I
        have submitted this application form.
      </label>
    </div>
  );
};

export default PrivacyNote;
