export interface Badge {
  name: string,
  image: string,
  description: string,
}

export interface Player {
  name: string,
  score: number,
  badges: Badge[],
}

export interface TarotCardData {
  name: string,
  fortune_telling: string[],
  keywords: string[],
  meanings: {
    light: string[],
    shadow: string[],
  },
  "Questions to Ask": string[],
}

export interface TarotCard {
  url: string,
  data: TarotCardData | null,
}

export interface ModuleData {
  title: string,
  subtitle: string,
  description: string,
  items: string[],
}