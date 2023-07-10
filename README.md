
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## 1. 환경 설정
### 1-1. 스타일 컴포넌트 설정
```bash
npm i styled-components
npm install --save-dev @types/styled-components
```

### 1-2. ESLint 설정
```bash
npm install --save-dev prettier eslint typescript-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import

// 린트 실행
npm run lint: lint 수행, 코드 문제 출력
npm run format: 소스 코드의 포맷을 자동으로 수행
```

### 1-3. 스토리북 설정
```bash
npx sb init

// 스토리북 관련 기타 라이브러리 설치
npm install --save-dev @storybook/addon-postcss tsconfig-paths-webpack-plugin @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods @babel/plugin-proposal-private-property-in-object tsconfig-paths-webpack-plugin @mdx-js/react

// 실행
npm run storybook
```

### 1-4. 에셋 설치

./storybook/maib.js 

### 1-5. 스토리북 테마 설정

/src/themes/...

### 1-6. React Hook Form 설정

```bash
npm install react-book-form
```

### 1-7. SWR 도입

```bash
npm install swr
```

### 1-8. React Content Loader 도입
```bash
npm install react-content-loader
npm install --save-dev @types/react-content-loader
```

### 1-9. 머티리얼 아이콘 설정
```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

### 1-10. 환경 변수 설정

.env 파일에 정의


### 1-11. 테스트 환경 구축

```bash
npm install --save jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```

### 1-12. 백엔드 역할
ts-nextbook-json 폴더로 정의된 json 서버로 대체


