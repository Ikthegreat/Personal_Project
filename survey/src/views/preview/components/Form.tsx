import { currentSurveyKey, surveyState } from '@recoil/RootState';
import { useRecoilState } from 'recoil';
import ShortAnswer from './Form/ShortAnswer';
import { FormProps } from '@survey/interfaces';
import LongAnswer from './Form/LongAnswer';
import MultipleChoice from './Form/MultipleChoice';
import MultipleCheck from './Form/MultipleCheck';

function Form({ formIndex }: FormProps) {
  const [survey] = useRecoilState(surveyState);
  const [surveyKey] = useRecoilState(currentSurveyKey);

  const formType = survey[surveyKey].form[formIndex].formType;

  if (formType === '단답형') {
    return <ShortAnswer formIndex={formIndex} />;
  } else if (formType === '장문형') {
    return <LongAnswer formIndex={formIndex} />;
  } else if (formType === '객관식' && Array.isArray(survey[surveyKey].form[formIndex].context)) {
    return <MultipleChoice formIndex={formIndex} />;
  } else if (formType === '체크박스') {
    return <MultipleCheck formIndex={formIndex} />;
  }
}

export default Form;
