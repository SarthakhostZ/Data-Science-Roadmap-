
export interface RoadmapItem {
  id: string;
  label: string;
  category?: string;
}

export interface RoadmapStep {
  id: string;
  title: string;
  items: RoadmapItem[];
}

export interface AppState {
  completedIds: string[];
  isDarkMode: boolean;
  expandedSteps: string[];
}
