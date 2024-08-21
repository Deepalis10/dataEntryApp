import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const Header = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="Header">
      DATA ENTRY APP
      {open && (
        <Modal
          handleClose={() => setOpen(false)}
          setRecords={props.setRecords}
        />
      )}
      <button onClick={handleOpen}>Add</button>
    </div>
  );
};

export default Header;
