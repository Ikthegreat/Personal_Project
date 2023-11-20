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

```
  "dependencies": {
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/native-stack": "^6.9.16",
    "expo": "~49.0.15",
    "expo-status-bar": "~1.6.0",
    "react": "18.2.0",
    "react-native": "0.72.6",
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
    "eslint": "^8.0.1",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-import": "^2.25.2",
    "eslint-plugin-react": "^7.33.2",
    "prettier": "^3.0.3",
    "typescript": "*"
  },
```

# 구현 사항

- 게임 시작 전 게임 보드 크기와 지뢰 수 설정
  - 초급자 : Beginner (8 \* 8)
  - 중급자 : Intermediate (10 \* 14)
  - 상급자 : Expert (14 \* 32)
- 게임 진행 중 상단 바 표시

  - 남은 지뢰 수
  - 게임 경과 시간

- 게임

  - 사용자 지뢰 셀 터치 시 게임 종료
  - 지뢰가 없는 셀 터치 시 주변 지뢰가 없는 셀들을 자동으로 열어주도록 구현
  - 셀을 길게 터치할 경우 플래그 설치 (지뢰 위치 표시)

- 상단 스마일 이모지 터치 시 바텀 시트 노출

  - 난이도 재설정 및 게임 재시작

- Alert를 통한 게임 승리, 종료 결과값 노출

- 커스텀 설정
  - 가로, 세로, 지뢰 갯수 입력하여 게임 가능
  - 가로 범위 : 5 ~ 14
  - 세로 범위 : 5 ~ 32
  - 지뢰 갯수 : 전체 셀 (가로 \* 세로) 갯수의 1/3
  - 사용자 값 오입력 방지 및 직관적으로 설정 가능한 값들을 보여주기 위해 FlatList 및 Modal 활용하여 선택지 리스트 구현
