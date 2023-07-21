import {
  render, // Testing Library의 render 함수 - 컴포넌트를 렌더링하고 렌더링 결과를 반환
  screen, // Testing Library의 screen 객체 - 렌더링된 컴포넌트에 대한 검색과 상호작용 담당
  fireEvent, // Testing Library의 fireEvent 객체 - DOM 이벤트 시뮬레이트를 위한 함수 제공
  RenderResult, // render 함수가 반환하는 결과의 타입을 지정한 인터페이스
} from "@testing-library/react";

import { ThemeProvider } from "styled-components"; // 스타일드 컴포넌트의 ThemeProvider를 가져옴
import Dropzone from "."; // 테스트할 Dropzone 컴포넌트를 가져옴
import { theme } from "themes"; // 테마를 가져옴

describe("Dropzone", () => {
  let renderResult: RenderResult; // 테스트할 컴포넌트의 렌더링 결과를 저장할 변수
  let handleDrop: jest.Mock; // 모의 함수로 생성된 handleDrop 함수를 저장할 변수

  beforeEach(() => {
    // 더미 함수로 handleDrop 모의 함수 생성
    handleDrop = jest.fn();

    // Dropzone 컴포넌트를 렌더링하고 렌더링 결과를 변수에 저장
    renderResult = render(
      <ThemeProvider theme={theme}>
        {" "}
        {/* 스타일드 컴포넌트의 ThemeProvider로 테마 적용 */}
        <Dropzone onDrop={handleDrop} />{" "}
        {/* handleDrop 모의 함수를 Dropzone 컴포넌트의 onDrop prop에 전달 */}
      </ThemeProvider>
    );
  });

  afterEach(() => {
    renderResult.unmount(); // 각 테스트가 끝날 때마다 렌더링 해제
  });

  it("파일이 드롭되면 onDrop이 호출된다", async () => {
    // 파일을 드롭한다
    const element = await screen.findByTestId("dropzone");
    fireEvent.drop(element, {
      dataTransfer: {
        files: [new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" })], // 드롭되는 가짜 파일 생성
      },
    });

    // 파일이 입력되었는지 확인
    expect(handleDrop).toHaveBeenCalledTimes(1); // handleDrop 함수가 한 번 호출되었는지 검증
  });
});
