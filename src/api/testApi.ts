import type { NextApiRequest, NextApiResponse } from 'next';

interface ApiResponse {
  data: any;  // Replace 'any' with the actual response structure if known
}

export default async function chatApi(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { promptMessage } = req.query;

  console.timeLog("check", promptMessage);

  // Validate promptMessage
  if (typeof promptMessage !== 'string') {
    res.status(400).json({ error: 'Invalid prompt message' });
    return;
  }

  try {

    const url = new URL('http://localhost:8080/api/v1/ai-generate');

    url.searchParams.append('promptMessage', promptMessage);

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();

    console.log("Response data:", data);

    // Send the data as a response
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching AI response:', error);
    res.status(500).json({ error: 'Failed to fetch AI response' });
  }
}
