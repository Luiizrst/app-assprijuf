import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as ScreenOrientation from "expo-screen-orientation";
import { HeaderBackButton } from '@react-navigation/stack';


const Stack = createStackNavigator();

import Login from './pages/aplicativo/Login/index';
import ForgotPassword from './pages/aplicativo/ForgotPassword'
import CadastreUser from './pages/aplicativo/CadastreUser/index';
import Menu from './pages/aplicativo/Menu/index';
import Calendar from './pages/aplicativo/Calendar/index';
import Carteirinha from './pages/aplicativo/Carteirinha/index';
import User from './pages/aplicativo/User/index';
import UserEdit from './pages/aplicativo/UserEdit/index';
import PasswordEdit from './pages/aplicativo/PasswordEdit/index';
import Partners from './pages/aplicativo/Partners/index';
import Partner from './pages/aplicativo/Partner/index';

import Management from './pages/administrador/Management/index';
import ManagementEvents from './pages/administrador/ManagementEvents/index';
import ManagementPartners from './pages/administrador/ManagementPartners/index';
import ManagementUsers from './pages/administrador/ManagementUsers/index';
import AcceptUsers from './pages/administrador/AcceptUsers/index';
import UserView from './pages/administrador/UserView/index';
import UserEditAdm from './pages/administrador/UserEditAdm/index';
import Event from './pages/administrador/Event/index';
import EventEdit from './pages/administrador/EventEdit/index';
import PartnerEdit from './pages/administrador/PartnerEdit/index';
import CadastrePartner from './pages/administrador/CadastrePartner/index';
import CadastreEvent from './pages/administrador/CadastreEvent/index';

const Routes = (props) => {
    return (
        <NavigationContainer>

            {/* Public Routes */}

            <Stack.Navigator headerTitleAlign={"center"}>

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="CadastreUser"
                    component={CadastreUser}
                    options={{
                        title: "Cadastrar",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 30,
                        },
                    }}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{
                        title: "Recuperação de Senha",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 18,
                        },
                    }}
                />

                {/* Private Routes */}

                <Stack.Screen
                    name="Menu"
                    component={Menu}
                    options={{
                        headerShown: false,
                    }}

                />
                <Stack.Screen
                    name="Carteirinha"
                    component={Carteirinha}
                    options={{
                        headerShown: false,
                    }}
                /* options={{
                    title: "Carteirinha",
                    headerStyle: {
                        backgroundColor: "#9A2B2B"
                    },
                    headerTitleAlign: "center",
                    headerStatusBarHeight: 8,
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontSize: 30,
                    },
                    headerLeft: false,/* ({goBack}) => (
                        <HeaderBackButton
                            onPress={() => 
                                goBack()
                            }
                        />
                    ) 
                }} */
                />
                <Stack.Screen
                    name="Partners"
                    component={Partners}
                    options={{
                        title: "Parceiros",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 30,
                        },
                    }}
                />
                <Stack.Screen
                    name="Partner"
                    component={Partner}
                    options={{
                        title: "Parceiro",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 30,
                        },
                    }}
                />
                <Stack.Screen
                    name="PartnerEdit"
                    component={PartnerEdit}
                    options={{
                        title: "Parceiro",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 30,
                        },
                    }}
                />
                <Stack.Screen
                    name="Calendar"
                    component={Calendar}
                    options={{
                        title: "Calendario",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 30,
                        },
                    }}
                />

                <Stack.Screen
                    name="User"
                    component={User}
                    options={{
                        title: "Informações",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 30,
                        },
                    }}
                />
                <Stack.Screen
                    name="UserView"
                    component={UserView}
                    options={{
                        title: "Informações",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 30,
                        },
                    }}
                />

                <Stack.Screen
                    name="UserEditAdm"
                    component={UserEditAdm}
                    options={{
                        title: "Informações",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 30,
                        },
                    }}
                />

                <Stack.Screen
                    name="UserEdit"
                    component={UserEdit}
                    options={{
                        title: "Informações",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 30,
                        },
                    }}
                />

                <Stack.Screen
                    name="PasswordEdit"
                    component={PasswordEdit}
                    options={{
                        title: "Alterar Senha",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 30,
                        },
                    }}
                />

                <Stack.Screen
                    name="Event"
                    component={Event}
                    options={{
                        title: "Informações",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 30,
                        },
                    }}
                />
                <Stack.Screen
                    name="EventEdit"
                    component={EventEdit}
                    options={{
                        title: "Informações",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 30,
                        },
                    }}
                />
                <Stack.Screen
                    name="Management"
                    component={Management}
                    options={{
                        title: "Gerenciamento",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 30,
                        },
                    }}
                />
                <Stack.Screen
                    name="ManagementEvents"
                    component={ManagementEvents}
                    options={{
                        title: "Eventos",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 30,
                        },
                    }}
                />
                <Stack.Screen
                    name="ManagementPartners"
                    component={ManagementPartners}
                    options={{
                        title: "Parceiros",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 30,
                        },
                    }}
                />
                <Stack.Screen
                    name="ManagementUsers"
                    component={ManagementUsers}
                    options={{
                        title: "Usuários",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 30,
                        },
                    }}
                />
                <Stack.Screen
                    name="AcceptUsers"
                    component={AcceptUsers}
                    options={{
                        title: "Usuários pendentes",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 25,
                        },
                    }}
                />
                <Stack.Screen
                    name="CadastrePartner"
                    component={CadastrePartner}
                    options={{
                        title: "Cadastrar",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 30,
                        },
                    }}
                />
                <Stack.Screen
                    name="CadastreEvent"
                    component={CadastreEvent}
                    options={{
                        title: "Cadastrar",
                        headerStyle: {
                            backgroundColor: "#9A2B2B"
                        },
                        headerTitleAlign: "center",
                        headerStatusBarHeight: 40,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 30,
                        },
                    }}
                />

            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Routes;
