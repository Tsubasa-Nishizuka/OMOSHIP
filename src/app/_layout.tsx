import { Stack } from 'expo-router'

const Layout = (): JSX.Element => {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#000000'
    },
    headerTintColor: '#ffffff',
    headerTitle: '',
    headerBackTitleVisible: false,
    headerTitleStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  }}/>
}

export default Layout
