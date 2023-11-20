import { FormInterface } from '@recoil/RootState';

export function changeForm(form: FormInterface, formTypeToChange: string) {
  // 객관식에서 체크박스로 변경 시
  if (form.formType === '객관식') {
    if (formTypeToChange === '체크박스' && Array.isArray(form.context)) {
      const changedForm = {
        title: form.title,
        context: form.context.map((item) => {
          return { isChecked: false, text: item };
        }),
        isRequired: false,
        formType: '체크박스',
      };
      return changedForm;
    }
  }

  // 체크박스에서 객관식 형태로 변경 시
  else if (form.formType === '체크박스') {
    if (formTypeToChange === '객관식') {
      const changedForm = {
        title: form.title,
        context: form.context.map((item) => {
          if (typeof item !== 'string') return item.text;
        }),
        isRequired: false,
        formType: '객관식',
        selected: -1,
      };
      return changedForm;
    }
  }

  // 단답형으로 변경 시
  if (formTypeToChange === '단답형') {
    const changedForm = { title: form.title, context: [''], isRequired: false, formType: '단답형' };
    return changedForm;
  }

  // 장문형으로 변경 시
  else if (formTypeToChange === '장문형') {
    const changedForm = {
      title: form.title,
      context: [''],
      isRequired: false,
      formType: '장문형',
    };
    return changedForm;
  }

  // 객관식으로 변경 시
  else if (formTypeToChange === '객관식') {
    const changedForm = {
      title: form.title,
      context: ['옵션 1'],
      isRequired: false,
      formType: '객관식',
      selected: -1,
    };
    return changedForm;
  }

  // 체크박스로 변경 시
  else if (formTypeToChange === '체크박스') {
    const changedForm = {
      title: form.title,
      context: [{ isChecked: false, text: '옵션 1' }],
      isRequired: false,
      formType: '체크박스',
    };
    return changedForm;
  }
}
