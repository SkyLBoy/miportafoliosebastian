// src/components/ui/DownloadCV.jsx
import React, { useState } from 'react';
import { Download, Eye } from 'lucide-react';
import Button from './Button';

// Importa tu CV (colócalo en src/assets/documents/CV_Sebastian.pdf)
import CVPdf from '../../assets/documents/CV_Sebastian.pdf';

const DownloadCV = ({ variant = 'outline', className = '' }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      const link = document.createElement('a');
      link.href = CVPdf;
      link.download = 'CV_Sebastian_Calderon_Desarrollador.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Pequeño delay para la animación
      setTimeout(() => setIsDownloading(false), 1000);
      
    } catch (error) {
      console.error('Error al descargar CV:', error);
      alert('Error al descargar el CV. Intenta nuevamente.');
      setIsDownloading(false);
    }
  };

  const handleView = () => {
    window.open(CVPdf, '_blank');
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      <Button 
        variant={variant}
        onClick={handleDownload}
        disabled={isDownloading}
        className="group"
      >
        <Download className={`h-4 w-4 mr-2 transition-transform ${
          isDownloading ? 'animate-bounce' : 'group-hover:scale-110'
        }`} />
        {isDownloading ? 'Descargando...' : 'Descargar CV'}
      </Button>
      
      <Button 
        variant="ghost"
        onClick={handleView}
        className="group px-3"
        title="Ver CV en nueva ventana"
      >
        <Eye className="h-4 w-4 group-hover:scale-110 transition-transform" />
      </Button>
    </div>
  );
};

export default DownloadCV;