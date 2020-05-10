import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const styles = {
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
};

const Gradient = ({ children }) => (
  <LinearGradient
    colors={['#6BB4D0', '#37ECBA']}
    style={styles}
    locations={[0.2, 1]}
    start={{ x: 0, y: 0 }}
    end={{ x: 0.7, y: 1 }}
  >
    {children}
  </LinearGradient>
);

export default Gradient;
