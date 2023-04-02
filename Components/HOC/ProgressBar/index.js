import React, {useState} from 'react';
import {View, Text, PanResponder} from 'react-native';
import styles from './style';

const ProgressBar = ({value, onValueChange}) => {
  const [progressValue, setProgressValue] = useState(value);
  const [barWidth, setBarWidth] = useState(0);
  const [handleWidth, setHandleWidth] = useState(0);
  const [handlePosition, setHandlePosition] = useState(0);
  const viewCutter = [...Array(10)];
  {
    /**
Using panresponders to read to users screen drag while calculating the value
*/
  }
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      const newPosition = Math.max(
        0,
        Math.min(barWidth - handleWidth, handlePosition + gesture.dx),
      );
      const newProgress = Math.round(
        (newPosition / (barWidth - handleWidth)) * 100,
      );
      setProgressValue(newProgress);
      setHandlePosition(newPosition);
      onValueChange && onValueChange(newProgress);
    },
  });

  const handleLayout = (event) => {
    setHandleWidth(event.nativeEvent.layout.width);
  };

  const barLayout = (event) => {
    setBarWidth(event.nativeEvent.layout.width);
  };

  const handleStyle = {
    transform: [{translateX: handlePosition}],
  };

  return (
    <View style={styles.container}>
      <View style={styles.progSection}>
        <View style={styles.perRecord}>
          <Text style={styles.label}>10%</Text>
          <Text style={styles.label}>50%</Text>
          <Text style={styles.label}>100%</Text>
        </View>
        <View
          style={[styles.progressBarFiller, {width: `${progressValue}%`}]}
        />
        <View style={styles.progressBarContainer}>
          <View style={styles.dottedView}>
            {viewCutter.map((item, key) => (
              <Text key={key} style={styles.dotted}>
                |
              </Text>
            ))}
          </View>
          <View style={styles.progressBar} onLayout={barLayout}>
            <View
              style={[styles.progressBarFill, {width: `${progressValue}%`}]}
            />
          </View>
          <View
            style={[styles.progressBarHandle, handleStyle]}
            onLayout={handleLayout}
            {...panResponder.panHandlers}
          />
        </View>
      </View>
      <View style={styles.reader}>
        <View style={styles.roundPercent}>
          <Text style={styles.progressText}>{`${progressValue}%`}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProgressBar;
