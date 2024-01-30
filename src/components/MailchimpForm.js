import React from "react";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const openMailToLink = () => {
    window.location.href = `mailto:${'info@360marco.com'}`;
  };

  return (
    <>
      <Newsletter onValidated={openMailToLink} />
    </>
  );
};
