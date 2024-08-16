import { Text, View } from "react-native";

interface CardProps {
    children: React.ReactNode;
    title: string;
}

export const CardCharts = ({ children, title }: CardProps) => {
    return (
        <View
            style={{
                margin: 10,
                padding: 16,
                borderRadius: 20,
                backgroundColor: '#232B5D',
            }}>
            <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>
                {title}
            </Text>
            {children}
        </View>
    );
};