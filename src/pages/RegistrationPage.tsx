import React from "react";

const RegistrationPage: React.FC = () => (
  <div className="container mx-auto px-10 py-12 min-h-[70vh] flex flex-col items-center">
    <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center mt-9">
      Bootcamp Registration
    </h1>
    <div className="w-full max-w-2xl">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfDDxEqvynboUK3QgiZ5mICyjQUfOqOcXGb9wC-mNz2eFnHlA/viewform?embedded=true"
        width="100%"
        height="900"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Registration Form"
      >
        Loading…
      </iframe>
    </div>
  </div>
);

export default RegistrationPage;
