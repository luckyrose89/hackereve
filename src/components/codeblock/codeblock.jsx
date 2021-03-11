import React from "react";

import "./codeblock.styles.scss";

const CodeBlock = (props) => {
  return (
    <div className="code-container">
      <pre className="code-box">{props.children}</pre>
    </div>
  );
};

export default CodeBlock;
