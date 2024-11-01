import { VercelRequest, VercelResponse } from '@vercel/node';

interface ApifyInput {
  addresses: string[];
  extractBuildingUnits: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { address } = req.body;

  if (!address) {
    return res.status(400).json({ error: 'Address is required' });
  }

  const input: ApifyInput = {
    addresses: [address],
    extractBuildingUnits: "all"
  };

  try {
    const response = await fetch(
      "https://api.apify.com/v2/acts/maxcopell~zillow-detail-scraper/run-sync-get-dataset-items",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.APIFY_TOKEN}`
        },
        body: JSON.stringify(input)
      }
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Property details fetch error:', error);
    return res.status(500).json({ 
      error: "Failed to fetch property details",
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}