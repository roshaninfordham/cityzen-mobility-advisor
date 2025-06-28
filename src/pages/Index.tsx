
import React, { useState } from 'react';
import Header from '@/components/Header';
import InputSection from '@/components/InputSection';
import RecommendationCard from '@/components/RecommendationCard';
import ResultsCards from '@/components/ResultsCards';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentTrip, setCurrentTrip] = useState({ origin: '', destination: '' });

  // Mock data - this would be replaced with real API calls
  const mockResults = {
    recommendation: {
      winner: 'transit' as const,
      title: 'Take Public Transit',
      explanation: 'Public transit will get you there 8 minutes faster and save you the hassle of finding parking in this busy area. The 4/5/6 trains are running normally with no reported delays.'
    },
    data: {
      driving: {
        eta: 25,
        traffic: 'Moderate',
        parkingScore: 3,
        parkingTime: 12,
        totalTime: 37,
        summary: 'Parking is challenging in this area on Saturday afternoons. Most street spots have 2-hour limits, and garage parking costs $15-25. Expect to circle for 10-15 minutes.'
      },
      transit: {
        eta: 29,
        cost: '$2.90',
        lines: ['4', '5', '6'],
        status: 'Service running normally',
        summary: 'The 4/5/6 express trains are running on schedule with normal weekend service. No construction or delays reported on your route.'
      }
    }
  };

  const handleAnalyze = async (origin: string, destination: string) => {
    setIsLoading(true);
    setCurrentTrip({ origin, destination });
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setShowResults(true);
  };

  const handleNewSearch = () => {
    setShowResults(false);
    setCurrentTrip({ origin: '', destination: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        {!showResults ? (
          <InputSection onAnalyze={handleAnalyze} isLoading={isLoading} />
        ) : (
          <div className="space-y-8">
            {/* Trip Summary */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-white mb-2">
                {currentTrip.origin} → {currentTrip.destination}
              </h2>
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

            {/* Footer Info */}
            <div className="text-center mt-12 text-gray-500 text-sm">
              <p>Data updated in real-time • Saturday, June 28, 2025 at 12:28 PM EDT</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
