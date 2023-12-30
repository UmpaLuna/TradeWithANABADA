import { ProductInfoType } from '../sale/Sale';
import * as St from './EditSale.styled';
import Form from './form/Form';
export type EditSalePropsType = {
  productInfo: ProductInfoType;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
};
const EditSale = ({ productInfo, isEdit, setIsEdit }: EditSalePropsType) => {
  return (
    <St.Container>
      <Form productInfo={productInfo} isEdit={isEdit} setIsEdit={setIsEdit} />
    </St.Container>
  );
};

export default EditSale;
