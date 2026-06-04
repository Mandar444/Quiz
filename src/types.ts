export interface FrameColor {
  name: string;
  value: string; // CSS color or hex
  isTortoise?: boolean;
  imageSun?: string;
  imageOpt?: string;
}

export type FrameShape = 'Wayfarer' | 'Round' | 'Oval' | 'Rectangle' | 'Aviator' | 'Hexagon';
export type FrameMaterial = 'Acetate' | 'Titanium' | 'Both';
export type FrameType = 'Optical' | 'Sun' | 'Both';

export interface Frame {
  id: string;
  name: string;
  type: FrameType;
  shape: FrameShape;
  material: FrameMaterial;
  bestFor: string[];
  colors: FrameColor[];
  character: string;
  shopUrl: string;
}

export type QuestionType = 
  | 'name_the_frame' 
  | 'shape_identification' 
  | 'material_match' 
  | 'colour_recognition' 
  | 'collection_recall' 
  | 'mixup_challenge'
  | 'visual_choice';

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  questionText: string;
  options: string[];
  correctAnswer: string;
  frameId?: string; // Reference to frame for showing image or SVG
  silhouetteOnly?: boolean; // If true, hide details and render as dark silhouette
  colorName?: string; // Reference for colorways
  mixupFrameIds?: string[]; // E.g., 4 frames for comparison
}

export interface Unit {
  id: number;
  title: string;
  theme: string;
  description: string;
  frameIds: string[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  trigger: string;
  xpReward: number;
}

export interface UserProfile {
  name: string;
  avatar: string;
  isGuest: boolean;
}

export interface UserProgress {
  xp: number;
  unlockedUnits: number[]; // e.g. [1, 2]
  completedLessons: string[]; // List of completed frame ids
  completedUnitQuizzes: number[]; // List of completed unit ids
  earnedBadges: string[]; // List of earned badge ids
  streak: number;
  lastActiveDate?: string;
}
