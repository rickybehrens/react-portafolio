import React from 'react';

import cvImage from '/cv.png';
import cvPdf from '/cv.pdf';

export default function CV() {
    const handleDownload = () => {
        // Create a link element
        const link = document.createElement('a');
        // Set the href attribute to the path of your PDF file
        link.href = cvPdf;
        // Set the download attribute with the desired file name
        link.download = '/Ricardo-Behrens-CV.pdf';
        // Append the link to the document
        document.body.appendChild(link);
        // Trigger a click event on the link to start the download
        link.click();
        // Remove the link from the document
        document.body.removeChild(link);
      };
    
      return (
        <div className="cv-container">
            <div className="cv-header">
                <h1>Curriculum Vitae</h1>
                <button className="download-button" onClick={handleDownload}>
                    Download CV
                </button>
            </div>
            <div>
                <img className="cv-image" src={cvImage} alt="CV" />
            </div>
        </div>
    );
}
