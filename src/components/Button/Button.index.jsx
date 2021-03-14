import React from "react";
import PropTypes from "prop-types";
import ButtonPresentation from "./Button.presentation";
import Link from "next/link";

function Button(props) {
  const { withLinkComponent, href } = props;

  if (withLinkComponent) {
    return (
      <Link href={href}>
        <a>
          <ButtonPresentation {...props} />
        </a>
      </Link>
    );
  }

  return <ButtonPresentation {...props} />;
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  withLinkComponent: PropTypes.bool,
  href: PropTypes.string,
};

export default Button;
