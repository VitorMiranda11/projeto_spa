import { useParams } from 'react-router-dom';
import { ListaProdutos } from './ListaProdutos';






export default function EditarProdutos(){
    const {id} = useParams()

    const produtoSelecionado = ListaProdutos.filter(produto => produto.id)
    
    return(
        <main>
            <p>Produto Selecionado para Edição: {produtoSelecionado[0].nome}</p>

            <form >
                <fieldset>
                    <legend>Produto Selecionado</legend>
                    <div>
                        <label htmlFor="idNome">Nome:</label>
                        <input type="text" name='nome' id='idNome' value={produtoSelecionado[0].nome} />
                    </div>
                    <div>
                        <label htmlFor="idDesc">Descrição</label>
                        <input type="text" name='desc' id='idDesc' defaultValue={produtoSelecionado[0].desc} />
                    </div>
                    <div>
                        <label htmlFor="idPreco">Preço</label>
                        <input type="text" name='preco' id='id' defaultValue={produtoSelecionado[0].preco} />
                    </div>
            
                </fieldset>
            </form>
        </main>
    )

}
