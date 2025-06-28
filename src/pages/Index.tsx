
import React, { useState } from 'react';
import Header from '@/components/Header';
import InputSection from '@/components/InputSection';
import RecommendationCard from '@/components/RecommendationCard';
import ResultsCards from '@/components/ResultsCards';
import ParkingReminder from '@/components/ParkingReminder';
import PremiumFeatures from '@/components/PremiumFeatures';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showParkingReminder, setShowParkingReminder] = useState(false);
  const [currentTrip, setCurrentTrip] = useState({ 
    origin: '', 
    destination: '', 
    arrivalTime: '',
    language: 'English'
  });

  // Mock data - enhanced with new features
  const mockResults = {
    recommendation: {
      winner: 'driving' as const,
      title: 'Drive & Use Smart Parking',
      explanation: 'With our Premium AI parking scanner, you can find a legal spot 12 minutes faster than usual. The 4/5/6 trains have delays, making driving the better choice right now. Premium users save an average of $45/week on parking tickets.'
    },
    data: {
      driving: {
        eta: 22,
        traffic: 'Light',
        parkingScore: 7,
        parkingTime: 8,
        totalTime: 30,
        summary: 'Great news! Our AI detected several 2-hour parking spots near your destination. Premium scanning shows optimal parking windows until 3:00 PM.'
      },
      transit: {
        eta: 35,
        cost: '$2.90',
        lines: ['4', '5', '6'],
        status: 'Minor delays reported',
        summary: 'Signal problems at 59th St are causing 8-12 minute delays. Service should normalize by 2:00 PM according to MTA predictions.'
      }
    }
  };

  // Mock parking reminder data
  const mockParkingData = {
    removalTime: '3:00 PM',
    currentSpot: {
      location: 'E 42nd St between Park & Lexington',
      timeLeft: '2h 15m',
      restrictions: '2 Hour Parking, 8AM-6PM Mon-Fri'
    },
    nearbySpots: [
      {
        id: '1',
        distance: '0.2 miles',
        availability: 'high' as const,
        maxDuration: '4 hours',
        restrictions: 'Free parking after 6PM',
        rating: 5
      },
      {
        id: '2',
        distance: '0.3 miles',
        availability: 'medium' as const,
        maxDuration: '2 hours',
        restrictions: 'Meter parking $3/hr',
        rating: 4
      },
      {
        id: '3',
        distance: '0.4 miles',
        availability: 'low' as const,
        maxDuration: '1 hour',
        restrictions: '1hr limit, street cleaning Wed',
        rating: 3
      }
    ]
  };

  const handleAnalyze = async (origin: string, destination: string, arrivalTime?: string, language?: string) => {
    setIsLoading(true);
    setCurrentTrip({ origin, destination, arrivalTime: arrivalTime || '', language: language || 'English' });
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setIsLoading(false);
    setShowResults(true);
    
    // Simulate parking reminder after analysis
    setTimeout(() => {
      setShowParkingReminder(true);
    }, 3000);
  };

  const handleNewSearch = () => {
    setShowResults(false);
    setShowParkingReminder(false);
    setCurrentTrip({ origin: '', destination: '', arrivalTime: '', language: 'English' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        {!showResults ? (
          <>
            <InputSection onAnalyze={handleAnalyze} isLoading={isLoading} />
            <PremiumFeatures />
          </>
        ) : (
          <div className="space-y-8">
            {/* Trip Summary */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-white mb-2">
                {currentTrip.origin} → {currentTrip.destination}
              </h2>
              {currentTrip.arrivalTime && (
                <p className="text-blue-400 mb-1">Target arrival: {currentTrip.arrivalTime}</p>
              )}
              {currentTrip.language !== 'English' && (
                <p className="text-green-400 mb-2">Language: {currentTrip.language}</p>
              )}
              <button
                onClick={handleNewSearch}
                className="text-blue-400 hover:text-blue-300 transition-colors underline"
              >
                New Search
              </button>
            </div>

            {/* AI Recommendation */}
            <RecommendationCard recommendation={mockResults.recommendation} />

            {/* Results Cards */}
            <ResultsCards data={mockResults.data} />

            {/* Parking Reminder (shows after a few seconds) */}
            {showParkingReminder && (
              <ParkingReminder 
                removalTime={mockParkingData.removalTime}
                currentSpot={mockParkingData.currentSpot}
                nearbySpots={mockParkingData.nearbySpots}
              />
            )}

            {/* Premium Upgrade Prompt */}
            <PremiumFeatures />

            {/* Footer Info */}
            <div className="text-center mt-12 text-gray-500 text-sm">
              <p>Data updated in real-time • Saturday, June 28, 2025 at 12:28 PM EDT</p>
              <p className="mt-1">🚀 Premium features: Parking sign AI • Live notifications • Ticket insurance</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
