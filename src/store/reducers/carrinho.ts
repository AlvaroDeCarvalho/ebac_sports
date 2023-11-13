import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type carrinhoState = {
  itens: Produto[]
}

const initialState: carrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const jogo = action.payload
      if (state.itens.find((p) => p.id === jogo.id)) {
        alert('item ja adicionado')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})
export const { adicionar } = carrinhoSlice.actions

export default carrinhoSlice.reducer
