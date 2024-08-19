import React, { useMemo } from 'react'
import { BarChart } from 'react-native-gifted-charts'
import { IndicadoresApi, Value, ReportsNameType, VentasPor } from './Dashboard-type'
import { View } from 'react-native'
import { ConvertirObjArray } from '@/utills'
import { ScrollView } from 'react-native-gesture-handler'

interface Props {
    type: Value
    data: IndicadoresApi | undefined
}

export default function BarChartComponents({ type, data }: Props) {

    //TODO: agregar funcuionalikdad para sacar el maximo de la grafica dependiendo el maximo del count y sumandole 100

    const cleanedData = useMemo(() => {
        const dataFilter = ConvertirObjArray(data!);
        const a = dataFilter.filter((a) => a.key === type.value);
        return a[0].value.map((item: VentasPor) => ({
            label: item.description,
            value: item.count
        }));
    }, [data, type]);

    //TODO: Cambair el color de las lineas de la grafica que siguen oscura

    //TODO: Manejar mejor el titulo y la logica de los name de la grafica

    return (
        <View style={{ marginTop: 40 }} >
            <ScrollView>
                {type.name === ReportsNameType.ventas_por_procesadora ? (
                    <BarChart
                        noOfSections={4}
                        maxValue={800}
                        data={cleanedData}
                        isAnimated
                        frontColor="#177AD5"
                        showValuesAsTopLabel  // Show values on top of the bars???
                        topLabelContainerStyle={{ width: 40, marginLeft: -10, marginTop: -10, }}
                        roundedTop
                        showYAxisIndices={false}
                        showXAxisIndices={false}
                        topLabelTextStyle={{ fontSize: 14, color: 'white' }}
                        xAxisLabelTextStyle={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginRight: 10, marginLeft: -10 }}
                        xAxisTextNumberOfLines={2}


                    />) :
                    <BarChart
                        width={250} // Width of the chart
                        height={250}
                        horizontal
                        noOfSections={4}
                        data={cleanedData}
                        frontColor="#177AD5"
                        showValuesAsTopLabel  // Show values on top of the bars???
                        topLabelContainerStyle={{ width: 40, marginLeft: -10, marginTop: -10, }}
                        roundedTop
                        showYAxisIndices={false}
                        showXAxisIndices={false}
                        topLabelTextStyle={{ fontSize: 14 }}
                        xAxisLabelTextStyle={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginRight: 10, marginLeft: -14 }}
                        xAxisTextNumberOfLines={2}
                    />}
            </ScrollView>
        </View>
    )
}
