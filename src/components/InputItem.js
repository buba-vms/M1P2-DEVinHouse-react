import React from 'react';

const InputItem = ({
  type,
  name,
  value,
  handleFunc,
  label,
  isRequeired = true,
  min,
  max,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor="razaoSocial">{label}</label>
      {isRequeired ? (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={(e) => handleFunc(e)}
          className="form-control"
          required
          min={min}
          max={max}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={(e) => handleFunc(e)}
          className="form-control"
          min={min}
          max={max}
          placeholder={placeholder}
        />
      )}
    </>
  );
};

export default InputItem;
