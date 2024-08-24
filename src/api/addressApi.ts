import type { NextApiResponse } from "next";

// Define an interface for the expected structure of the response data
interface Address {
    value: string;
    label: string;
}

interface ApiResponse {
    data: Address[]; // Assuming the API returns an array of Address objects
}

export default async function addressApi(
    p: {},
    res: { status: (statusCode: number) => { json: (data: any) => any } }
): Promise<void> {
    try {
        const url = new URL('http://localhost:8080/api/v1/address');
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ApiResponse = await response.json();

        console.log("Response data:", data);

        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching AI response:', error);
        res.status(500).json({ error: 'Failed to fetch AI response' });
    }
}
