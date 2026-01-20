export type Occasion = 'interview' | 'exam' | 'wedding' | 'temple' | 'casual' | 'party' | 'date';

export type Gender = 'male' | 'female' | 'non-binary';

export type BodyType = 'slim' | 'athletic' | 'average' | 'curvy' | 'plus-size';

export type SkinTone = 'fair' | 'light' | 'medium' | 'olive' | 'tan' | 'dark';

export type Budget = 'budget' | 'moderate' | 'premium';

export interface UserPreferences {
  occasion: Occasion | null;
  gender: Gender | null;
  ageRange: string | null;
  bodyType: BodyType | null;
  skinTone: SkinTone | null;
  budget: Budget | null;
}

export interface OutfitRecommendation {
  dress: {
    name: string;
    description: string;
    colors: string[];
    fabric: string;
  };
  footwear: {
    name: string;
    description: string;
  };
  accessories: {
    name: string;
    description: string;
  }[];
  colorTips: string[];
  fabricTips: string[];
  avoidList: string[];
  stylingTips: string[];
}
