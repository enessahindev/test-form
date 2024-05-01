import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";

// Importing jQuery and its plugins using require() due to dependency order
import $ from "jquery";
window.jQuery = $;
window.$ = $;
require("jquery-ui-sortable");
require("formBuilder");

const formData = [
  {
    type: "header",
    subtype: "h1",
    label: "Form Oluşturma Sihirbazı"
  }
];

class FormBuilderComponent extends Component {
  constructor(props) {
    super(props);
    this.fb = createRef();
  }

  componentDidMount() {
    $(this.fb.current).formBuilder({ formData });
  }

  render() {
    return <div id="fb-editor" ref={this.fb} />;
  }
}

ReactDOM.render(<FormBuilderComponent />, document.getElementById("root"));
