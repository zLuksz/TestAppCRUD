import Buttons from "@/components/buttons";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


function HomeScreen({ navigation }) {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>

            <Buttons
              title='Registrar Usuário'
              bgColor='#008775'
              icon='person-add-sharp'
              customClick={() => navigation.navigate('AddUser')}
            />

            <Buttons
              title='Atualizar Usuário'
              bgColor='#8c4777'
              icon='pencil-sharp'
              customClick={() => navigation.navigate('UpdateUser')}
            />

            <Buttons
              title='Visualizar Usuário'
              bgColor='#003bae'
              icon='person-circle-sharp'
              customClick={() => navigation.navigate('ViewUser')}
            />

            <Buttons
              title='Visualizar Todos'
              bgColor='#ab451a'
              icon='people-circle-sharp'
              customClick={() => navigation.navigate('ViewAllUser')}
            />

            <Buttons
              title='Acesso Ao Usuário'
              bgColor='#75239d'
              icon='person-sharp'
              customClick={() => navigation.navigate('ScreenLogin')}
            />

            <Buttons
              title='Excluir Usuário'
              bgColor='#a50028'
              icon='trash-sharp'
              customClick={() => navigation.navigate('DeleteUser')}
            />

          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen