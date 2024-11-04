import { useEffect, useState } from "react";

const useLoading = (duration) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after the specified duration
    }, duration); // Duration in milliseconds

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [duration]);

  return isLoading;
};

export default useLoading;
