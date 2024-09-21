import React from 'react';

function EndScreenEditor({ formData, setFormData }) {
  const handleTitleChange = (e) => {
    setFormData({ ...formData, endTitle: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, endDescription: e.target.value });
  };

  return (
    <div className="editor-container">
      <div className="editor-field">
        <label>Title</label>
        <input
          type="text"
          value={formData.endTitle}
          onChange={handleTitleChange}
        />
      </div>
      <div className="editor-field">
        <label>Description</label>
        <textarea
          value={formData.endDescription}
          onChange={handleDescriptionChange}
        />
      </div>
    </div>
  );
}

export default EndScreenEditor;
