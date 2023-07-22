## 시작!

First, install & run the development server!

```bash
npm install or npm i

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

</hr>

## 2. 어플리케이션 아키텍쳐 구현


### 2-1. API 클라이언트 구현


### 2-2. 컴포넌트 구현 준비(타입 정의, 반응형, 래퍼 컴포넌트 구현)


## 3. 아토믹 디자인 패턴 구현 & 실구현


- 3.1 아톰, 모리큘, 오거니즘 -> 템플릿
- 3.2 디자인 패턴을 이용한 실구현



## 4. Jest를 이용한 테스트 구현


- 아래의 코드를 기본골자로 테스트를 구현

```javascript

import {
 render,
 act,
 screen,
 fireEvent,
 RenderResult,
} from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import [테스트할 컴포넌트] from ".";
import { theme } from "themes";

describe("[테스트할 id]", () => {
 let renderResult: RenderResult;
 let handleSignin: jest.Mock;

 beforeEach(() => {
   // 더미 함수
   handleSignin = jest.fn();
   renderResult = render(
     <ThemeProvider theme={theme}>
       <[테스트할 컴포넌트] onSignin={handleSignin} />
     </ThemeProvider>
   );
 });

 afterEach(() => {
   renderResult.unmount();
 });

 it('[테스트 될 상황 설명]', async () => {
   // DOM이 변경되는 것을 보증, React Hook Form의 handleSubmit이 호출될 때까지 대기한다
   await act(async () => {
     // 사용자명 입력
     const inputUsernameNode = screen.getByPlaceholderText(
       /사용자명/
     ) as HTMLInputElement;
     fireEvent.change(inputUsernameNode, { target: { value: "user" } });
     // 비밀번호 입력
     const inputPasswordNode = screen.getByPlaceholderText(
       /비밀번호/
     ) as HTMLInputElement;
     fireEvent.change(inputPasswordNode, { target: { value: "password" } });
     // 로그인 버튼을 클릭
     fireEvent.click(screen.getByText("로그인"));
   });

   // [테스트할 컴포넌트]이 호출되지 않는 것을 확인
   expect(handleSignin).toHaveBeenCalledTimes(1);
 });

 it("[테스트 될 상황 설명]", async () => {
   // DOM기 업데이트되는 것을 보증, React Hook Form의 handleSubmit이 호출될 떄까지 대기한다
   await act(async () => {
     // 사용자명 입력
     const inputUsernameNode = screen.getByPlaceholderText(
       /사용자명/
     ) as HTMLInputElement;
     fireEvent.change(inputUsernameNode, { target: { value: "user" } });
     // 로그인 버튼을 클릭
     fireEvent.click(screen.getByText("로그인 버튼"));
   });

   // [테스트할 컴포넌트]가 호출되지 않은 것을 확인
   expect(handleSignin).toHaveBeenCalledTimes(0);
 });
});
```


## 5. 개발 완성된 모습
![image](https://github.com/goodsosbva/nextjs_WebSiteMake/assets/62534722/9b46b555-6f3e-4c27-83d3-cb137f072224)


