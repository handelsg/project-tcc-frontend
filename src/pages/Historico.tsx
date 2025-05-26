
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const Historico = () => {
  const reunioes = [
    {
      id: 1,
      url: 'meet.google.com/cmh-gauj-hrk',
      data: '04/05/2024',
      googleMeetIcon: '/lovable-uploads/d0c23092-d48c-4b32-aaa3-dc736b71da42.png'
    },
    {
      id: 2,
      url: 'meet.google.com/cmh-gauj-hrk',
      data: '04/05/2024',
      googleMeetIcon: '/lovable-uploads/d0c23092-d48c-4b32-aaa3-dc736b71da42.png'
    },
    {
      id: 3,
      url: 'meet.google.com/cmh-gauj-hrk',
      data: '04/05/2024',
      googleMeetIcon: '/lovable-uploads/d0c23092-d48c-4b32-aaa3-dc736b71da42.png'
    },
    {
      id: 4,
      url: 'meet.google.com/cmh-gauj-hrk',
      data: '04/05/2024',
      googleMeetIcon: '/lovable-uploads/d0c23092-d48c-4b32-aaa3-dc736b71da42.png'
    },
    {
      id: 5,
      url: 'meet.google.com/cmh-gauj-hrk',
      data: '04/05/2024',
      googleMeetIcon: '/lovable-uploads/d0c23092-d48c-4b32-aaa3-dc736b71da42.png'
    }
  ];

  const handleGerarResumo = (id: number) => {
    console.log('Gerar Resumo para reunião:', id);
  };

  const handleGerarUS = (id: number) => {
    console.log('Gerar US para reunião:', id);
  };

  const handleGerarResumoUS = (id: number) => {
    console.log('Gerar Resumo + US para reunião:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b bg-white">
        <h1 className="text-xl font-semibold text-gray-900">Histórico</h1>
      </div>
      
      {/* Main content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-indigo-600 mb-4">
              Histórico
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Aqui você importar do eu computador ou arrastar um arquivo.
            </p>
          </div>

          {/* Reuniões List */}
          <div className="space-y-6">
            {reunioes.map((reuniao, index) => (
              <div key={reuniao.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                {/* Reunião Header */}
                <div className="bg-indigo-600 text-white px-6 py-3 rounded-t-lg">
                  <h3 className="font-medium">Reunião</h3>
                </div>
                
                {/* Reunião Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    {/* Left side - Meeting info */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                          <div className="w-6 h-6 bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 rounded-sm"></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{reuniao.url}</p>
                        <p className="text-sm text-gray-500">Data: {reuniao.data}</p>
                      </div>
                    </div>
                    
                    {/* Right side - Action buttons */}
                    <div className="flex gap-3">
                      <Button
                        onClick={() => handleGerarResumo(reuniao.id)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2"
                      >
                        <ChevronRight className="w-4 h-4 mr-2" />
                        Gerar Resumo
                      </Button>
                      <Button
                        onClick={() => handleGerarUS(reuniao.id)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2"
                      >
                        <ChevronRight className="w-4 h-4 mr-2" />
                        Gerar US
                      </Button>
                      <Button
                        onClick={() => handleGerarResumoUS(reuniao.id)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2"
                      >
                        <ChevronRight className="w-4 h-4 mr-2" />
                        Gerar Resumo + US
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" className="text-gray-500">
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </PaginationPrevious>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive className="bg-indigo-600 text-white border-indigo-600">
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="text-gray-700 hover:bg-gray-100">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="text-gray-700 hover:bg-gray-100">
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" className="text-gray-500">
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </PaginationNext>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historico;
