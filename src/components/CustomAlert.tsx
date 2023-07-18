import capitalize from "lodash/capitalize";
import { Alert, HStack, Text, VStack } from "native-base";
import { ColorSchemeType } from "native-base/lib/typescript/components/types";
import React, { memo } from "react";
import isEqual from "react-fast-compare";

const CustomAlert: React.FC<{ msg: string; type: ColorSchemeType }> = ({
  msg,
  type,
}) => {
  return (
    <Alert w="100%" colorScheme={type}>
      <VStack space={2} flexShrink={1} w="100%">
        <HStack flexShrink={1} space={2} justifyContent="space-between">
          <HStack space={2} flexShrink={1}>
            <Alert.Icon mt="1" />
            <Text fontSize="md">{capitalize(msg)}</Text>
          </HStack>
        </HStack>
      </VStack>
    </Alert>
  );
};

export default memo(CustomAlert, isEqual);
