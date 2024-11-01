import React, { useState } from 'react';
import { Home } from 'lucide-react';

export function Logo() {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="w-full max-w-xs mx-auto mb-12 flex items-center justify-center">
        <div className="text-gold flex flex-col items-center">
          <Home size={48} className="mb-2" />
          <span className="text-2xl font-bold gold-gradient">Elite Thermal</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xs mx-auto mb-12">
      <img 
        src="https://chooseelite.com/wp-content/uploads/2024/11/attic-insulation-Los-Angeles.png" 
        alt="Elite Thermal"
        onError={() => setImageError(true)}
        className="w-full h-auto"
      />
    </div>
  );
}