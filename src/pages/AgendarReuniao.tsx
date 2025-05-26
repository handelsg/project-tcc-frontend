
import React, { useState } from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon, Clock, Search, Link, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const AgendarReuniao = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState('');
  const [meetingLink, setMeetingLink] = useState('');
  const [recurrence, setRecurrence] = useState('');
  const [isTimeInputFocused, setIsTimeInputFocused] = useState(false);

  // Generate time options in 30-minute intervals
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        times.push(timeString);
      }
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  const handleTimeSelect = (selectedTime: string) => {
    setTime(selectedTime);
  };

  const handleTimeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const handleProsseguir = () => {
    console.log('Agendamento criado:', {
      date,
      time,
      meetingLink,
      recurrence
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with sidebar trigger */}
      <div className="flex items-center gap-4 p-4 border-b bg-white">
        <SidebarTrigger />
        <h1 className="text-xl font-semibold text-gray-900">Agendar reunião</h1>
      </div>
      
      {/* Main content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-indigo-600 mb-4">
              Agendar reunião
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Aqui você importar do eu computador ou arrastar um arquivo.
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="mb-8">
              <h2 className="text-xl font-medium text-gray-800 mb-6">
                Insira os dados para agendar uma nova reunião
              </h2>
            </div>

            <div className="space-y-6">
              {/* Data e Horário */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Data */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700">
                    Data
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal h-12 bg-white border-gray-300 text-gray-900 hover:bg-gray-50 rounded-lg",
                          !date && "text-gray-500"
                        )}
                      >
                        <div className="mr-3 h-8 w-8 bg-indigo-600 rounded flex items-center justify-center">
                          <CalendarIcon className="h-4 w-4 text-white" />
                        </div>
                        {date ? format(date, "dd/MM/yyyy") : "00/00/0000"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Horário */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700">
                    Horário
                  </Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                      <div className="h-8 w-8 bg-indigo-600 rounded flex items-center justify-center">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <Input
                      type="time"
                      value={time}
                      onChange={handleTimeInputChange}
                      onFocus={() => setIsTimeInputFocused(true)}
                      onBlur={() => setIsTimeInputFocused(false)}
                      className="h-12 pl-14 pr-4 bg-white border-gray-300 text-gray-900 placeholder-gray-500 rounded-lg"
                      placeholder="00:00"
                      list="time-suggestions"
                    />
                    <datalist id="time-suggestions">
                      {timeOptions.map((timeOption) => (
                        <option key={timeOption} value={timeOption} />
                      ))}
                    </datalist>
                  </div>
                  <p className="text-xs text-gray-500">
                    Digite um horário ou selecione das sugestões
                  </p>
                </div>
              </div>

              {/* Link da reunião */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">
                  Link da reunião
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Link className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="url"
                    value={meetingLink}
                    onChange={(e) => setMeetingLink(e.target.value)}
                    placeholder="Insira o link da reunião aqui"
                    className="h-12 pl-12 pr-12 border-gray-300 rounded-lg"
                  />
                  <div className="absolute inset-y-0 right-0 pr-1 flex items-center">
                    <Button
                      type="button"
                      size="sm"
                      className="h-10 w-10 p-0 bg-indigo-600 hover:bg-indigo-700 rounded-lg"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Recorrência */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">
                  Recorrência
                </Label>
                <Select value={recurrence} onValueChange={setRecurrence}>
                  <SelectTrigger className="h-12 border-gray-300 rounded-lg">
                    <SelectValue placeholder="Nunca" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nunca">Nunca</SelectItem>
                    <SelectItem value="diariamente">Diariamente</SelectItem>
                    <SelectItem value="semanalmente">Semanalmente</SelectItem>
                    <SelectItem value="mensalmente">Mensalmente</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Botão Prosseguir */}
              <div className="flex justify-end pt-8">
                <Button
                  onClick={handleProsseguir}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-base font-medium rounded-lg"
                >
                  <ChevronRight className="w-5 h-5 mr-2" />
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

export default AgendarReuniao;
