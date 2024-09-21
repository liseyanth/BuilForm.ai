import React from 'react';

function EditorPanel({ formData, setFormData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    setFormData({
      ...formData,
      email: emailValue,
      isValidEmail: emailPattern.test(emailValue),
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          imageUrl: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAlignmentChange = (e) => {
    setFormData({
      ...formData,
      imageAlignment: e.target.value,
    });
  };

  return (
    <div className="editor-panel">
      <h2>Edit Form Fields</h2>

      <div className="editor-field">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>

      <div className="editor-field">
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>

      <div className="editor-field">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleEmailChange}
        />
        {!formData.isValidEmail && <p className="error">Invalid email format</p>}
      </div>

      <div className="editor-field">
        <label>Upload Picture:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>

      {formData.imageUrl && (
        <div className="image-preview">
          <h4>Image Preview:</h4>
          <img src={formData.imageUrl} alt="Uploaded Preview" />
        </div>
      )}

      <div className="editor-field">
        <label>Picture Alignment:</label>
        <div>
          <label>
            <input
              type="radio"
              name="alignment"
              value="left"
              checked={formData.imageAlignment === 'left'}
              onChange={handleAlignmentChange}
            />
            Left
          </label>
          <label>
            <input
              type="radio"
              name="alignment"
              value="right"
              checked={formData.imageAlignment === 'right'}
              onChange={handleAlignmentChange}
            />
            Right
          </label>
        </div>
      </div>
    </div>
  );
}

export default EditorPanel;
