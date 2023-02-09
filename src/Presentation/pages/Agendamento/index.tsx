import { useRecoilValueLoadable } from "recoil";
import { selectorGetItems } from "../../../Presentation/store/selectors/selector";
import { IProduct } from "../../../Domain/Model/Product";

export default function AgendamentoPage () {



  // recoil state
  const getItemsLoadable = useRecoilValueLoadable<IProduct[]>(selectorGetItems);
  const itens = getItemsLoadable.contents;

  return (
    <>
      <h1>Agendamento</h1>

      {itens.map((item: IProduct) => {
        return (
          <div key={item.id}>
            <p>{item.productName}</p>
            <p>{item.productPrice}</p>
            <p>{item.productQuantity}</p>
          </div>
        )
      })
      }
    
    </>


  )
}