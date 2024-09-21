import React from 'react';

function FormPreview({ formData, currentSection }) {
  return (
    <div className="form-preview">
      {currentSection === 'welcome' && (
        <div>
          <h1 style={{ textAlign: 'left' }}>{formData.title}</h1>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection:
                formData.imageAlignment === 'left' ? 'row' : 'row-reverse',
            }}
          >
            {formData.imageUrl && (
              <img
                src={formData.imageUrl}
                alt="Uploaded"
                style={{
                  maxWidth: '200px',
                  margin: '10px',
                  borderRadius: '8px',
                }}
              />
            )}
            <p
              style={{
                marginLeft: formData.imageAlignment === 'left' ? '10px' : '0',
                marginRight: formData.imageAlignment === 'right' ? '10px' : '0',
              }}
            >
              {formData.description}
            </p>
          </div>
          {formData.buttonText && (
            <div style={{ marginTop: '20px' }}>
              <button className="styled-button">{formData.buttonText}</button>
            </div>
          )}
        </div>
      )}
      {currentSection === 'email' && (
        <div>
          <h1>{formData.emailTitle}</h1>
          <p>{formData.emailDescription}</p>
          <p>{formData.email ? formData.email : 'No email provided'}</p>
        </div>
      )}
      {currentSection === 'end' && (
        <>
          <h1>{formData.endTitle}</h1>
          <p>{formData.endDescription}</p>
        </>
      )}
    </div>
  );
}

export default FormPreview;
