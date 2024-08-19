import React from 'react'
import { CardCharts } from '../CardCharts'
import { BarChart } from 'react-native-gifted-charts'

const data = [
    { label: 'Comodato', value: 215 },
    { label: 'Venta Basica', value: 116 },
    { label: 'Financiamiento', value: 56 },
    { label: 'Reactivacion', value: 16 },
    { label: 'Dischange', value: 2 },

]

export default function BarChartNegocio({type} : {type: string}) {
    return (
        <CardCharts title={type}>
            <BarChart
                horizontal
                disableScroll
                barWidth={20}
                hideAxesAndRules
                roundedTop
                showValuesAsTopLabel
                frontColor="#177AD5"
                data={data} 
                showYAxisIndices={false}
                showXAxisIndices={false}
                yAxisLabelContainerStyle={{ opacity: 0, height: 0 }} 
                yAxisThickness={20}
                xAxisThickness={0}
                yAxisExtraHeight={0}
                topLabelContainerStyle={{ width: 40, marginLeft: -10, marginTop: -10 }}
            />
        </CardCharts>
    )
}
