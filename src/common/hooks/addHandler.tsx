import {useEffect, useState, useRef} from 'react';
import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';
import {useDispatch, useSelector} from 'react-redux';
import {setFreeRight} from '../../redux/features/appSlice';
import {setFreeRightsToStorage} from '../functions';

const rewardedAdUnitId = __DEV__
  ? TestIds.REWARDED
  : 'ca-app-pub-3100926385838066/5448705862';
const rewarded = RewardedAd.createForAdRequest(rewardedAdUnitId);

const useAdHandler = (createCover: any) => {
  const dispatch = useDispatch();
  const {freeRights} = useSelector((state: any) => state.app);
  const [loaded, setLoaded] = useState(false);
  const [isAdModalVisible, setAdModalVisible] = useState(false);
  const selectedSearchItemRef = useRef(null);
  const selectedCoverRef = useRef(null);

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        setLoaded(true);
      },
    );

    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      async reward => {
        setAdModalVisible(false);
        dispatch(setFreeRight(freeRights - 1));
        setFreeRightsToStorage(freeRights - 1);
        await createCover();
      },
    );

    rewarded.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  const watchAd = async () => {
    if (loaded) {
      try {
        await rewarded.show();
      } catch (error) {
        console.error('Ad failed to show:', error);
        // Fallback to create cover if ad fails to show
        setAdModalVisible(false);
        dispatch(setFreeRight(freeRights - 1));
        setFreeRightsToStorage(freeRights - 1);
        await createCover();
      }
    } else {
      // Fallback to create cover if ad is not loaded
      setAdModalVisible(false);
      dispatch(setFreeRight(freeRights - 1));
      setFreeRightsToStorage(freeRights - 1);
      await createCover();
    }
  };

  return {
    watchAd,
    isAdModalVisible,
    setAdModalVisible,
    selectedSearchItemRef,
    selectedCoverRef,
  };
};

export default useAdHandler;
