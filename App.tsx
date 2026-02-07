import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [hasError, setHasError] = useState(false);

  const source = useMemo(
    () => ({ uri: 'https://skillpilottest.netlify.app/' }),
    []
  );

  if (hasError) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Unable to load the site</Text>
        <Text style={styles.subtle}>
          Please check your connection and try again.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <WebView
        source={source}
        originWhitelist={['*']}
        startInLoadingState
        onError={() => setHasError(true)}
        renderLoading={() => (
          <View style={styles.container}>
            <ActivityIndicator size="large" />
            <Text style={styles.subtle}>Loading Skillpilot…</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0b0d12',
  },
  container: {
    flex: 1,
    backgroundColor: '#0b0d12',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtle: {
    color: '#b7bdc8',
    fontSize: 14,
    textAlign: 'center',
  },
});
