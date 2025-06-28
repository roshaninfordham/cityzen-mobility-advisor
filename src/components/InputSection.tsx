
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Camera, Clock, Globe } from 'lucide-react';

interface InputSectionProps {
  onAnalyze: (origin: string, destination: string, arrivalTime?: string, language?: string) => void;
  isLoading: boolean;
}

const InputSection = ({ onAnalyze, isLoading }: InputSectionProps) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [language, setLanguage] = useState('English');
  const [showParkingUpload, setShowParkingUpload] = useState(false);

  const handleAnalyze = () => {
    if (origin.trim() && destination.trim()) {
      onAnalyze(origin, destination, arrivalTime, language);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Dummy processing - in real app would use OCR/AI to read parking signs
      console.log('Processing parking sign image:', file.name);
      setShowParkingUpload(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-12 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-300">Origin</Label>
          <Input
            placeholder="Enter starting location..."
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-400 transition-colors"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-300">Destination</Label>
          <Input
            placeholder="Enter destination..."
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-400 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-300 flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            Arrival Time
          </Label>
          <Input
            type="time"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white focus:border-blue-400 transition-colors"
          />
        </div>
        
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-300 flex items-center">
            <Globe className="w-4 h-4 mr-1" />
            Language
          </Label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full h-10 bg-gray-800 border border-gray-700 text-white rounded-md px-3 focus:border-blue-400 transition-colors"
          >
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
            <option>Deutsch</option>
            <option>中文</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-300 flex items-center">
            <Camera className="w-4 h-4 mr-1" />
            Parking Sign
          </Label>
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="parking-upload"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => document.getElementById('parking-upload')?.click()}
              className="w-full border-gray-700 text-gray-300 hover:bg-gray-700"
            >
              <Camera className="w-4 h-4 mr-2" />
              Upload Sign
            </Button>
          </div>
        </div>
      </div>

      <Button
        onClick={handleAnalyze}
        disabled={!origin.trim() || !destination.trim() || isLoading}
        className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Analyzing...</span>
          </div>
        ) : (
          'Advise Me!'
        )}
      </Button>
    </div>
  );
};

export default InputSection;
