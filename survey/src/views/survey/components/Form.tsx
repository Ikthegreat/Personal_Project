import {
  bottomSheetVisible,
  currentSurveyKey,
  selectedFormIndex,
  surveyState,
} from '@recoil/RootState';
import { useRecoilState } from 'recoil';
import ShortAnswer from './Form/ShortAnswer';
import { FormProps } from '@survey/interfaces';
import LongAnswer from './Form/LongAnswer';
import MultipleChoice from './Form/MultipleChoice';
import MultipleCheck from './Form/MultipleCheck';

function Form({ formIndex, drag, isActive }: FormProps) {
  const [survey, setSurvey] = useRecoilState(surveyState);
  const [surveyKey] = useRecoilState(currentSurveyKey);
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectedFormIndex);
  const [, setBottomSheetVisible] = useRecoilState(bottomSheetVisible);

  const formType = survey[surveyKey].form[formIndex].formType;

  const handlePressForm = () => {
    if (selectedIndex === formIndex) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(formIndex);
    }
  };

  const handleIsRequired = () => {
    const updatedSurvey = JSON.parse(JSON.stringify(survey));
    updatedSurvey[surveyKey].form[formIndex].isRequired =
      !updatedSurvey[surveyKey].form[formIndex].isRequired;
    setSurvey(updatedSurvey);
  };

  const handleBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  if (formType === '단답형') {
    return (
      <ShortAnswer
        drag={drag}
        formIndex={formIndex}
        isActive={isActive}
        handlePressForm={handlePressForm}
        handleIsRequired={handleIsRequired}
        handleBottomSheet={handleBottomSheet}
      />
    );
  } else if (formType === '장문형') {
    return (
      <LongAnswer
        drag={drag}
        formIndex={formIndex}
        isActive={isActive}
        handlePressForm={handlePressForm}
        handleIsRequired={handleIsRequired}
        handleBottomSheet={handleBottomSheet}
      />
    );
  } else if (formType === '객관식' && Array.isArray(survey[surveyKey].form[formIndex].context)) {
    return (
      <MultipleChoice
        drag={drag}
        formIndex={formIndex}
        isActive={isActive}
        handlePressForm={handlePressForm}
        handleIsRequired={handleIsRequired}
        handleBottomSheet={handleBottomSheet}
      />
    );
  } else if (formType === '체크박스') {
    return (
      <MultipleCheck
        drag={drag}
        formIndex={formIndex}
        isActive={isActive}
        handlePressForm={handlePressForm}
        handleIsRequired={handleIsRequired}
        handleBottomSheet={handleBottomSheet}
      />
    );
  }
}

export default Form;
