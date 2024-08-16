import React, { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

interface TabPanelProps {
    children: React.ReactNode[];
}

const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <View>
            <View>
                {children.map((child, index) => (
                    <Pressable
                        key={index}
                        onPress={() => handleTabClick(index)}
                        style={styles.tab}
                    >
                        <Text>
                            Tab {index + 1}
                        </Text>
                    </Pressable>
                ))}
            </View>
            <View>{children[activeTab]}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    tab: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tabActive: {
        borderBottomColor: '#000',
    },
    tabContent: {
        padding: 10,
    },
})

export default TabPanel;