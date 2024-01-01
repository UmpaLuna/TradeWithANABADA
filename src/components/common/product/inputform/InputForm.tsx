import { CommonProductInfoType } from '../Form/Form';
import * as St from './InputForm.styled';
import CategoryInput from './categoryInput/CategoryInput';
import HashTagInput from './hashTagInput/HashTagInput';
import InfoInput from './infoInput/InfoInput';
import TextInput from './textInput/TextInput';

type InputFormPropsType = {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  productInfo?: CommonProductInfoType | undefined;
};

const InputForm = ({ tags, setTags, productInfo }: InputFormPropsType) => {
  return (
    <St.Container>
      <InfoInput productInfo={productInfo} />
      <HashTagInput tags={tags} setTags={setTags} />
      <CategoryInput />
      <TextInput productInfo={productInfo} />
      {/* button하나 들어가야함/ */}
    </St.Container>
  );
};

export default InputForm;
