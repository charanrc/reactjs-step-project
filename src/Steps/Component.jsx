import PropTypes from "prop-types";
export default function Component(props) {
  return (
    <>
      <div>{props.arrObj.greet} Charan!</div>
    </>
  );
}
Component.propTypes = {
  arrObj: PropTypes.object,
  name: PropTypes.string,
};
