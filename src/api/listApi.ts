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
    member_seq: number;
  }
  
  export default async function listApi(
      req: ApiRequest) {
  
    // const req  = 1;

    console.log("check promptMessage", req);
  
    
    console.timeLog("check", req);

  
    try {
  
      const url = new URL('http://172.18.2.221:8080/api/v1/wedding-list');
  
      url.searchParams.append('member_seq', req.toString());
  
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data: ApiResponse = await response.json();
  
      console.log("Response data: listApi", data);
  
      return data;
    } catch (error) {
      console.error('Error fetching AI response:', error);
    }
  }
  