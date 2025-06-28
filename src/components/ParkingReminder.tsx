
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Map, Clock, Car } from 'lucide-react';

interface ParkingSpot {
  id: string;
  distance: string;
  availability: 'high' | 'medium' | 'low';
  maxDuration: string;
  restrictions: string;
  rating: number;
}

interface ParkingReminderProps {
  removalTime: string;
  currentSpot: {
    location: string;
    timeLeft: string;
    restrictions: string;
  };
  nearbySpots: ParkingSpot[];
}

const ParkingReminder = ({ removalTime, currentSpot, nearbySpots }: ParkingReminderProps) => {
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'high': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'high': return 'High Availability';
      case 'medium': return 'Medium Availability';
      case 'low': return 'Low Availability';
      default: return 'Unknown';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fade-in">
      {/* Current Parking Status */}
      <Card className="bg-red-900/20 border-red-400 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-red-400">
            <Bell className="w-6 h-6 mr-2" />
            Parking Reminder Alert
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold text-white">Move Your Car!</h4>
                <p className="text-gray-300">Current location: {currentSpot.location}</p>
                <p className="text-red-400 font-medium">Remove by: {removalTime}</p>
                <p className="text-sm text-gray-400">{currentSpot.restrictions}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">{currentSpot.timeLeft}</div>
                <div className="text-sm text-gray-400">Time Left</div>
              </div>
            </div>
            <Button className="w-full bg-red-600 hover:bg-red-700">
              <Bell className="w-4 h-4 mr-2" />
              Set Reminder Notification
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Parking Map */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Map className="w-6 h-6 mr-2" />
            Live Parking Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-700/50 rounded-lg p-8 h-64 flex items-center justify-center border border-gray-600 mb-4">
            <div className="text-center text-gray-400">
              <div className="text-6xl mb-4">🗺️</div>
              <div className="text-lg font-medium">Interactive Parking Map</div>
              <div className="text-sm">Real-time availability • GPS-powered</div>
              <div className="mt-2 text-xs text-blue-400">Premium Feature: Live street view integration</div>
            </div>
          </div>
          
          {/* Map Legend */}
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-300">High Availability</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-gray-300">Medium Availability</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <span className="text-gray-300">Low Availability</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Nearby Parking Spots Ranking */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Car className="w-6 h-6 mr-2" />
            Nearby Parking Spots (Ranked)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {nearbySpots.map((spot, index) => (
              <div key={spot.id} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold text-blue-400">#{index + 1}</div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium">{spot.distance} away</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-sm ${i < spot.rating ? 'text-yellow-400' : 'text-gray-600'}`}>
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">{spot.restrictions}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${getAvailabilityColor(spot.availability)}`}>
                    {getAvailabilityText(spot.availability)}
                  </div>
                  <div className="text-sm text-gray-300 mt-1">Max: {spot.maxDuration}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ParkingReminder;
