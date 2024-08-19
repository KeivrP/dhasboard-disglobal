export const ReportsName = [
    { value: "ventas_por_almacen", name: "VENTAS POR ALMACEN" },
    { value: "ventas_por_banco", name: "VENTAS POR BANCO" },
    { value: "ventas_por_modelo", name: "VENTAS POR MODELO" },
    { value: "ventas_por_negocio", name: "VENTAS POR NEGOCIO" },
    { value: "ventas_por_operadora", name: "VENTAS POR OPERADORA" },
    { value: "ventas_por_procesadora", name: "VENTAS POR PROCESADORA" },
    { value: "ventas_por_status", name: "Ventas por Status" },
] as Value[];

export const ReportsNameType = {
    ventas_activas: 'VENTAS ACTIVAS',
    ventas_pendientes: 'VENTAS PENDIENTES',
    ventas_por_almacen: 'VENTAS POR ALMACEN',
    ventas_por_banco: 'VENTAS POR BANCO',
    ventas_por_modelo: 'VENTAS POR MODELO',
    ventas_por_negocio: 'VENTAS POR NEGOCIO',
    ventas_por_operadora: 'VENTAS POR OPERADORA',
    ventas_por_procesadora: 'VENTAS POR PROCESADORA',
    ventas_por_status: 'Ventas por Status',
};

export interface IndicadoresApi {
    ventas_activas: number;
    ventas_pendientes: number;
    ventas_por_almacen: VentasPor[];
    ventas_por_banco: VentasPor[];
    ventas_por_modelo: VentasPor[];
    ventas_por_negocio: VentasPor[];
    ventas_por_operadora: VentasPor[];
    ventas_por_procesadora: VentasPor[];
    ventas_por_status: VentasPor[];
}

export interface VentasPor {
    count: number;
    description: string;
}

export type Value = {
    name: string
    value: string
}

export interface SalesData {
    active_sales: number;
    pending_sales: number;
}
