import React from "react";
import { Listener } from "@stickyroll/stickyroll";
import { assert, scrollTo } from "@stickyroll/utils";

export const SkipBase = props => {
  const handleClick = e => {
    e.preventDefault();
    scrollTo(`${props.prefix}/skip`, e.target, {
      noFocus: true,
      noHash: true
    });
  };

  return (
    <a
      href={`#${props.prefix}/skip`}
      onClick={handleClick}>
      Skip this section
      </a>
  );
};

const Skip = props => {
  if (props.useContext) {
    return (
      <Listener>
        {context => (
          <SkipBase prefix={context.anchors} />
        )}
      </Listener>
    );
  }
  assert(props.prefix, "string");
  return <SkipBase prefix={props.prefix} />;
};

export default Skip;
