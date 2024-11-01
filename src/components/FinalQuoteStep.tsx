import React from 'react';
import { FormStep } from './FormStep';
import { StepProps } from '../types';
import { Calculator, DollarSign } from 'lucide-react';

export function FinalQuoteStep({ data, onNext, onBack }: StepProps) {
  const pricePerSqFt = 1.85;
  const airSealPerSqFt = 0.45;
  const radiantBarrierPerSqFt = 0.75;
  
  const basePrice = data.squareFootage * pricePerSqFt;
  const atticAirSealPrice = data.addOns.atticAirSeal ? data.squareFootage * airSealPerSqFt : 0;
  const radiantBarrierPrice = data.addOns.radiantBarrier ? data.squareFootage * radiantBarrierPerSqFt : 0;
  const totalPrice = basePrice + atticAirSealPrice + radiantBarrierPrice;

  return (
    <FormStep onBack={onBack}>
      <div className="text-center mb-8">
        <div className="inline-block p-3 bg-dark-lighter rounded-full mb-4">
          <Calculator className="w-8 h-8 text-gold" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Your Final Quote
        </h2>
      </div>

      <div className="bg-dark-lighter p-6 rounded-lg mb-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Base Installation</h3>
            <div className="space-y-2 pl-4 border-l-2 border-gold/20">
              <div className="flex justify-between items-center text-gray-300">
                <span>Square Footage</span>
                <span>{data.squareFootage.toLocaleString()} sq ft</span>
              </div>
              <div className="flex justify-between items-center text-gray-300">
                <span>Price per sq ft</span>
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  <span>{pricePerSqFt.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-2 text-white">
                <span>Subtotal</span>
                <span className="font-semibold">${basePrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
              </div>
            </div>
          </div>
          
          {data.addOns.atticAirSeal && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Attic Air Seal</h3>
              <div className="space-y-2 pl-4 border-l-2 border-gold/20">
                <div className="flex justify-between items-center text-gray-300">
                  <span>Price per sq ft</span>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    <span>{airSealPerSqFt.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2 text-white">
                  <span>Subtotal</span>
                  <span className="font-semibold">${atticAirSealPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>
          )}
          
          {data.addOns.radiantBarrier && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Radiant Barrier</h3>
              <div className="space-y-2 pl-4 border-l-2 border-gold/20">
                <div className="flex justify-between items-center text-gray-300">
                  <span>Price per sq ft</span>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    <span>{radiantBarrierPerSqFt.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2 text-white">
                  <span>Subtotal</span>
                  <span className="font-semibold">${radiantBarrierPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>
          )}
          
          <div className="border-t border-gold/20 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-white">Total Price</span>
              <span className="text-xl font-bold text-gold">${totalPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-gradient-to-r from-gold-dark via-gold to-gold-light text-dark py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-colors"
      >
        Save Quote & Contact Me
      </button>
    </FormStep>
  );
}