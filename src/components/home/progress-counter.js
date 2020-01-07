import React from "react";
import { progress } from "@stickyroll/decorators";

class ProgressCounter extends React.Component {
  render() {
    return (
      <>
        Page progress: <strong>{this.props.progress}</strong>
      </>
    );
  }
}

export default progress(ProgressCounter);