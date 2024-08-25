interface ListItem {
  id: number;
  title: string;
  subTitle: string;
}

interface ApiResponse {
  weddingListList: ListItem[];
}
  
  export default async function listApi(
      req: number) {
  
    

    console.log("check promptMessage", req);
  
    
    console.timeLog("check", req);

  
    try {
  
      const url = new URL('http://172.18.2.221:8080/api/v1/wedding-list');
  

      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      console.log("Response data: listApi", data);
  
      return data;
    } catch (error) {
      console.error('Error fetching AI response:', error);
    }
  }
  