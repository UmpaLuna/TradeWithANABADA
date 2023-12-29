import { useEffect, useRef, useState } from 'react';
import { deleteImage, getImageUrl, getUserSession, updateUserData, uploadProfileImage } from '../../API/supabase.api';
import defaultImg from '../../styles/assets/user.svg';
import * as St from './Profile.styled';

type UidProps = {
  uid: string;
};

const UpdateProfile = ({ uid }: UidProps) => {

  const [edit, setEdit] = useState(false);
  const [nickname, setNickname] = useState('');
  const [img, setImg] = useState<File | undefined>(undefined);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const checkUserSession = async () => {
    const { session } = await getUserSession();
    if (session !== null) {
      const userMetadata = session?.user.user_metadata.full_name;
      const userUid = session?.user.id;
      // 이미지 변경
      if (img) {
        await deleteImage(userUid);
        await uploadProfileImage(userUid, img);
      }
      await downloadImgUrl(userUid);
      // 닉네임 변경
      if (nickname === '') {
        setNickname(userMetadata);
      } else {
        if (nickname === userMetadata && img === undefined) {
          if (window.confirm('변경된 내용이 없습니다. 계속하시겠습니까?')) {
            setEdit(false);
            return;
          } else {
            return;
          }
        }
        alert('변경 완료되었습니다.');
        setEdit(!edit);
        updateUserData(nickname);
      }
    }
  };

  const downloadImgUrl = async (userUid: string) => {
    const getImgUrl = await getImageUrl(userUid);
    if (getImgUrl) {
      if (imgRef.current) {
        imgRef.current.src = getImgUrl?.signedUrl;
      }
    }
  };

  const onNicknameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const onFileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImg(e.target.files?.[0]);
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (edit) {
      checkUserSession();
    } else {
      setEdit(!edit);
    }
  };

  useEffect(() => {
    checkUserSession();
    setImg(undefined);
  }, []);

  return (
    <>
      <St.ProfileImg>
        <img ref={imgRef} src={defaultImg} alt="profileImg" />
      </St.ProfileImg>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <St.ProfileInfo>
          <St.Nickname>
            {edit ? (
              <input type="text" maxLength={10} value={nickname} onChange={(e) => onNicknameChangeHandler(e)} />
            ) : (
              <p>{nickname}</p>
            )}
          </St.Nickname>
          {edit ? (
            <>
              <St.UploadImg htmlFor="img">이미지 업로드</St.UploadImg>
              <input
                id="img"
                type="file"
                accept="image/*"
                onChange={(e) => onFileChangeHandler(e)}
                style={{ display: 'none' }}
              />
            </>
          ) : null}
          <St.ProfileEdit>{edit ? '프로필 변경 완료' : '프로필 변경하기'}</St.ProfileEdit>
        </St.ProfileInfo>{' '}
      </form>
    </>
  );
};

export default UpdateProfile;
