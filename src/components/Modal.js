import React, { useRef } from "react";

const Modal = ({ handleClose, setRecords }) => {
  const formDataRef = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let formEntries = Object.fromEntries(formData.entries());
    setRecords((previousRecords) => {
      const updatedRecords = [...previousRecords, formEntries];
      return updatedRecords;
    });

    e.target.reset();
  };

  const test = () => {
    formDataRef.current.name.value = "DAISYPRINCESS";
  };

  return (
    <div>
      Modal
      <div>
        hello Database
        <button onClick={test}>clickMe</button>
        <form ref={formDataRef} onSubmit={onSubmit}>
          <button type="submit">addData</button>
          <input
            name="name"
            type="text"
            placeholder="Enter Your Name "
            required
          />
          <input
            name="address"
            type="text"
            placeholder="Enter Your Address "
            required
          />
          <input
            name="gender"
            type="text"
            placeholder="Enter Your Gender "
            required
          />
          <input
            name="age"
            type="text"
            placeholder="Enter Your Age "
            required
          />
          <button onClick={handleClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
