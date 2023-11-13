import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itemFavorito: Produto[]
}

const initialState: FavoritoState = {
  itemFavorito: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload
      const existeNaLista = state.itemFavorito.find((p) => p.id === favorito.id)

      if (existeNaLista) {
        state.itemFavorito = state.itemFavorito.filter(
          (p) => p.id !== favorito.id
        )
      } else {
        state.itemFavorito.push(favorito)
      }
    }
  }
})

export const { adicionarFavorito } = favoritoSlice.actions
export default favoritoSlice.reducer
