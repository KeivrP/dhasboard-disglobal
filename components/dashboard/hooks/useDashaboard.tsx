import { getIndicadores } from "@/server/APIDasboard";
import { useQuery } from "@tanstack/react-query";

export const useIndicator = ({ month }: { month: string }) =>
  useQuery({
    queryKey: ["indicator"],
    queryFn: () => getIndicadores({ month }),
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
