interface PropertyDetails {
  squareFootage: number;
  address: string;
  propertyType?: string;
  yearBuilt?: number;
}

export async function validateAddress(address: string): Promise<PropertyDetails> {
  // For development, return mock data immediately
  return generateFallbackData(address);
  
  // The API integration will be enabled when deployed to Vercel
  try {
    const response = await fetch('/api/fetchPropertyDetails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch property details');
    }

    const data = await response.json();
    const propertyData = data[0];

    if (!propertyData) {
      throw new Error('No property details found');
    }

    return {
      squareFootage: propertyData.livingArea || generateDefaultFootage(),
      address: propertyData.address || address,
      propertyType: propertyData.homeType || 'Single Family Home',
      yearBuilt: propertyData.yearBuilt || generateDefaultYear()
    };
  } catch (error) {
    console.error('Error fetching property details:', error);
    return generateFallbackData(address);
  }
}

// Helper functions for fallback data
function generateDefaultFootage(): number {
  return 1500 + Math.floor(Math.random() * 2000); // Random between 1500-3500
}

function generateDefaultYear(): number {
  return 1960 + Math.floor(Math.random() * 60); // Random between 1960-2020
}

function generateFallbackData(address: string): PropertyDetails {
  return {
    squareFootage: generateDefaultFootage(),
    address: address.trim(),
    propertyType: 'Single Family Home',
    yearBuilt: generateDefaultYear()
  };
}