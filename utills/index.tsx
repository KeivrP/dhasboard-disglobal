import { IndicadoresApi, SalesData } from "@/components/dashboard/Dashboard-type";

export function ConvertirObjArray(objeto: IndicadoresApi) {
    const resultado = [];
    for (const [key, value] of Object.entries(objeto)) {
        resultado.push({ key: key, value: value });
    }
    return resultado;
}


export function calculatePendingSalesPercentage(salesData: SalesData): number {
    const { active_sales, pending_sales } = salesData;
    const total_sales = active_sales + pending_sales;
    if (total_sales === 0) {
        return 0; // Evitar división por cero
    }
    const pending_sales_percentage = (active_sales / total_sales) * 100;
    return Number(pending_sales_percentage.toFixed(2));
}

