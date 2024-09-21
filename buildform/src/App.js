import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import FormPreview from './components/FormPreview';

function App() {
  const [currentSection, setCurrentSection] = useState('welcome');
  const [formData, setFormData] = useState({
    title: 'Welcome to our form',
    description: 'This is a description of the form',
    email: '',
    emailTitle: 'Email Section Title',
    emailDescription: 'Please enter your email below:',
    isValidEmail: true,
    imageUrl: '',
    imageAlignment: 'left',
    endTitle: 'Thank you!',
    endDescription: 'This is the end of the form.',
    buttonText: 'Click Me', 
  });
  
  
  

  return (
    <div className="app-container">
      {/* Sidebar (Editor) on the left */}
      <Sidebar 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection}
        formData={formData} 
        setFormData={setFormData}
      />

      {/* Real-time preview on the right (4/5 of the screen) */}
      <div className="preview-container">
        <FormPreview formData={formData} currentSection={currentSection} />
      </div>
    </div>
  );
}

export default App;
