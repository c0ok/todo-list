import { AddIcon, Box, Center, Checkbox, Container, DeleteIcon, FormControl, HStack, Heading, Icon, IconButton, Input, NativeBaseProvider, ScrollView, Stack, Text, VStack } from 'native-base';
import { RecoilRoot } from 'recoil';
import { AppProvider } from './app/AppProvider';
import { AppLayout } from './app/AppLayout';
import { AddTodoForm, Todos } from './components';

export default function App() {
  return (
    <AppProvider>
      <AppLayout>
        <AddTodoForm />
        <Todos />
      </AppLayout>
    </AppProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });
