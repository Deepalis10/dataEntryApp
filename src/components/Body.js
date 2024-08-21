import Table from "./Table";

const Body = (props) => {
  return (
    <div className="Body">
      <Table records={props.records} setRecords={props.setRecords} />
      <h1> No Data Available </h1>
    </div>
  );
};

export default Body;
