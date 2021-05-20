import CircularProgress from "@material-ui/core/CircularProgress";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Loader;
