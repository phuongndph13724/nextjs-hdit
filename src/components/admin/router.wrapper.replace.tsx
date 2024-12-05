"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface RouterWrapperProps {
  data: {
    results: any;
    meta: any;
  };
  current: number;
  pageSize: number;
}

const RouterWrapper: React.FC<RouterWrapperProps> = ({
  current,
  pageSize,
  data,
}) => {
  const router = useRouter();

  useEffect(() => {
    if (data.meta.current > data.meta.pages) {
      // Cập nhật URL khi current thay đổi
      router.replace(`?current=${1}&pageSize=${pageSize}`);
    } else if (data.results.length === 0 && data.meta.current > 1) {
      // Cập nhật URL khi current thay đổi
      router.replace(`?current=${current - 1}&pageSize=${pageSize}`);
    }
  }, [data.results]);

  return null;
};

export default RouterWrapper;
