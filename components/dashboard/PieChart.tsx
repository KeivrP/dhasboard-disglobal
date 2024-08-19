import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { CardCharts } from "../CardCharts";
import { calculatePendingSalesPercentage } from "@/utills";
import { SalesData } from "./Dashboard-type";
require('moment/locale/es');

export const PieChartComponent = ({ active_sales, pending_sales }: SalesData) => {
    var moment = require('moment');
    const nameMonth = moment.months(moment().month() - 1);
    const percentage = calculatePendingSalesPercentage({ active_sales, pending_sales });
    // TODO: Pensar como manejar el cambio de fecha por mes desde este mes hasta enero de este ano

    const pieData = [
        {
            value: Number(active_sales),
            color: '#009FFF',
            gradientCenterColor: '#006DFF',
            focused: true,
        },
        { value: Number(pending_sales), color: '#93FCF8', gradientCenterColor: '#3BE9DE' },

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
                        marginBottom: 5,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: 100,
                            marginRight: 20,
                        }}>
                        {renderDot('#009FFf')}
                        <Text style={{ color: 'white' }}>Gestion: {active_sales}</Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {renderDot('#93FCF8')}
                        <Text style={{ color: 'white' }}>Pendiente por alcanzar: {pending_sales}</Text>
                    </View>
                </View>

            </>
        );
    };

    return (

        <CardCharts title={`Cifras de ventas de ${nameMonth}`}>

            <View style={{ padding: 20, alignItems: 'center' }}>
                <PieChart
                    isAnimated
                    data={pieData}
                    donut
                    showGradient
                    sectionAutoFocus
                    radius={90}
                    textSize={16}
                    innerRadius={60}
                    innerCircleColor={'#232B5D'}
                    centerLabelComponent={() => {
                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text
                                    style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                                    {percentage}%
                                </Text>
                                {/*  <Text
                                    style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>
                                    {active_sales}
                                </Text> */}
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