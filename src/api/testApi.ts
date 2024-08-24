// // pages/api/ai-generate.ts


// import type { NextApiRequest, NextApiResponse } from 'next';

// interface ApiResponse {
//   data: any;  // Replace 'any' with the actual response structure if known
// }

// export async function chatApi(req: NextApiRequest, res: NextApiResponse) {
//   const { promptMessage } = req.query;

//   console.timeLog("check", promptMessage);
  

//   if (typeof promptMessage !== 'string') {
//     // return res.status(400).json({ error: 'Invalid prompt message' });
//   }

//   try {
//     const url = new URL('http://172.18.11.104:8080/api/v1/ai-generate');
//     url.searchParams.append('promptMessage', promptMessage);

//     const response = await fetch(url.toString());

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data: ApiResponse = await response.json();
//     console.log(res.status(200).json(data));
//   } catch (error) {
//     console.error('Error fetching AI response:', error);
//     res.status(500).json({ error: 'Failed to fetch AI response' });
//   }
// }

import type { NextApiRequest } from 'next';

interface ApiResponse {
  data: any;  // Replace 'any' with the actual response structure if known
}

export async function chatApi(req: NextApiRequest): Promise<ApiResponse | { error: string }> {
  const { promptMessage } = req.query;

  console.timeLog("check", promptMessage);
  
  // Validate promptMessage
  if (typeof promptMessage !== 'string') {
    return { error: 'Invalid prompt message' };
  }

  try {
    const url = new URL('http://172.18.8.126:8080/api/v1/ai-generate');
    url.searchParams.append('promptMessage', promptMessage);

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    console.log("checking error :",data)
    // Return the data instead of sending it directly
    return data;
  } catch (error) {
    console.error('Error fetching AI response:', error);
    // Return an error object instead of sending a response
    return { error: 'Failed to fetch AI response' };
  }
}

