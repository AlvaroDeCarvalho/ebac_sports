import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'
import { RootReducer } from '../store'
import { useGetProdutosQuery } from '../services/api'

const ProdutosComponent = () => {
  const { data: listaProdutos, isLoading } = useGetProdutosQuery()
  const favoritos = useSelector(
    (state: RootReducer) => state.favorito.itemFavorito
  )
  if (isLoading) {
    return (
      <>
        <h2>Esta Carregando ... </h2>
      </>
    )
  }
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {Array.isArray(listaProdutos) &&
          listaProdutos.map((p: ProdutoType) => (
            <Produto
              estaNosFavoritos={produtoEstaNosFavoritos(p)}
              key={p.id}
              produto={p}
            />
          ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
