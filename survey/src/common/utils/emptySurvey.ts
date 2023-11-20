import { defaultForm } from './defaultForm';
import { getFormattedDate } from './getFormattedDate';

export function emptySurvey(key: number) {
  const createdAt = getFormattedDate();
  const survey = {
    key: key,
    title: '제목 없는 설문지',
    description: '설문지 설명',
    form: [defaultForm()],
    createdAt: createdAt,
  };
  return survey;
}
