import { Box, View } from "native-base";
import React, { useState } from "react";
import QRCode from "react-native-qrcode-svg";

const logo = require("../../../assets/wirclogo.png");

const Qrcodes = () => {
  const variables = 1234567890;
  const [data, setData] = useState(variables);

  return (
    <View bg={"white"} h={"full"}>
      <Box alignItems={"center"} justifyContent={"center"}>
        <QRCode
          logo={logo}
          logoBackgroundColor="white"
          size={300}
          value={JSON.stringify(data)}
        />
      </Box>
    </View>
  );
};

export default Qrcodes;
