
import React from 'react';

interface RecommendationCardProps {
  recommendation: {
    winner: 'driving' | 'transit';
    title: string;
    explanation: string;
  };
}

const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
  const isWinnerDriving = recommendation.winner === 'driving';
  
  return (
    <div className="max-w-4xl mx-auto mb-8 animate-scale-in">
      <div className={`p-6 rounded-xl border-2 ${
        isWinnerDriving 
          ? 'border-blue-400 bg-blue-900/20' 
          : 'border-green-400 bg-green-900/20'
      } backdrop-blur-sm`}>
        <div className="flex items-center mb-3">
          <span className="text-2xl mr-2">🏆</span>
          <h3 className="text-xl font-bold text-white">Our Recommendation</h3>
        </div>
        <h4 className={`text-2xl font-bold mb-3 ${
          isWinnerDriving ? 'text-blue-400' : 'text-green-400'
        }`}>
          {recommendation.title}
        </h4>
        <p className="text-gray-300 text-lg leading-relaxed">
          {recommendation.explanation}
        </p>
      </div>
    </div>
  );
};

export default RecommendationCard;
