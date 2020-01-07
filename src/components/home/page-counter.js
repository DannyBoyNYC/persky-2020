import React from "react";
import { page } from "@stickyroll/decorators";

class PageCounter extends React.Component {
  render() {
    return (
      <>
        <strong>Page {this.props.page}</strong>{" "}
        of{" "}
        <strong>{this.props.pages}</strong>
      </>
    );
  }
}

export default page(PageCounter);