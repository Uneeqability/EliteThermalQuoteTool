import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { AddressStep } from './components/AddressStep';
import { ConfirmFootageStep } from './components/ConfirmFootageStep';
import { RoofTypeStep } from './components/RoofTypeStep';
import { InsulationTypeStep } from './components/InsulationTypeStep';
import { PriceStep } from './components/PriceStep';
import { AddOnsStep } from './components/AddOnsStep';
import { FinalQuoteStep } from './components/FinalQuoteStep';
import { ContactStep } from './components/ContactStep';
import { ThankYouStep } from './components/ThankYouStep';
import { FormData } from './types';

function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    address: '',
    squareFootage: 0,
    roofType: '',
    insulationType: '',
    addOns: {
      atticAirSeal: false,
      radiantBarrier: false
    },
    contact: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    estimatedPrice: 0
  });

  const handleUpdate = (updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => Math.max(0, prev - 1));

  const steps = [
    <AddressStep 
      key="address"
      data={formData}
      onUpdate={handleUpdate}
      onNext={nextStep}
    />,
    <ConfirmFootageStep
      key="confirm-footage"
      data={formData}
      onUpdate={handleUpdate}
      onNext={nextStep}
      onBack={prevStep}
    />,
    <RoofTypeStep
      key="roof-type"
      data={formData}
      onUpdate={handleUpdate}
      onNext={nextStep}
      onBack={prevStep}
    />,
    <InsulationTypeStep
      key="insulation-type"
      data={formData}
      onUpdate={handleUpdate}
      onNext={nextStep}
      onBack={prevStep}
    />,
    <PriceStep
      key="price"
      data={formData}
      onUpdate={handleUpdate}
      onNext={nextStep}
      onBack={prevStep}
    />,
    <AddOnsStep
      key="add-ons"
      data={formData}
      onUpdate={handleUpdate}
      onNext={nextStep}
      onBack={prevStep}
    />,
    <FinalQuoteStep
      key="final-quote"
      data={formData}
      onNext={nextStep}
      onBack={prevStep}
    />,
    <ContactStep
      key="contact"
      data={formData}
      onUpdate={handleUpdate}
      onNext={nextStep}
      onBack={prevStep}
    />,
    <ThankYouStep
      key="thank-you"
    />
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-deep to-dark-light py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Logo />
        {steps[step]}
      </div>
    </div>
  );
}

export default App;