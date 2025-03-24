import { createStackNavigator } from '@react-navigation/stack';
import { SQLiteProvider } from 'expo-sqlite';
import HomeScreen from './index'
import AddUser from './pages/AddUser'
import UpdateUser from './pages/UpdateUser'
import ViewUser from './pages/ViewUser'
import ViewAllUser from './pages/ViewAllUser'
import DeleteUser from './pages/DeleteUser'
import ScreenLogin from './pages/ScreenLogin'
import ProfileUsers from './pages/ProfileUsers'
import Header from '@/components/headerUsers';
import { InitializeDataBase } from './database/initializeDatabase';


const Stack = createStackNavigator();

export default function Layout() {
    return (
        <SQLiteProvider databaseName='users.db' onInit={InitializeDataBase}>
            <Stack.Navigator screenOptions={{
                headerStyle: { backgroundColor: '#003348' },
                headerTintColor: "#fff",
                headerTitleStyle: { fontSize: 20 },
            }}>
                <Stack.Screen name="Registro de Usuários" component={HomeScreen} />
                <Stack.Screen name="AddUser" component={AddUser} options={{ title: 'Registrar Novo Usuário', headerStyle: { backgroundColor: '#008775' } }} />
                <Stack.Screen name="UpdateUser" component={UpdateUser} options={{ title: 'Atualizar Usuário', headerStyle: { backgroundColor: '#8c4777' } }} />
                <Stack.Screen name="ViewUser" component={ViewUser} options={{ title: 'Visualizar Usuário', headerStyle: { backgroundColor: '#003bae' } }} />
                <Stack.Screen name="ViewAllUser" component={ViewAllUser} options={{ title: 'Visualizar Usuários', headerStyle: { backgroundColor: '#ab451a' } }} />
                <Stack.Screen name="DeleteUser" component={DeleteUser} options={{ title: 'Excluir Usuários', headerStyle: { backgroundColor: '#a50028' } }} />
                <Stack.Screen name="ScreenLogin" component={ScreenLogin} options={{ title: 'Boas Vindas', headerStyle: { backgroundColor: '#75239d' } }} />
                <Stack.Screen name="ProfileUsers" component={ProfileUsers} options={{ headerShown: false }} />
            </Stack.Navigator>
        </SQLiteProvider>

    )
}