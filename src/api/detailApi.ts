interface ApiResponse {
  basic: {
    dowry: null,
    dowry_address: null,
    dowry_price: null,
    dress: null,
    dress_address: null,
    dress_price: null,
    gift: null,
    gift_address: null,
    gift_price: null,
    hall: false,
    hall_address: "",
    hall_price: null,
    make_up: null,
    make_up_address: null,
    make_up_price: null,
    parent_dress: null,
    parent_dress_address: null,
    parent_dress_price: null,
    parent_make_up: null,
    parent_make_up_address: null,
    parent_make_up_price: null,
    studio: null,
    studio_address: null,
    studio_price: null,
    title: "",
    totalPrice: null
  },
  premium: {
    dowry: null,
    dowry_address: null,
    dowry_price: null,
    dress: null,
    dress_address: null,
    dress_price: null,
    gift: null,
    gift_address: null,
    gift_price: null,
    hall: false,
    hall_address: "",
    hall_price: null,
    make_up: null,
    make_up_address: null,
    make_up_price: null,
    parent_dress: null,
    parent_dress_address: null,
    parent_dress_price: null,
    parent_make_up: null,
    parent_make_up_address: null,
    parent_make_up_price: null,
    studio: null,
    studio_address: null,
    studio_price: null,
    title: "",
    totalPrice: null
  }
  }
  
  interface ApiRequest {
    seq: number;
  }
  
  export default async function detailApi(
      req: ApiRequest) {
  
    // const req  = 1;


    
    // console.timeLog("check", req);

  
    try {
  
      const url = new URL('http://172.18.2.221:8080/api/v1/wedding-detail');
  

      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data: ApiResponse = await response.json();
  
      console.log("data: listApi hey hi", data);
  
      return data;
    } catch (error) {
      console.error('Error fetching AI response:', error);
    }
  }
  