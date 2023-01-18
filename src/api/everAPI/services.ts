import instance from './apiConfig';
import { everURLs } from './urls';

export const getPosts = () => instance.get(everURLs.posts + '?populate=*');

export const getPostById = (postId: string) => instance.get(everURLs.posts + '/' + postId);

export const getAnnouncemets = () => instance.get(everURLs.announcements + '?populate=*');

export const getAnnouncemetById = (announcementId: string) =>
  instance.get(everURLs.announcements + '/' + announcementId);
