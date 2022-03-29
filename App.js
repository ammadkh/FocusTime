import React, {useState} from 'react';
import {Focus} from './src/pages/Focus';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import {colors} from './src/utils/colors';

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {focusSubject ? (
        <Text>timer</Text>
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});
