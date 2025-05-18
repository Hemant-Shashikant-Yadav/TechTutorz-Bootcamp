import React from "react";

interface RegistrationModalProps {
  open: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({
  open,
  onClose,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative p-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-orange-500 text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfDDxEqvynboUK3QgiZ5mICyjQUfOqOcXGb9wC-mNz2eFnHlA/viewform?embedded=true"
          width="100%"
          height="600"
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
};

export default RegistrationModal;
