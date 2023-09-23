"use client";

import React from "react";
import ServerComponent from "../rightCode"; // ../ServerComponent

const ClientComponent = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div>
      <ServerComponent />
    </div>
  );
};

export default ClientComponent;
