export const TAB = {
  HOME_SCREEN: 'INICIO',
  OUR_CHURCH: 'NUESTRA IGLESIA',
  BIBLE_SCREEN: 'BIBLIA',
  DEVOCIONALES: 'DEVOCIONALES',
} as const;

export const HOME_STACK = {
  HOME_SCREEN: 'HomeScreen',
  ANNOUNCEMENTS_SCREEN: 'AnnouncementsScreen',
} as const;

export const DEVOTIONALS_STACK = {
  DEVOTIONALS_SCREEN: 'DevotionalsScreen',
  DEVOTIONALS_DETAIL: 'DevotionalsDetail',
} as const;

export const OUR_CHURCH_STACK = {
  OUR_CHURCH: 'OurChurchScreen',
  HISTORIA_SCREEN: 'HistoriaScreen',
  CONFESION_FE: 'ConfesionFeScreen',
  FAMILIA_PASTORAL: 'FamiliaPastoralScreen',
} as const;
