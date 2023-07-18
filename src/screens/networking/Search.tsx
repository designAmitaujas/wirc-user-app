import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const AnimatedSearchBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleSearchIconPress = () => {
    Animated.timing(animatedValue, {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setIsExpanded(!isExpanded);
  };

  const searchBarScaleX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleSearchIconPress}
        style={styles.iconContainer}
      >
        <AntDesign
          name={isExpanded ? "close" : "search1"}
          size={20}
          color="#64B5F6"
        />
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.searchBarContainer,
          { transform: [{ scaleX: searchBarScaleX }] },
        ]}
      >
        <TextInput style={styles.searchInput} placeholder="Search..." />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  iconContainer: {
    padding: 5,
  },
  searchBarContainer: {
    overflow: "hidden",
  },
  searchInput: {
    width: 150,
    fontSize: 12,
    fontWeight: "300",
    paddingHorizontal: 15,
    borderColor: "#64B5F6",
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default AnimatedSearchBar;
