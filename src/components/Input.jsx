const Input = ({ label, type, placeholder, ...props }) => {
  return (
    <div className="d-flex flex-column" {...props}>
      <label className="mb-0 font-weight-bold">{label}</label>
      <input
        type={type}
        class="form-control"
        className="p-2 w-100"
        placeholder={placeholder}></input>
    </div>
  );
};

export default Input;
