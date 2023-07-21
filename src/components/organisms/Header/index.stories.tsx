import { ComponentMeta } from '@storybook/react'
import React, { useEffect } from 'react'
import Header from './index'
import { AuthContextProvider } from 'contexts/AuthContext'
import {
  ShoppingCartContextProvider,
  useShoppingCartContext,
} from 'contexts/ShoppingCartContext'

// 스토리북의 구성 정보를 설정
export default { title: 'organisms/Header' } as ComponentMeta<typeof Header>

// NoLogin 스토리
export const NoLogin = () => <Header />

// Login 스토리
export const Login = () => {
  const authUser = {
    id: 1,
    username: 'dummy',
    displayName: 'Hana Kim',
    email: 'hana.kim@example.com',
    profileImageUrl: '/images/sample/1.jpg',
    description: '',
  }

  // ChildComponent 컴포넌트 정의
  const ChildComponent = () => {
    const { addProductToCart } = useShoppingCartContext()

    // 컴포넌트가 마운트되면 임의의 상품을 장바구니에 추가하는 함수를 호출
    useEffect(() => {
      addProductToCart({
        id: 1,
        category: 'book',
        title: 'Product',
        description: '',
        imageUrl: '/images/sample/1.jpg',
        blurDataUrl: '',
        price: 10000,
        condition: 'used',
        owner: authUser,
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return <Header />
  }

  // Header 컴포넌트 렌더링
  return (
    // 장바구니 컨텍스트와 사용자 인증 컨텍스트를 적용
    <ShoppingCartContextProvider>
      <AuthContextProvider
        context={{ apiRootUrl: 'https://dummy' }}
        authUser={authUser}
      >
        <ChildComponent />
      </AuthContextProvider>
    </ShoppingCartContextProvider>
  )
}
