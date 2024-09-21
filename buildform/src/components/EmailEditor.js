import React, { useState } from 'react';

function EmailEditor({ formData, setFormData }) {
  const [emailError, setEmailError] = useState('');

  const handleEmailTitleChange = (e) => {
    setFormData({ ...formData, emailTitle: e.target.value });
  };

  const handleEmailDescriptionChange = (e) => {
    setFormData({ ...formData, emailDescription: e.target.value });
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(emailValue);

    setFormData({ 
      ...formData, 
      email: emailValue,
      isValidEmail 
    });

    setEmailError(isValidEmail ? '' : 'Please enter a valid email address.');
  };

  return (
    <div className="editor-container">
      <div className="editor-field">
        <label>Email Title</label>
        <input
          type="text"
          value={formData.emailTitle}
          onChange={handleEmailTitleChange}
        />
      </div>
      <div className="editor-field">
        <label>Email Description</label>
        <textarea
          value={formData.emailDescription}
          onChange={handleEmailDescriptionChange}
        />
      </div>
      <div className="editor-field">
        <label>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={handleEmailChange}
          className={formData.isValidEmail ? '' : 'error'}
        />
        {!formData.isValidEmail && (
          <p style={{ color: 'red', fontSize: '12px' }}>{emailError}</p>
        )}
      </div>
    </div>
  );
}

export default EmailEditor;
