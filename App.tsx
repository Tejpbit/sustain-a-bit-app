import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { LoginScreen } from "./src/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderText } from "./src/shared_styled";
import { PressableText } from "./src/components/PressableText";
import { Space } from "./src/components/Space";
import { FontAwesome5 } from "@expo/vector-icons";

function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginLeft: 50, marginTop: "10%" }}>
        <HeaderText>Welcome, User!</HeaderText>
        <Text style={{ fontSize: 18, marginTop: "20%", marginBottom: "20%" }}>
          We're so happy to have you here!
        </Text>
        <PressableText text="Find new habits" onPress={() => {}} />
        <Space />
        <PressableText text="Find friends" onPress={() => {}} />
      </View>
    </View>
  );
}

function UserScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function FlowScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Flow!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView>
      <LoginScreen>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: () => <FontAwesome5 name="lightbulb" size={24} />,
              }}
            />
            <Tab.Screen
              name="Flow"
              component={FlowScreen}
              options={{
                tabBarIcon: () => <FontAwesome5 name="list" size={24} />,
              }}
            />
            <Tab.Screen
              name="Me"
              component={UserScreen}
              options={{
                tabBarIcon: () => <FontAwesome5 name="user" size={24} />,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </LoginScreen>
    </SafeAreaView>
  );
}
