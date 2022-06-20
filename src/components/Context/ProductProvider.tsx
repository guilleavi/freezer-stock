import React, { PropsWithChildren, createContext, useReducer } from 'react'
import { Product } from 'types/product'
import { ProductAction, ProductActions, ProductState } from 'types/state'

const initialState: ProductState = {
  typedProductName: '',
  product: {} as Product,
}

const ProductContext = createContext<{
  state: ProductState
  dispatch: React.Dispatch<ProductAction>
}>({ state: initialState, dispatch: () => null })

const reducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case ProductActions.GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      }
    case ProductActions.TYPE_PRODUCT:
      return {
        ...state,
        typedProductName: action.payload,
      }
    default:
      console.error('Action not implemented')
      throw Error
  }
}

const ProductProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductProvider, ProductContext }
