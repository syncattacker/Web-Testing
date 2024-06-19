import React from "react";

const Optimizing = () => {
  return (
    <div style={styles.container}>
      <h1>We are optimizing our website for mobile and tablet users.</h1>
      <p>Please check back later.</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f0f0f0",
    padding: "0 20px",
  },
};

export default Optimizing;
