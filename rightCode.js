"use client";

import React from "react";
import ServerComponent from "../rightCode"; // ../ServerComponent

const ClientComponent = ({ children }) => {
  const [search, setSearch] = React.useState("");

  return <div>{children}</div>;
};

export default ClientComponent;
