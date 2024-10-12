import { useEffect, useState } from "react";

type AsyncFn<T> = () => Promise<T>;
type ExtraParams = {
  onError?: (err: any) => void;
};

const useApi = <T = any,>(fn: AsyncFn<T>, params?: ExtraParams) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fn()
      .then((resp) => {
        setData(resp);
      })
      .catch((err) => {
        setError(err);
        if (typeof params?.onError == "function") {
          params.onError(err);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error } as const;
};

export default useApi;
