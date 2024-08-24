interface ApiRequest {
    "member_seq": number,
    "region": string,
    "budget": number,
    "hall": boolean,
    "studio": boolean,
    "dress": boolean,
    "make_up": boolean,
    "gift": boolean,
    "dowry": boolean,
    "parent_make_up": boolean,
    "parent_dress": boolean,
}

export default async function chatApi(
    req: ApiRequest) {

    try {

        console.log("API request:", req);

        const url = new URL('http://172.18.2.221:8080/api/v1/ai-recommendation');

        const response = await fetch(url.toString(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();


    } catch (error) {
        console.error('Error fetching AI response:', error);
    }
}
