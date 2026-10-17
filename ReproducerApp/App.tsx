import React, { useState } from 'react';
import {
  LayoutAnimation,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const TEXT = Array.from({ length: 40 }, (_, i) => `word${i + 1}`).join(' ');

export default function App() {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    // Slow, linear animation so that every frame is easy to follow.
    LayoutAnimation.configureNext({
      duration: 3000,
      update: { type: LayoutAnimation.Types.linear },
    });
    setExpanded(value => !value);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={toggle} style={styles.button}>
        <Text style={styles.buttonText}>
          {expanded ? 'Collapse' : 'Expand'}
        </Text>
      </Pressable>
      <Text style={styles.text} numberOfLines={expanded ? undefined : 2}>
        {TEXT}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  button: {
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  buttonText: {
    fontSize: 18,
  },
  text: {
    fontSize: 22,
    backgroundColor: 'gold',
  },
});
