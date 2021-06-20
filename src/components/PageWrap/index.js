import React from "react";
import PropTypes from "prop-types";

import PageContent from "../PageContent";

export default function PageWrap({ children, ...rest }) {
  
  return (
    <>
      <PageContent>{children}</PageContent>
    </>
  );
}

PageWrap.propTypes = {
  children: PropTypes.element.isRequired
};
