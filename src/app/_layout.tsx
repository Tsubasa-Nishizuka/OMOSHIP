import { Stack } from 'expo-router'

const Layout = (): JSX.Element => {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#467FD3'
    },
    headerTintColor: '#ffffff',
    headerTitle: 'Omoship',
    headerBackTitleVisible: false,
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: 'bold'
    }

  }}/>
}

export default Layout
