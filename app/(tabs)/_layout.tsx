import { Tabs } from "expo-router";
import { BlurView } from "expo-blur";
import { Activity, BarChart3, Dumbbell, House, ScanEye } from "lucide-react-native";
import { View } from "react-native";

import { colors } from "@/constants/colors";
import { useAuthStore } from "@/stores/useAuthStore";

export default function TabLayout() {
  const { isAuthReady } = useAuthStore();
  if (!isAuthReady) return null;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.detail,
        tabBarStyle: {
          position: "absolute",
          left: 24,
          right: 24,
          width: "90%",
          marginLeft: 20,
          bottom: 14,
          height: 64,
          borderRadius: 32,
          backgroundColor: "transparent",
          borderTopWidth: 1,
          borderWidth: 1,
          borderColor: "rgba(228, 190, 186, 0.95)",
          paddingBottom: 6,
          paddingTop: 6,
          elevation: 0,
          shadowColor: colors.textPrimary,
          shadowOpacity: 0.04,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 3 },
          overflow: "hidden",
        },
        tabBarBackground: () => (
          <View style={{ flex: 1, borderRadius: 16, overflow: "hidden" }}>
            <BlurView
              intensity={20}
              tint="light"
              style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 0.7)" }}
            />
          </View> 
        ),
        tabBarItemStyle: {
          borderRadius: 10,
          marginHorizontal: 2,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarIconStyle: {
          marginTop: 0,
          marginBottom: 0,
        },
        tabBarLabelStyle: {
          fontFamily: "DMSans_500Medium",
          fontSize: 10,
          textAlign: "center",
          includeFontPadding: false,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="pose"
        options={{
          title: "Pose",
          tabBarIcon: ({ color, size }) => <Activity color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="analyze"
        options={{
          title: "Analyze",
          tabBarIcon: ({ color, size }) => <ScanEye color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="muscles"
        options={{
          title: "Muscles",
          tabBarIcon: ({ color, size }) => <Dumbbell color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: "Progress",
          tabBarIcon: ({ color, size }) => <BarChart3 color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
