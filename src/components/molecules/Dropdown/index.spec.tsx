import {
  render, // Testing Library의 render 함수 - 컴포넌트를 렌더링하고 렌더링 결과를 반환
  screen, // Testing Library의 screen 객체 - 렌더링된 컴포넌트에 대한 검색과 상호작용 담당
  act, // 테스트에서 비동기적인 작업을 처리하기 위한 함수를 제공 (테스트할 때만 사용)
  fireEvent, // Testing Library의 fireEvent 객체 - DOM 이벤트 시뮬레이트를 위한 함수 제공
  RenderResult, // render 함수가 반환하는 결과의 타입을 지정한 인터페이스
} from "@testing-library/react";

import { ThemeProvider } from "styled-components"; // 스타일드 컴포넌트의 ThemeProvider를 가져옴
import Dropdown from "."; // 테스트할 Dropdown 컴포넌트를 가져옴
import { theme } from "themes"; // 테마를 가져옴

describe("Dropdown", () => {
  let renderResult: RenderResult; // 테스트할 컴포넌트의 렌더링 결과를 저장할 변수
  let handleChange: jest.Mock; // 모의 함수로 생성된 handleChange 함수를 저장할 변수

  beforeEach(() => {
    // 더미 함수로 handleChange 모의 함수 생성
    handleChange = jest.fn();

    // Dropdown 컴포넌트를 렌더링하고 렌더링 결과를 변수에 저장
    renderResult = render(
      <ThemeProvider theme={theme}>
        {" "}
        {/* 스타일드 컴포넌트의 ThemeProvider로 테마 적용 */}
        <Dropdown
          options={[
            { value: "used", label: "중고" },
            { value: "new", label: "상품" },
          ]}
          onChange={handleChange} // handleChange 모의 함수를 Dropdown 컴포넌트의 onChange prop에 전달
        />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    renderResult.unmount(); // 각 테스트가 끝날 때마다 렌더링 해제
  });

  it("파일이 드롭되면 onDrop이 호출된다", async () => {
    // act 함수로 감싸서 풀다운을 열고 있도록 DOM이 업데이트된 것을 보증한다
    await act(async () => {
      // 클릭해서 드롭다운 선택지의 뷰를 표시한다
      const element = await screen.findByTestId("dropdown-control");
      element && fireEvent.mouseDown(element); // 드롭다운 열기 이벤트를 시뮬레이트
    });

    // 드롭다운의 선택지 뷰에서 선택한다
    const elements = await screen.getAllByTestId("dropdown-option");
    elements && fireEvent.click(elements[0]); // 첫 번째 선택지 클릭 이벤트를 시뮬레이트

    expect(handleChange).toHaveBeenCalledTimes(1); // handleChange 함수가 한 번 호출되었는지 검증
  });
});
