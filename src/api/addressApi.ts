interface ApiResponse {
    district_list: string[];
}

export default async function addressApi() {
    try {
        const url = new URL('http://172.18.2.221:8080/api/v1/gu-info');
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
