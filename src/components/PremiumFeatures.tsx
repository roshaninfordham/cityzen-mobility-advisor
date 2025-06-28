
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, Zap, Shield, Bell, Map, Camera } from 'lucide-react';

const PremiumFeatures = () => {
  const features = [
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Smart Parking Reminders",
      description: "Never get a parking ticket again with AI-powered notifications",
      benefits: ["SMS & Push notifications", "15-min early warnings", "Weather-based adjustments"]
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Parking Sign AI Scanner",
      description: "Instantly decode any NYC parking sign with your camera",
      benefits: ["Real-time OCR processing", "Multi-language support", "Historical sign database"]
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Live Parking Map",
      description: "Real-time parking availability with street-level accuracy",
      benefits: ["Live occupancy data", "Predictive availability", "Walking directions"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Priority Route Planning",
      description: "Advanced algorithms considering all NYC variables",
      benefits: ["Construction alerts", "Event-based rerouting", "Time-based optimization"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Ticket Protection Insurance",
      description: "We'll cover your parking tickets up to $500/month",
      benefits: ["Automatic claim filing", "Legal dispute support", "Premium member exclusive"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto mb-8 animate-scale-in">
      <Card className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-yellow-400 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center text-2xl text-yellow-400 mb-2">
            <Crown className="w-8 h-8 mr-2" />
            CityZen Premium
          </CardTitle>
          <p className="text-gray-300">Unlock the full power of NYC mobility intelligence</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/30 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center mb-3 text-yellow-400">
                  {feature.icon}
                  <h4 className="ml-2 font-semibold">{feature.title}</h4>
                </div>
                <p className="text-gray-300 text-sm mb-3">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="text-xs text-gray-400 flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="mb-4">
              <span className="text-3xl font-bold text-yellow-400">$9.99</span>
              <span className="text-gray-400">/month</span>
              <div className="text-sm text-gray-500">Save $50+ monthly on parking tickets</div>
            </div>
            <Button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-black font-bold py-3 px-8 text-lg">
              <Crown className="w-5 h-5 mr-2" />
              Upgrade to Premium
            </Button>
            <div className="mt-2 text-xs text-gray-500">7-day free trial • Cancel anytime</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PremiumFeatures;
