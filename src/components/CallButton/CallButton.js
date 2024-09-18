import React from 'react';
import './CallButton.css';

const CallButton = ({ phoneNumber = '+97444988781', variant = 'default' }) => {
  const className = `call-button ${variant === 'footer' ? 'call-button--footer' : variant === 'navbar' ? 'call-button--header' : ''}`;

  return (
    <div className="call-button-container">
      <a href={`tel:${phoneNumber}`} className={className}>
        {phoneNumber}
      </a>
    </div>
  );
};

export default CallButton;
