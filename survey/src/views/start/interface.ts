export interface CreateSurveyProps {
  onPress: () => void;
}

export interface SurveyListProps {
  onPress: (surveyKey: number) => void;
}

export interface SurveyItemProps {
  index: number;
}
