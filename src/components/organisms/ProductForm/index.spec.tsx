// 필요한 모듈과 컴포넌트를 가져옵니다.
import {
  render,
  act,
  screen,
  fireEvent,
  RenderResult,
} from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import ProductForm from '.'
import { theme } from 'themes'

describe('ProductForm', () => {
  let renderResult: RenderResult
  let handleProductSave: jest.Mock

  // 테스트를 위한 준비 작업으로, global 객체에 URL.createObjectURL을 더미 함수로 재정의합니다.
  global.URL.createObjectURL = () => 'https://test.com'

  // 각 테스트 케이스 실행 전에 호출되는 함수입니다.
  beforeEach(() => {
    // 더미 함수로 생성된 handleProductSave 함수를 저장할 변수를 초기화합니다.
    handleProductSave = jest.fn()

    // ProductForm 컴포넌트를 렌더링하고 결과를 renderResult에 저장합니다.
    renderResult = render(
      <ThemeProvider theme={theme}>
        <ProductForm onProductSave={handleProductSave} />
      </ThemeProvider>,
    )
  })

  // 각 테스트 케이스 실행 후에 호출되는 함수입니다.
  afterEach(() => {
    // 렌더링된 컴포넌트를 언마운트합니다.
    renderResult.unmount()
  })

  // 첫 번째 테스트 케이스: 폼 입력 후, onProductSave가 호출되는지 테스트합니다.
  it('폼 입력 후, onProductSave가 호출된다', async () => {
    // DOM이 업데이트되는 것을 보증하기 위해 act 함수로 감싸고, React Hook Form의 handleSubmit이 호출될 때까지 기다립니다.
    await act(async () => {
      // 상품 이미지를 입력합니다. 드롭다운 컴포넌트를 찾아서 드롭 이벤트를 발생시킵니다.
      const element = await screen.findByTestId('dropzone')
      fireEvent.drop(element, {
        dataTransfer: {
          files: [
            new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' }),
          ],
        },
      })

      // 상품 제목을 입력합니다.
      const inputUsernameNode = screen.getByPlaceholderText(
        /상품 제목/,
      ) as HTMLInputElement
      fireEvent.change(inputUsernameNode, { target: { value: '상품' } })

      // 상품 정보를 입력합니다.
      const inputPasswordNode = screen.getByPlaceholderText(
        / 최고의 상품입니다/,
      ) as HTMLInputElement
      fireEvent.change(inputPasswordNode, { target: { value: '테스트테스트' } })

      // 가격을 입력합니다.
      const inputPriceNode = screen.getByPlaceholderText(
        /100/,
      ) as HTMLInputElement
      fireEvent.change(inputPriceNode, { target: { value: '100' } })

      // 등록 버튼을 클릭합니다.
      fireEvent.click(screen.getByText('등록'))
    })

    // handleProduct
