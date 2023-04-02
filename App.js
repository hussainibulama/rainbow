import Home from './Components/Pages/Home';
import {useEffect} from 'react';
import {getLocales} from 'expo-localization';
import * as Location from 'expo-location';

export default function App() {
  useEffect(() => {
    (async () => {
      {
        /** 
      The first step i could think of is to get the users location by requesting them to allow us access that
    */
      }
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        {
          /** 
    If no any reason precise location is denied, we then get the device local details which also contains the country as fallback.
    */
        }
        console.log(getLocales());
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
    })();
  }, []);
  return <Home />;
}
