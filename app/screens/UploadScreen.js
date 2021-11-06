import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import colors from "../config/colors";
import done from "../assets/animations/done";

function UploadScreen({ onDone, progress = 0, visible = false }) {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (progress == 1) {
      setTimeout(() => {
        setIsCompleted(true);
      }, 1000);
    }else{
        setIsCompleted(false);
    }
  }, [progress]);

  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {isCompleted ? (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={done}
            style={styles.animation}
          />
        ) : (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default UploadScreen;
