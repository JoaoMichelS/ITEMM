import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import NewUserScreen from './NewUserScreen';
import MainScreen from './MainScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import NovoChamado from './NovoChamado';
import MainOperador from './MainOperador';
import DepartamentoOP from './DepartamentoOP';
import Perfil from './Perfil';
import Configuracoes from './Configuracoes';
import ResponderChamado from './ResponderChamado';
import DepartamentoPedagogico from './DepartamentoPedagogico';
import Notificacoes from './Notificacoes';
import Header from './HeaderPrincipal';
import MenuScreen from './MenuScreen';
import Chamados from './MeusChamados';
import DepartamentoComercial from './DepartamentoComercial';
import DepartamentoPessoal from './DepartamentoPessoal';
import DepartamentoSocial from './DepartamentoSocial';
import DepartamentoSelecao from './DepartamentoSelecao';


const Stack = createStackNavigator(); 

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pessoal">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="NewUser" component={NewUserScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="NovoChamado" component={NovoChamado} />
        <Stack.Screen name="MainOperador" component={MainOperador} />
        <Stack.Screen name="Departamentos" component={DepartamentoOP} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Configuracoes" component={Configuracoes} />
        <Stack.Screen name="ResponderChamado" component={ResponderChamado} />
        <Stack.Screen name="Pedagógico" component={DepartamentoPedagogico} /> 
        <Stack.Screen name="Comercial" component={DepartamentoComercial} /> 
        <Stack.Screen name="Pessoal" component={DepartamentoPessoal} />
        <Stack.Screen name="Social" component={DepartamentoSocial} />
        <Stack.Screen name="Seleção" component={DepartamentoSelecao} /> 
        <Stack.Screen name="Notificacoes" component={Notificacoes} />
        <Stack.Screen name="HeaderPrincipal" component={Header} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Chamados" component={Chamados} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;