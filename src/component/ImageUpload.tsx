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
      <PreviewImageContainer>
        <PreviewImage src={previewImage || '/default-image.png'} /> {/* 기본 이미지 또는 미리보기 이미지 표시 */}
      </PreviewImageContainer>
      <MyImg type="file" name="file" onChange={handleImg} value="" />
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

const PreviewImageContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 10px;
  border: 1px solid #000;
  background-color: #a9a9a9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
