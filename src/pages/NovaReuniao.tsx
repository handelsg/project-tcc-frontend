
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ArrowRight, Link } from 'lucide-react';

const NovaReuniao = () => {
  const [meetingLink, setMeetingLink] = useState('');

  const handleProsseguir = () => {
    if (meetingLink.trim()) {
      console.log('Link da reunião:', meetingLink);
      // Aqui você pode adicionar a lógica para processar o link
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b bg-white">
        <h1 className="text-xl font-semibold text-gray-900">Nova reunião</h1>
      </div>
      
      {/* Main content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-indigo-600 mb-4">
              Nova reunião
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Aqui você pode a partir de um link, pôr o robô dentro da reunião para ele transcrevê-la.
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
                Insira o link gerado a partir da plataforma e clique em prosseguir
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="meeting-link" className="text-base font-medium text-gray-700 mb-2 block">
                  Link
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Link className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="meeting-link"
                    type="url"
                    placeholder="Placeholder"
                    value={meetingLink}
                    onChange={(e) => setMeetingLink(e.target.value)}
                    className="pl-10 h-12 text-base border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <Button
                      type="button"
                      size="sm"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4"
                      onClick={() => {
                        // Botão de busca/validação do link se necessário
                        console.log('Validando link...');
                      }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button
                  onClick={handleProsseguir}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-base font-medium"
                  disabled={!meetingLink.trim()}
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

export default NovaReuniao;
