import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft, ChevronRight, Edit2, Check, X } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface Reuniao {
  id: number;
  titulo: string;
  url: string;
  data: string;
  googleMeetIcon: string;
}

const Historico = () => {
  const [reunioes, setReunioes] = useState<Reuniao[]>([
    {
      id: 1,
      titulo: 'Reunião de Planejamento',
      url: 'meet.google.com/cmh-gauj-hrk',
      data: '04/05/2024',
      googleMeetIcon: '/lovable-uploads/d0c23092-d48c-4b32-aaa3-dc736b71da42.png'
    },
    {
      id: 2,
      titulo: 'Daily Standup',
      url: 'meet.google.com/xyz-abc-def',
      data: '05/05/2024',
      googleMeetIcon: '/lovable-uploads/d0c23092-d48c-4b32-aaa3-dc736b71da42.png'
    },
    {
      id: 3,
      titulo: 'Review de Sprint',
      url: 'meet.google.com/abc-def-ghi',
      data: '06/05/2024',
      googleMeetIcon: '/lovable-uploads/d0c23092-d48c-4b32-aaa3-dc736b71da42.png'
    },
    {
      id: 4,
      titulo: 'Reunião de Retrospectiva',
      url: 'meet.google.com/def-ghi-jkl',
      data: '07/05/2024',
      googleMeetIcon: '/lovable-uploads/d0c23092-d48c-4b32-aaa3-dc736b71da42.png'
    },
    {
      id: 5,
      titulo: 'Alinhamento Estratégico',
      url: 'meet.google.com/ghi-jkl-mno',
      data: '08/05/2024',
      googleMeetIcon: '/lovable-uploads/d0c23092-d48c-4b32-aaa3-dc736b71da42.png'
    },
    {
      id: 6,
      titulo: 'Reunião de Produto',
      url: 'meet.google.com/jkl-mno-pqr',
      data: '09/05/2024',
      googleMeetIcon: '/lovable-uploads/d0c23092-d48c-4b32-aaa3-dc736b71da42.png'
    },
    {
      id: 7,
      titulo: 'Apresentação para Stakeholders',
      url: 'meet.google.com/mno-pqr-stu',
      data: '10/05/2024',
      googleMeetIcon: '/lovable-uploads/d0c23092-d48c-4b32-aaa3-dc736b71da42.png'
    }
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calcular reuniões para a página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentReunioes = reunioes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(reunioes.length / itemsPerPage);

  const handleGerarResumo = (id: number) => {
    console.log('Gerar Resumo para reunião:', id);
  };

  const handleGerarUS = (id: number) => {
    console.log('Gerar US para reunião:', id);
  };

  const handleGerarResumoUS = (id: number) => {
    console.log('Gerar Resumo + US para reunião:', id);
  };

  const startEditing = (id: number, currentTitle: string) => {
    setEditingId(id);
    setEditValue(currentTitle);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditValue('');
  };

  const saveTitle = (id: number) => {
    if (editValue.trim()) {
      setReunioes(reunioes.map(reuniao => 
        reuniao.id === id ? { ...reuniao, titulo: editValue.trim() } : reuniao
      ));
    }
    setEditingId(null);
    setEditValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent, id: number) => {
    if (e.key === 'Enter') {
      saveTitle(id);
    } else if (e.key === 'Escape') {
      cancelEditing();
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
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
            {currentReunioes.map((reuniao) => (
              <div key={reuniao.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                {/* Reunião Header */}
                <div className="bg-indigo-600 text-white px-6 py-3 rounded-t-lg flex items-center justify-between">
                  {editingId === reuniao.id ? (
                    <div className="flex items-center gap-2 flex-1">
                      <Input
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onKeyDown={(e) => handleKeyPress(e, reuniao.id)}
                        className="bg-white text-black flex-1 max-w-md"
                        autoFocus
                      />
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => saveTitle(reuniao.id)}
                        className="text-white hover:bg-white/20 p-1"
                      >
                        <Check className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={cancelEditing}
                        className="text-white hover:bg-white/20 p-1"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <h3 className="font-medium">{reuniao.titulo}</h3>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => startEditing(reuniao.id, reuniao.titulo)}
                        className="text-white hover:bg-white/20 p-1"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
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
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={goToPreviousPage}
                      className={`cursor-pointer ${currentPage === 1 ? 'pointer-events-none opacity-50' : 'text-gray-500 hover:bg-gray-100'}`}
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Previous
                    </PaginationPrevious>
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink 
                        onClick={() => goToPage(page)}
                        isActive={currentPage === page}
                        className={`cursor-pointer ${
                          currentPage === page 
                            ? 'bg-indigo-600 text-white border-indigo-600' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={goToNextPage}
                      className={`cursor-pointer ${currentPage === totalPages ? 'pointer-events-none opacity-50' : 'text-gray-500 hover:bg-gray-100'}`}
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </PaginationNext>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}

          {/* Info sobre paginação */}
          <div className="mt-4 text-center text-sm text-gray-500">
            Mostrando {indexOfFirstItem + 1} a {Math.min(indexOfLastItem, reunioes.length)} de {reunioes.length} reuniões
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historico;
