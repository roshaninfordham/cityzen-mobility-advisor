
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ResultsData {
  driving: {
    eta: number;
    traffic: string;
    parkingScore: number;
    parkingTime: number;
    totalTime: number;
    summary: string;
  };
  transit: {
    eta: number;
    cost: string;
    lines: string[];
    status: string;
    summary: string;
  };
}

interface ResultsCardsProps {
  data: ResultsData;
}

const ResultsCards = ({ data }: ResultsCardsProps) => {
  const getParkingScoreColor = (score: number) => {
    if (score >= 7) return 'text-green-400';
    if (score >= 4) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getTrafficColor = (traffic: string) => {
    switch (traffic.toLowerCase()) {
      case 'light': return 'text-green-400';
      case 'moderate': return 'text-yellow-400';
      case 'heavy': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
      {/* Driving Card */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-200">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <span className="text-2xl mr-2">🚗</span>
            Drive & Park
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{data.driving.totalTime}m</div>
              <div className="text-sm text-gray-400">Real-World ETA</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${getTrafficColor(data.driving.traffic)}`}>
                {data.driving.traffic}
              </div>
              <div className="text-sm text-gray-400">Live Traffic</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${getParkingScoreColor(data.driving.parkingScore)}`}>
                {data.driving.parkingScore}/10
              </div>
              <div className="text-sm text-gray-400">Parking Score</div>
            </div>
          </div>
          
          <div className="bg-gray-700/50 rounded-lg p-4 h-32 flex items-center justify-center border border-gray-600">
            <div className="text-center text-gray-400">
              <div className="text-4xl mb-2">🗺️</div>
              <div className="text-sm">Interactive Route Map</div>
              <div className="text-xs">(Google Maps Integration)</div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-600">
            <h4 className="font-semibold text-white mb-2">Parking Analysis</h4>
            <p className="text-gray-300 text-sm">{data.driving.summary}</p>
            <div className="mt-2 text-xs text-gray-400">
              Est. parking time: {data.driving.parkingTime} minutes
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transit Card */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-200">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <span className="text-2xl mr-2">🚇</span>
            Public Transit
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{data.transit.eta}m</div>
              <div className="text-sm text-gray-400">ETA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{data.transit.cost}</div>
              <div className="text-sm text-gray-400">Cost</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">Normal</div>
              <div className="text-sm text-gray-400">Service Status</div>
            </div>
          </div>
          
          <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
            <h4 className="font-semibold text-white mb-3">Required Lines</h4>
            <div className="flex flex-wrap gap-2">
              {data.transit.lines.map((line, index) => (
                <div
                  key={index}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm"
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-600">
            <h4 className="font-semibold text-white mb-2">Transit Status</h4>
            <p className="text-gray-300 text-sm">{data.transit.summary}</p>
            <div className="mt-2 text-xs text-green-400">
              ✓ {data.transit.status}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsCards;
