import {useState, useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Switch from 'react-native-full-switch';
import ProgressBar from '../../HOC/ProgressBar';
import styles from './style';
const Home = () => {
  const [isSwiteched, setIsSwitched] = useState(false);
  const [progressValue, setProgressValue] = useState(0);

  const handleProgressChange = (newProgressValue) => {
    setProgressValue(newProgressValue);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.screenFitter}>
        <View style={styles.topHeader}>
          <Text style={styles.H1}>Sale</Text>
          <Switch
            isOn={isSwiteched}
            trackHeight={30}
            trackWidth={60}
            curserHeight={25}
            curserWidth={25}
            onChange={() => setIsSwitched(!isSwiteched)}
          />
        </View>
        <Text style={styles.normalText}>
          You can specify a discount for the product and get to the main page
          into block of promotions
        </Text>
      </View>
      <View style={styles.borderLineBottom} />

      <View style={styles.screenFitter}>
        <View style={styles.lineInputs}>
          <View style={styles.inputViews}>
            <Text style={styles.label}>New Price, USD</Text>
            <TextInput
              maxLength={5}
              keyboardType={'decimal-pad'}
              style={styles.textInput}
            />
          </View>
          <View style={styles.inputViews}>
            <Text style={styles.label}>New Price, USD</Text>
            <TextInput
              maxLength={5}
              keyboardType={'decimal-pad'}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.progresArea}>
          <ProgressBar
            value={progressValue}
            onValueChange={handleProgressChange}
          />
        </View>
      </View>
      <View style={styles.screenFitter}>
        <TouchableOpacity style={styles.buttonDisabled} activeOpacity={1}>
          <Text style={styles.buttonTextDisabled}>PUBLISHED - 24.02.2024</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Home;
