import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { UserApi } from "../../../Api/";
import { IUserVerifyResponseDto } from "common/Dto/User.dto";

export function useHome() {
  const history = useHistory();
  const queryClient = useQueryClient();
  const [serialNumber, setSerialNumber] = useState<string>("");
  const { refetch, data } = useQuery<IUserVerifyResponseDto>(
    "verify",
    async () =>
      await UserApi.verifyUser({ serialNumber: Number(serialNumber) }),
    {
      enabled: false,
    }
  );

  function onSubmit() {
    refetch();
  }

  useEffect(() => {
    if (!data) return;

    if (data.error || !data.data) {
      queryClient.removeQueries("verify");
      setSerialNumber("");
    }

    if (data.data) {
      history.push("/products");
    }
  }, [data, history, queryClient]);

  return {
    serialNumber,
    setSerialNumber,
    onSubmit,
  };
}
