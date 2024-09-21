import React from 'react';

function WelcomeScreenEditor({ formData, setFormData }) {
  const handleTitleChange = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, imageUrl });
    }
  };

  const handleImageAlignmentChange = (e) => {
    setFormData({ ...formData, imageAlignment: e.target.value });
  };

  const handleButtonTextChange = (e) => {
    setFormData({ ...formData, buttonText: e.target.value });
  };

  return (
    <div className="editor-container">
      <div className="editor-field">
        <label>Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="editor-field">
        <label>Description</label>
        <textarea
          value={formData.description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div className="editor-field">
        <label>Upload Image</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {formData.imageUrl && (
          <div>
            <img src={formData.imageUrl} alt="Preview" style={{ width: '100px', height: 'auto' }} />
          </div>
        )}
      </div>
      <div className="editor-field">
        <label>Image Alignment</label>
        <select value={formData.imageAlignment} onChange={handleImageAlignmentChange}>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </div>
      <div className="editor-field">
        <label>Button Text</label>
        <input
          type="text"
          value={formData.buttonText}
          onChange={handleButtonTextChange}
        />
      </div>
    </div>
  );
}

export default WelcomeScreenEditor;
