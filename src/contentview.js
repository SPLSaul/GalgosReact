import React, { useRef } from 'react';
import { View, Alert } from "react-native";
import { WebView } from 'react-native-webview';

const styles = {
  container: {
    flex: 1,
  }
}

const ContentView = () => {
  const webViewRef = useRef(null);

  const handleNavigationStateChange = (newNavState) => {
    // Verificar si la URL actual ha cambiado
    if (newNavState.url) {
      // Mostrar una alerta con el botón "OK"
      Alert.alert(
        'Nueva URL',
        newNavState.url,
        [
          {
            text: 'OK',
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ uri: 'https://sitec.tijuana.tecnm.mx/acceso/' }}
        scalesPageToFit={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        mixedContentMode={'always'}
        startInLoadingState={true}
        allowsInlineMediaPlayback={true}
        onNavigationStateChange={handleNavigationStateChange}
      />
    </View>
  );
}

export default ContentView;
