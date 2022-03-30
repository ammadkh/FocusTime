import React, {useState} from 'react';
import {Focus} from './src/pages/Focus';
import {SafeAreaView, StyleSheet} from 'react-native';
import {colors} from './src/utils/colors';
import {Timer} from './src/pages/Timer';

const App = () => {
  const [focusSubject, setFocusSubject] = useState('gardening');
  return (
    <SafeAreaView style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} />
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
