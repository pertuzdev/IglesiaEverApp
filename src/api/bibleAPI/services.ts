import instance from './apiConfig';
import { bibleUrls } from './urls';

export const getBibles = () => instance.get(bibleUrls.bibles);

export const getBooks = (bibleId: string) =>
  instance.get(bibleUrls.bibles + '/' + bibleId + '/books');

export const getChapterWithVerses = (bibleId: string, chapterId: string) =>
  instance.get(`${bibleUrls.bibles}​/${bibleId}​/chapters​/${chapterId}​/verses`);

export const getSpecificVerses = (bibleId: string, verseId: string) =>
  instance.get(`${bibleUrls.bibles}​/${bibleId}​/verses/${verseId}`);
