import React from 'react';
import WelcomeScreenEditor from './WelcomeScreenEditor';
import EmailEditor from './EmailEditor';
import EndScreenEditor from './EndScreenEditor'; 

function Sidebar({ currentSection, setCurrentSection, formData, setFormData }) {
  return (
    <div className="sidebar">
      <h2>Form Editor</h2>
      <button onClick={() => setCurrentSection('welcome')}>Welcome Screen Editor</button>
      <button onClick={() => setCurrentSection('email')}>Email Section Editor</button>
      <button onClick={() => setCurrentSection('end')}>End Screen Editor</button> {/* New button */}

      {currentSection === 'welcome' && (
        <WelcomeScreenEditor formData={formData} setFormData={setFormData} />
      )}
      {currentSection === 'email' && (
  <EmailEditor formData={formData} setFormData={setFormData} />
)}

      {currentSection === 'end' && (
  <>
    <EndScreenEditor formData={formData} setFormData={setFormData} />
  </>
)}

    </div>
  );
}

export default Sidebar;
