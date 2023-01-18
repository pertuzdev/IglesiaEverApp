export type AnnouncementProps = {
  img: string;
  text: string;
};

export type ThumbnailAnnouncementProps = {
  img: string;
  activeIndex: number;
  index: number;
  onPress: () => void;
};
