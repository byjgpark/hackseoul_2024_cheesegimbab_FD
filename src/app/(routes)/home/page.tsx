"use client";

import React from "react";
import First from "./sections/first";
import { useAuth } from "@/app/authContext";
import listApi from "@/api/listApi";

interface Props {
    params: {
        process: string;
    };
}

interface ListItem {
    id: number;
    title: string;
    subTitle: string;
  }
  
  interface ApiResponse {
    weddingListList: ListItem[];
  }
  
  const Page: React.FC<Props> = () => {
    const { memberSeq } = useAuth();
    const [listData, setListData] = React.useState<ListItem[]>([]);
  
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const response: ApiResponse = await listApi(1);
          console.log("Response data: listApi", response);
          if (response && response.weddingListList) {
            console.log("Response data: listApi", response.weddingListList);
            setListData(response.weddingListList); // Pass the array directly
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [memberSeq]);
  
    const renderProcess = () => {
      return <First prop={listData}/>;
    };
  
    return (
      <main>
        <div className="flex justify-center">{renderProcess()}</div>
      </main>
    );
  };
  
  export default Page;
  
