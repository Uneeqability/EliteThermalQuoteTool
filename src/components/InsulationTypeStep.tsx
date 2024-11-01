import React from 'react';
import { FormStep } from './FormStep';
import { StepProps } from '../types';

export function InsulationTypeStep({ data, onUpdate, onNext, onBack }: StepProps) {
  return (
    <FormStep onBack={onBack}>
      <h2 className="text-3xl font-bold text-white mb-6">
        Choose Your Insulation Type
      </h2>

      <div className="space-y-8">
        <div className="bg-dark-lighter border-2 border-gold/20 rounded-xl p-6 hover:border-gold cursor-pointer transition-all"
             onClick={() => {
               onUpdate({ insulationType: 'blow-batt' });
               onNext();
             }}>
          <h3 className="text-xl font-bold text-white mb-4">
            Type #1: "Blow/Batt & Go"
          </h3>
          <img
            src="https://diivvy.com/wp-content/uploads/2024/01/Blow_Batt-Go-Image.png"
            alt="Blow/Batt & Go"
            className="w-full rounded-lg mb-4"
          />
          <div className="space-y-4">
            <p className="text-gray-300">
              This option involves installing new insulation material at a thermal value of R-38.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Process:</strong> The insulation is installed on top of any existing material currently in the attic space. There is no removal of existing insulation.
            </p>
          </div>
        </div>

        <div className="bg-dark-lighter border-2 border-gold/20 rounded-xl p-6 hover:border-gold cursor-pointer transition-all"
             onClick={() => {
               onUpdate({ insulationType: 'full-removal' });
               onNext();
             }}>
          <h3 className="text-xl font-bold text-white mb-4">
            Type #2: "Full Removal & Replacement"
          </h3>
          <img
            src="http://chooseelite.com/wp-content/uploads/2024/01/Full-Removal-Replacement-Image.png"
            alt="Full Removal & Replacement"
            className="w-full rounded-lg mb-4"
          />
          <div className="space-y-4">
            <p className="text-gray-300">
              This option includes a complete overhaul of the attic insulation.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Process:</strong> Removal of all existing insulation material, debris, and trash. The entire attic is vacuumed clean with an industrial-grade vacuum and sanitized. New insulation material of choice at a thermal value of R-38 is installed throughout the accessible attic space.
            </p>
          </div>
        </div>
      </div>
    </FormStep>
  );
}