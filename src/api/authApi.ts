interface ApiResponse {
  code: string;
  member_seq: number;
}

interface MemberApiRequest {
  member_id: string;
  member_pw: string;
}

export default async function loginUser(req: MemberApiRequest): Promise<ApiResponse | null> {
  try {
    const url = 'http://172.18.8.126:8080/api/v1/member-login';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req),
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();

    console.log("Response data:", data);

    return data;

  } catch (error) {
    console.error('Error fetching AI response:', error);
    return null;  // 오류가 발생하면 null 반환
  }
}
