const DeadPixel = ({ x, y }) => (
  <div
    style={{
      position: "absolute",
      width: "10px",
      height: "10px",
      backgroundColor: "white",
      top: `${y}vh`,
      left: `${x}vw`,
    }}
  />
);
export default DeadPixel;
