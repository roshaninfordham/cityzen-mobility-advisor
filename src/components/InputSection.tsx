
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface InputSectionProps {
  onAnalyze: (origin: string, destination: string) => void;
  isLoading: boolean;
}

const InputSection = ({ onAnalyze, isLoading }: InputSectionProps) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleAnalyze = () => {
    if (origin.trim() && destination.trim()) {
      onAnalyze(origin, destination);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-12 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Origin</label>
          <Input
            placeholder="Enter starting location..."
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-400 transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Destination</label>
          <Input
            placeholder="Enter destination..."
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-400 transition-colors"
          />
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
