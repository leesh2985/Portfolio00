import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { styled } from 'styled-components';

export default function ImageUpload() {
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null); // 이미지 미리보기 URL

  function handleImg(e: ChangeEvent<HTMLInputElement>) {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      setImage(selectedImage);

      // 이미지 미리보기 URL 생성
      const reader = new FileReader();
      reader.readAsDataURL(selectedImage);
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
    }
  }

  function handleApi() {
    if (image) {
      const formData = new FormData();
      formData.append('image', image);
      axios.post('url', formData).then(res => {
        console.log(res);
      });
    }
  }

  return (
    <ImgContainer>
      {previewImage && <PreviewImage src={previewImage} alt="Preview" />} {/* 이미지 미리보기 */}
      <MyImg type="file" name="file" onChange={handleImg} value="" />{' '}
      {/* 이미지 업로드를 유지하기 위해 value를 빈 문자열로 설정 */}
      <button onClick={handleApi}>Submit</button>
    </ImgContainer>
  );
}

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const MyImg = styled.input``;

const PreviewImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 10px;
  object-fit: cover;
  object-position: center;
  border: 1px solid #000;
`;
