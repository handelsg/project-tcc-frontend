
import React, { useState } from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ArrowRight, Upload, FileText, X } from 'lucide-react';

const UploadReuniao = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  const handleProsseguir = () => {
    if (uploadedFile) {
      console.log('Arquivo para upload:', uploadedFile.name);
      // Aqui você pode adicionar a lógica para processar o arquivo
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with sidebar trigger */}
      <div className="flex items-center gap-4 p-4 border-b bg-white">
        <SidebarTrigger />
        <h1 className="text-xl font-semibold text-gray-900">Upload de reunião</h1>
      </div>
      
      {/* Main content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-indigo-600 mb-4">
              Upload de reunião
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Aqui você pode fazer upload de um arquivo de áudio/vídeo de uma reunião para transcrição.
            </p>
          </div>

          {/* Upload Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
                Faça upload do arquivo da reunião e clique em prosseguir
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-base font-medium text-gray-700 mb-4 block">
                  Arquivo
                </Label>
                
                {!uploadedFile ? (
                  <div
                    className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      isDragOver 
                        ? 'border-indigo-500 bg-indigo-50' 
                        : 'border-gray-300 hover:border-indigo-400'
                    }`}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                  >
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-lg text-gray-600 mb-2">
                      Arraste e solte seu arquivo aqui ou
                    </p>
                    <label className="cursor-pointer">
                      <span className="text-indigo-600 hover:text-indigo-700 font-medium">
                        clique para selecionar
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        accept="audio/*,video/*"
                        onChange={handleFileInputChange}
                      />
                    </label>
                    <p className="text-sm text-gray-500 mt-2">
                      Suporta arquivos de áudio e vídeo
                    </p>
                  </div>
                ) : (
                  <div className="border border-gray-300 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="h-8 w-8 text-indigo-600" />
                        <div>
                          <p className="font-medium text-gray-900">{uploadedFile.name}</p>
                          <p className="text-sm text-gray-500">
                            {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={removeFile}
                        className="text-gray-500 hover:text-red-600"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-end pt-4">
                <Button
                  onClick={handleProsseguir}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-base font-medium"
                  disabled={!uploadedFile}
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Prosseguir
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadReuniao;
