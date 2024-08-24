import type { NextApiResponse } from 'next';

interface ApiResponse {
  basic: {
    title: string;
    price: number;
    solution: string;
  },
  premium: {
    title: string;
    price: number;
    solution: string;
  };
}

interface ApiRequest {
  query: {
    promptMessage: string
  }
}

export default async function chatApi(
    req: ApiRequest) {

  const { promptMessage } = req.query;

  console.timeLog("check", promptMessage);

  try {

    const url = new URL('http://localhost:8080/api/v1/ai-generate');

    url.searchParams.append('promptMessage', promptMessage);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();

    console.log("Response data:", data);

    return data;
  } catch (error) {
    console.error('Error fetching AI response:', error);
  }
}
