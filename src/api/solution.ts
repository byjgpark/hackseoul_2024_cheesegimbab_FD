interface ApiRequest {
    member_seq: number;
    region: string;
    budget: number;
    hall: boolean;
    hall_per: number;
    studio: boolean;
    studio_per: number;
    dress: boolean;
    dress_per: number;
    make_up: boolean;
    make_up_per: number;
    gift: boolean;
    gift_per: number;
    dowry: boolean;
    dowry_per: number;
    parent_make_up: boolean;
    parent_make_up_per: number;
    parent_dress: boolean;
    parent_dress_per: number;
}


export default async function solution(
    req: ApiRequest) {

    try {

        console.log("API request:", req);

        const url = new URL('http://localhost:8080/api/v1/ai-recommendation');

        const response = await fetch(url.toString(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req),
        });
        console.log("iftetsss");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching AI response:', error);
    }
}
