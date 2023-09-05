import "./Component.css";

const Component = ({ color: c = "green", num, fn, bool, userObj }) => {
  return (
    <div className={`component ${c}`}>
      <h3>Hello Component!</h3>
      <h3>{num}</h3>
      <h3>{fn("React")}</h3>
      <h3>{bool ? "true" : "false"}</h3>
      <h3>{`user: ${userObj.familyName} ${userObj.firstName}`}</h3>
    </div>
  );
};

export default Component;
