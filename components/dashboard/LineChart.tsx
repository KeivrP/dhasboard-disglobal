import React from 'react'
import { Text, View } from 'react-native';
import { LineChart as LineChartComponent} from 'react-native-gifted-charts'
import { CardCharts } from '../CardCharts';


export default function LineChart() {
    const customDataPoint = () => {
        return (
            <View
            style={{
                width: 20,
                height: 20,
                backgroundColor: 'white',
                borderWidth: 4,
                borderRadius: 10,
                borderColor: '#07BAD1',
            }}
            />
        );
    };
    const customLabel = (val: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined) => {
        return (
            <View style={{width: 70, marginLeft: 7}}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>{val}</Text>
            </View>
        );
    };
    const data = [
        {
            value: 100,
            labelComponent: () => customLabel('22 Nov'),
            customDataPoint: customDataPoint,
        },
        {
            value: 140,
            hideDataPoint: true,
        },
        {
            value: 250,
            customDataPoint: customDataPoint,
        },
        {
            value: 290,
            hideDataPoint: true,
        },
        {
            value: 410,
            labelComponent: () => customLabel('24 Nov'),
            customDataPoint: customDataPoint,
            showStrip: true,
            stripHeight: 190,
            stripColor: 'black',
            dataPointLabelComponent: () => {
            return (
                <View
                style={{
                    backgroundColor: 'black',
                    paddingHorizontal: 8,
                    paddingVertical: 5,
                    borderRadius: 4,
                }}>
                <Text style={{color: 'white'}}>410</Text>
                </View>
            );
            },
            dataPointLabelShiftY: -70,
            dataPointLabelShiftX: -4,
        },
        {
            value: 440,
            hideDataPoint: true,
        },
        {
            value: 300,
            customDataPoint: customDataPoint,
        },
        {
            value: 280,
            hideDataPoint: true,
        },
        {
            value: 180,
            labelComponent: () => customLabel('26 Nov'),
            customDataPoint: customDataPoint,
        },
        {
            value: 150,
            hideDataPoint: true,
        },
        {
            value: 150,
            customDataPoint: customDataPoint,
        },
    ];

    const renderDot = (color: string) => {
        return (
            <View
                style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: color,
                    marginRight: 10,
                }}
            />
        );
    };


    const renderLegendComponent = () => {
        return (
            <>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingVertical: 10,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: 150,
                            marginRight: 20,
                        }}>
                        {renderDot('#009FFf')}
                        <Text style={{ color: 'white' }}>Meta alcanzar: 629</Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', width: 150 }}>
                        {renderDot('#93FCF8')}
                        <Text style={{ color: 'white' }}>Metas Diarias 405</Text>
                    </View>
                </View>

            </>
        );
    };
    return (
        <CardCharts title="Line Chart">
            <LineChartComponent
                thickness={6}
                color="#07BAD1"
                maxValue={600}
                noOfSections={3}
                areaChart
                yAxisTextStyle={{color: 'lightgray'}}
                data={data}
                curved
                startFillColor={'rgb(84,219,234)'}
                endFillColor={'rgb(84,219,234)'}
                startOpacity={0.4}
                endOpacity={0.4}
                spacing={30}
                rulesColor="gray"
                rulesType="solid"
                initialSpacing={10}
                yAxisColor="lightgray"
                xAxisColor="lightgray"
            />
            {renderLegendComponent()}
        </CardCharts>
        );
}
