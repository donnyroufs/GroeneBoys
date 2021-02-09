import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { UserApi } from "../../../Api/";

export function useHome() {
  const history = useHistory();
  const queryClient = useQueryClient();
  const [serialKey, setSerialKey] = useState<string>("");
  const { refetch, data } = useQuery(
    "verify",
    async () => await UserApi.verifyUser(Number.parseInt(serialKey)),
    {
      enabled: false,
    }
  );

  function onSubmit() {
    refetch();
  }

  useEffect(() => {
    // @ts-ignore
    if (!data) return;

    if (data.error || !data.data) {
      queryClient.removeQueries("verify");
      setSerialKey("");
    }

    if (data.data) {
      history.push("/products");
    }
  }, [data, history, queryClient]);

  return {
    serialKey,
    setSerialKey,
    onSubmit,
  };
}
