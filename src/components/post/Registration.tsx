import ImageContainer from './ImageSlider/ImageContainer';
import * as St from './Post.styled';
import PostForm from './form/PostForm';

const Registration = () => {
  return (
    <St.Container>
      <St.Wrapper>
        <ImageContainer />
        <PostForm />
      </St.Wrapper>
    </St.Container>
  );
};

export default Registration;
