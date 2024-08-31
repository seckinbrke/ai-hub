export interface HomeScreenProps {
  navigation: any;
}

export interface AppState {
  app: {
    activePost: ActivePostType;
    isSubs: boolean | undefined | null;
    freeRights: number;
  };
}

export interface ActivePostType {
  _id: string;
  status: number;
  musicianName: string;
  musicName: string;
  musicUrl: string;
  itemId: string;
  itemColor: string;
}

export interface RewardType {
  amount: number;
  type: string;
}
