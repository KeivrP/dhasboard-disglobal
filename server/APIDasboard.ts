import { IndicadoresApi } from "@/components/dashboard/Dashboard-type";
import { ToastError } from "@/components/ui/toast";


const API = process.env.EXPO_PUBLIC_API_URL;

export const getIndicadores = async ({month}: {month : string}): Promise<IndicadoresApi> => {
  try {
    const res = await fetch(`${API}/indicators/${month}`, {
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    ToastError("Error", "Error fetching data");
    throw error;
  }
}
