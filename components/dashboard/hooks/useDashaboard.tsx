import { getDataRickyAndMortyAPI } from "@/server/APIDasboard";
import { useQuery } from "@tanstack/react-query";

export const useDataRickyandMorty = () =>
  useQuery({
    queryKey: ["rycky-and-morty"],
    queryFn: getDataRickyAndMortyAPI,
  });
/* 
const { mutate: resendSignUpCode, isPending: sendingCode } = useMutation({
        mutationFn: resendSignUpCodeAction,
        onSuccess: (_data, vars) => {
          authNavigation.navigate('ConfirmCode', { email: vars.email });
        },
        onError: (err) => {
          ToastError('¡Error!', err.message);
          console.error('err.message ddd  ', err.message);
        }
      }); */
