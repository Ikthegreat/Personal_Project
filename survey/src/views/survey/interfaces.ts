export interface FormProps {
  formIndex: number;
  drag?: () => void;
  isActive?: boolean;
}

export interface SurveyFooterProps {
  back: () => void;
  add: () => void;
  preview: () => void;
}

export interface FormChildProps extends FormProps {
  handlePressForm: () => void;
  handleIsRequired: () => void;
  handleBottomSheet: () => void;
}
