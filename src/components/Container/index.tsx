import { Layout } from "antd";
import React, { PropsWithChildren } from "react";

function Container(props: PropsWithChildren) {
  const { children } = props;
  return (
    <div
      style={{
        maxWidth: "1160px",
        width: "100%",
        background: "transparent",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
}

export default Container;
