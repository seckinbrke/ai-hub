import {Animated} from 'react-native';
import {ALERT_TYPE, Dialog, Toast} from 'react-native-alert-notification';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {getAvailablePurchases, initConnection} from 'react-native-iap';
import RNFetchBlob from 'rn-fetch-blob';
import {COMMON_ANIMATION_DURATION} from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Share from 'react-native-share';

export const fetchPurchases = async (isInStartPage = false) => {
  try {
    await initConnection();
    const purchases = await getAvailablePurchases();
    if (purchases.length > 0) {
      if (!isInStartPage) {
        displaySuccessAlert('Your purchases were updated.');
      }
      return true;
    } else {
      if (!isInStartPage) {
        displayWarningAlert("Your purchases don't exist.");
      }
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};

export const triggerVibration = () => {
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  ReactNativeHapticFeedback.trigger('impactLight', options);
};

export const downloadImagesFromUrls = async (urls: string[]) => {
  const downloads = urls.map(downloadImage);
  const results = await Promise.all(downloads);
  return results;
};

export const downloadImage = async (url: string) => {
  const extension = 'png';
  const path = `${RNFetchBlob.fs.dirs.DownloadDir}/${Date.now()}.${extension}`;

  return (
    RNFetchBlob.config({
      fileCache: true,
      appendExt: extension,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: path,
      },
    })
      .fetch('GET', url)
      // .then(res => CameraRoll.save(res.data, {type: 'photo'}))
      .then(() => displaySuccessAlert('Media downloaded successfully.'))
      .catch(() => displayWarningAlert('Media download failed.'))
  );
};

export const collapseAnimatedView = (
  animatedValue: Animated.Value,
  targetValue = 0,
) => {
  Animated.timing(animatedValue, {
    toValue: targetValue,
    useNativeDriver: true,
    duration: COMMON_ANIMATION_DURATION,
  }).start();
};

export const expandAnimatedView = (
  animatedValue: Animated.Value,
  targetValue = 1,
) => {
  Animated.timing(animatedValue, {
    toValue: targetValue,
    useNativeDriver: true,
    duration: COMMON_ANIMATION_DURATION,
  }).start();
};

export const showErrorToast = (error: any, navigation: any) => {
  Toast.show({
    type: ALERT_TYPE.DANGER,
    title: 'Error',
    textBody: error,
    autoClose: 1000,
  });
  navigation.goBack();
  return;
};

export const displaySuccessAlert = (message: string) => {
  Dialog.show({
    type: ALERT_TYPE.SUCCESS,
    title: 'Success',
    textBody: message,
    autoClose: 1000,
  });
};

export const displayWarningAlert = (message: string) => {
  Dialog.show({
    type: ALERT_TYPE.WARNING,
    title: 'Warning',
    textBody: message,
    autoClose: 1000,
  });
};

export const downloadMusic = async (path: string) => {
  await Share.open({
    url: `file://${path}`,
  });
};

export const animateHide = (animatedValue: any, value?: number) => {
  Animated.timing(animatedValue, {
    toValue: value || 0,
    useNativeDriver: true,
    duration: COMMON_ANIMATION_DURATION,
  }).start();
};

export const animateVisible = (animatedValue: any, value?: number) => {
  Animated.timing(animatedValue, {
    toValue: value || 1,
    useNativeDriver: true,
    duration: COMMON_ANIMATION_DURATION,
  }).start();
};

export const animateVibrate = (animatedValue: any) => {
  Animated.timing(animatedValue, {
    toValue: 0.98,
    useNativeDriver: true,
    duration: 200,
  }).start(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
      duration: 200,
    }).start();
  });
};

export const formatDate = (dateString: string) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const date = new Date(dateString);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

////////// ASYNC STORAGE ///////////

export const getDeviceIdFromStorage = async () => {
  try {
    return await AsyncStorage.getItem('@deviceId');
  } catch (e) {
    console.warn(e);
  }
};

export const setDeviceIdToStorage = (deviceId: string) => {
  try {
    AsyncStorage.setItem('@deviceId', deviceId);
  } catch (e) {
    console.warn(e);
  }
};

export const getFcmTokenFromStorage = async () => {
  try {
    return await AsyncStorage.getItem('@fcmToken');
  } catch (e) {
    console.warn(e);
  }
};

export const setFcmTokenToStorage = (fcmToken: string) => {
  try {
    AsyncStorage.setItem('@fcmToken', fcmToken);
  } catch (e) {
    console.warn(e);
  }
};

export const getIsFirstLaunchFromStorage = async () => {
  try {
    return await AsyncStorage.getItem('@isFirstLaunch');
  } catch (e) {
    console.warn(e);
  }
};

export const setIsFirstLaunchToStorage = (isFirstLaunch: string) => {
  try {
    AsyncStorage.setItem('@isFirstLaunch', isFirstLaunch);
  } catch (e) {
    console.warn(e);
  }
};

export const getFreeRightsFromStorage = async () => {
  try {
    const freeRights = await AsyncStorage.getItem('@freeRights');
    const parsedRights =
      freeRights !== null ? parseInt(freeRights as any, 10) : 1;

    return parsedRights !== null ? parsedRights : 1;
  } catch (e) {
    console.warn(e);
  }
};

export const setFreeRightsToStorage = (freeRights: number) => {
  try {
    AsyncStorage.setItem('@freeRights', JSON.stringify(freeRights));
  } catch (e) {
    console.warn(e);
  }
};
