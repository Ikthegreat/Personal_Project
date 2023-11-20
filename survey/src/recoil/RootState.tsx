import { dummyData } from '@utils/dummyData';
import { atom } from 'recoil';

export const defaultLayoutState = atom({
  key: 'defaultLayoutState',
  default: {
    width: 0,
    height: 0,
  },
});

export interface FormInterface {
  title: string;
  context: string[] | { isChecked: boolean; text: string }[];
  isRequired: boolean;
  formType: string;
  selected?: number;
}

interface Survey {
  key: number;
  title: string;
  description: string;
  form: FormInterface[];
  createdAt: string;
}

const initialSurveyState: Survey[] = dummyData;

export const surveyState = atom({
  key: 'serveyState',
  default: initialSurveyState,
});

export const surveyTitleState = atom({
  key: 'surveyTitleState',
  default: '제목 없는 설문지',
});

export const surveyDescriptionState = atom({
  key: 'surveyDescriptionState',
  default: '설문지 설명',
});

export const selectedFormIndex = atom({
  key: 'selectedFormIndex',
  default: -1,
});

export const currentSurveyKey = atom({
  key: 'currentSurveyKey',
  default: -1,
});

export const bottomSheetVisible = atom({
  key: 'bottomSheetVisible',
  default: false,
});
