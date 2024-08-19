import { Text, View } from "react-native";
import SkeletonCard from "./ui/skeleton/SkeletonCard";

interface CardProps {
  children: React.ReactNode;
  title: string;
  isLoading?: boolean;
}

export const CardCharts = ({
  children,
  title,
  isLoading = false,
}: CardProps) => {
  return (
    <>
      {isLoading ? (
        <SkeletonCard style={{ margin: 10}}  />
      ) : (
        <View
          style={{
            margin: 10,
            padding: 16,
            borderRadius: 20,
            backgroundColor: "#232B5D",
          }}
        >
          <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
            {title}
          </Text>
          {children}
        </View>
      )}
    </>
  );
};
