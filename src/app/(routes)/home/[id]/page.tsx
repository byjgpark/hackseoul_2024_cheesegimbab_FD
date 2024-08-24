'use client';

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react';
import TwoCard from "../../twocard/section/two-card";

const BlogPost: React.FC = () => {
  const router = useRouter();
  const [id, setId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (router.query.id) {
      setId(router.query.id as string);
    }
  }, [router.query]);

  console.log("check id", id);
  
  if (!id) {
    return <div>Loading...</div>; // Optionally render a loading state while waiting for the id
  }

  return (
    <main>
      <TwoCard />
    </main>
  );
};

export default BlogPost;
