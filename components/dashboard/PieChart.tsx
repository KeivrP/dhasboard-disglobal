import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { CardCharts } from "../CardCharts";

export const PieChartExmaple = () => {
    const pieData = [
        {
            value: 30,
            color: '#009FFF',
            gradientCenterColor: '#006DFF',
            focused: true,
        },
        { value: 16, color: '#93FCF8', gradientCenterColor: '#3BE9DE' },

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
                        marginBottom: 10,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: 120,
                            marginRight: 20,
                        }}>
                        {renderDot('#009FFf')}
                        <Text style={{ color: 'white' }}>Gestion: 629</Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', width: 120 }}>
                        {renderDot('#93FCF8')}
                        <Text style={{ color: 'white' }}>Pendiente por alcanzar: 405</Text>
                    </View>
                </View>

            </>
        );
    };

    return (

        <CardCharts title="Cifras de ventas de Agosto">

            <View style={{ padding: 20, alignItems: 'center' }}>
                <PieChart
                    data={pieData}
                    donut
                    showGradient
                    sectionAutoFocus
                    radius={90}
                    innerRadius={60}
                    innerCircleColor={'#232B5D'}
                    centerLabelComponent={() => {
                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text
                                    style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                                    39% 
                                </Text>
                                <Text
                                    style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>
                                 1034
                                </Text>
                                {/*<Text style={{fontSize: 14, color: 'white'}}>Excellent</Text> */}
                            </View>
                        );
                    }}
                />
            </View>
            {renderLegendComponent()}
        </CardCharts>
    );
}