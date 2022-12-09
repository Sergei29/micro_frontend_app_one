import React from "react";

type Props = {};

const Nav = ({}: Props): JSX.Element => {
  return (
    <nav
      style={{
        background: "black",
        width: "100%",
        height: "100px",
        color: "white",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        paddingLeft: "15px",
      }}
    >
      <h2>
        Navbar <small>(from the frontend one)</small>
      </h2>
    </nav>
  );
};

export default Nav;
