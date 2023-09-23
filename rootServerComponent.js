import React from "react";
import ClientComponent from "./rightCode";
import ServerComponent from "./components/ServerComponent";

const RootServerComponet = () => {
  return (
    <ClientComponent>
      <ServerComponent />
    </ClientComponent>
  );
};

export default Albums;
