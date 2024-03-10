import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const CustomHeaderLeftButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}
      style={{
        backgroundColor: "#FFFFFF",
        width: 40,
        height: 40,
        borderRadius: 12 / 1.25,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require('../icons/menu.png')}
        style={{ width: '60%', height: '60%' }}
      />
    </TouchableOpacity>
  );
}

const CustomHeaderRightButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}
      style={{
        backgroundColor: "#FFFFFF",
        width: 40,
        height: 40,
        borderRadius: 12 / 1.25,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require('../icons/icons8-account-50.png')}
        style={{ width: '60%', height: '60%', padding: 5 }}
      />
    </TouchableOpacity>
  );
}

export { CustomHeaderLeftButton };
export { CustomHeaderRightButton };
