import React from "react";

const Table = (props) => {
  const handleDelete = (index) => {
    const updatedRecords = [...props.records];
    updatedRecords.splice(index, 1);
    props.setRecords(updatedRecords);
    console.log(updatedRecords);
  };

  const handleEdit = (index) => {
    console.log(props.records[index]);
  };
  return (
    <>
      <div className="Table">
        <table>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Name </th>
              <th>Address </th>
              <th>Gender </th>
              <th>Age </th>
            </tr>
          </thead>
          <tbody>
            {props.records.map((item, index) => {
              return (
                <tr key={"record-data-" + index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.gender}</td>
                  <td>{item.age}</td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    <button onClick={handleEdit(index)}>Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
