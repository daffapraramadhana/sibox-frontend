import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";

const SweetAlertThank = () => {
  return (
    <SweetAlert success title="Woot!" onConfirm={this.hideAlert}>
      I did it!
    </SweetAlert>
  );
};

export default SweetAlertThank;
