# Package 설치 방법

### npm

```
npm install
```

### yarn

```
yarn
```

or

```
yarn install
```

# 실행 방법

### npm

```
npm run android
```

or

```
npm rum ios
```

### yarn

```
yarn android
```

or

```
yarn ios
```

# 기술 스택 및 라이브러리

- `TypeScript`, `React-native`, `Expo` 를 활용하였습니다.
- App 전반의 State를 `Recoil`을 통해 전역 관리하도록 구현하였습니다.
- `React-navigation`, `Stack navigator`를 통해 화면 이동 및 페이지를 관리하도록 구현하였습니다.
- `React-native-draggable-flatlist` 라이브러리를 통해 질문 순서 변경 기능을 구현하였습니다.

```
  "dependencies": {
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/native-stack": "^6.9.16",
    "expo": "~49.0.15",
    "expo-status-bar": "~1.6.0",
    "react": "18.2.0",
    "react-native": "0.72.6",
    "react-native-draggable-flatlist": "^4.0.1",
    "react-native-gesture-handler": "~2.12.0",
    "react-native-reanimated": "~3.3.0",
    "react-native-safe-area-context": "4.6.3",
    "react-native-screens": "~3.22.0",
    "recoil": "^0.7.7"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@types/react": "~18.2.14",
    "@typescript-eslint/eslint-plugin": "^6.9.0",
    "@typescript-eslint/parser": "^6.9.0",
    "babel-plugin-module-resolver": "^5.0.0",
    "eslint": "^8.52.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-import": "^2.29.0",
    "eslint-plugin-react": "^7.33.2",
    "prettier": "^3.0.3",
    "typescript": "^5.1.3"
  },
```

# 구현 사항

- 설문 생성

- 최근 생성한 설문 목록 조회

- 설문 제목 편집

- 설문 설명 편집

- 질문 추가하기
  - 단답형
  - 장문형
  - 객관식
  - 체크박스

- 질문 복사하기

- 설문 삭제하기

- 필수 질문 설정 기능

- 미리보기
  - 설문 화면 하단의 `공유하기` 아이콘을 터치하면 미리보기 페이지로 이동합니다.
  - 해당 미리보기 페이지에서는 답변을 작성해볼 수 있습니다.
  
- 바텀 시트
  - 질문 탭을 터치하여 질문을 선택하고 점 세개 아이콘을 터치하면 바텀 시트가 올라옵니다.
  - 바텀 시트에서는 질문 유형을 변경할 수 있으며, 질문 복사 및 삭제가 가능합니다.

- 질문 순서 변경 기능
  - 질문을 선택한 후 상단의 점 세개 아이콘을 길게 누르면 `Drag and Drop`이 활성화되며, 해당 기능을 통해 질문의 순서를 변경할 수 있습니다.
