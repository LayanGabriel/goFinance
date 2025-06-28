import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Dashboard } from "../screens/Dashboard";
import { Register } from "../screens/Register";
import { Summary } from "../screens/Summary";
import theme from "../global/styles/theme";
import { serializer } from "../../metro.config";
import { MaterialIcons } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <Navigator id={undefined}
            screenOptions={{
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                }}
        >
            <Screen 
                name = "listagem"
                component = {Dashboard}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <Screen
                name = "Cadastrar"
                component = {Register}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Feather
                            name="dollar-sign"
                            size={size}
                            color={color}
                        />
                    ))
                }}  
            />

            <Screen
                name = "Resumo"
                component = {Summary}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Entypo
                            name="circular-graph"
                            size={size}
                            color={color}
                        />
                    ))
                }}  
            />
        </Navigator>
    )
}