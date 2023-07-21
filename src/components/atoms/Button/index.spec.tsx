import {
  render, // Testing Library의 render 함수 - 컴포넌트를 렌더링하고 렌더링 결과를 반환
  screen, // Testing Library의 screen 객체 - 렌더링된 컴포넌트에 대한 검색과 상호작용 담당
  fireEvent, // Testing Library의 fireEvent 객체 - DOM 이벤트 시뮬레이트를 위한 함수 제공
  RenderResult, // render 함수가 반환하는 결과의 타입을 지정한 인터페이스
} from "@testing-library/react";

import Button from "."; // 테스트할 React 컴포넌트 Button 가져오기

describe("Button", () => {
  let renderResult: RenderResult; // 테스트할 컴포넌트의 렌더링 결과를 저장할 변수
  let handleClick: jest.Mock; // 모의 함수로 생성된 클릭 핸들러를 저장할 변수

  beforeEach(() => {
    handleClick = jest.fn(); // 클릭 핸들러를 모의 함수로 생성
    renderResult = render(
      // Button 컴포넌트를 렌더링하고 렌더링 결과를 변수에 저장
      <Button variant="primary" onClick={handleClick}>
        Button
      </Button>
    );
  });

  afterEach(() => {
    renderResult.unmount(); // 각 테스트가 끝날 때마다 렌더링 해제
  });

  it("버튼 클릭시 온클릭이 출력된다.", () => {
    fireEvent.click(screen.getByText("Button")); // "Button" 텍스트를 가진 엘리먼트를 클릭한 것을 시뮬레이트
    expect(handleClick).toHaveBeenCalledTimes(1); // 클릭 핸들러가 1번 호출되었는지 검증
  });
});
