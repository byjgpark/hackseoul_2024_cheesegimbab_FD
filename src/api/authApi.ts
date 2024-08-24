

import type { NextApiRequest, NextApiResponse } from 'next';

interface ApiResponse {
  data: any;  // Replace 'any' with the actual response structure if known
}

interface apiRequest {
  req: {
  "member_id": string;
  "member_pw": string;
  }
  
}

export default async function loginUser(req: apiRequest, res: NextApiResponse): Promise<void> {
  // const { promptMessage } = req.query;

  // console.log("check hello123");

  // console.timeLog("check", promptMessage);

  // // Validate promptMessage
  // if (typeof promptMessage !== 'string') {
  //   res.status(400).json({ error: 'Invalid prompt message' });
  //   return;
  // }

  try {
    const url = 'http://localhost:8080/api/v1/member-login'; // Your API endpoint

    // Create the POST request options
    const options = {
      method: 'POST', // Use POST method
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
      body: JSON.stringify({ req }), // Convert the body to a JSON string
    };

    const response = await fetch(url, options);

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
