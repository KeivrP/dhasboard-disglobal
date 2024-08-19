import { Text, View } from "react-native";
import SkeletonCard from "./ui/skeleton/SkeletonCard";
import { backgroundCard } from "@/constants/Colors";

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
            marginHorizontal: 15,
            marginVertical: 10,
            padding: 10,
            marginBottom: -1,
            borderRadius: 20,
            backgroundColor: backgroundCard,
          }}
        >
          <Text style={{ color: "white", fontSize: 17, fontWeight: "bold", marginBottom: 10}}>
            {title}
          </Text>
          {children}
        </View>
      )}
    </>
  );
};
