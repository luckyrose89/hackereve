import React, { useContext } from "react";

import "./callToAction.styles.scss";

import { faGlasses } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-banner">
        Join Hacker Eve{" "}
        <FontAwesomeIcon icon={faGlasses} style={{ color: "#9656a1" }} />
      </div>
      <p>Create your free account to unlock your custom reading experience.</p>
    </div>
  );
};

export default CallToAction;
