import React, { useRef, useState } from 'react';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

const ReviewCreateModal = () => {
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState('');
  const nameInput = useRef();

  const addFile = e => {
    setFileName(e.target.files[0]?.name);
    let reader = new FileReader();
    reader.onload = function (e) {
      setFile(e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  // const imageUpload = e => {
  //   e.preventDefault();
  //   fetch('data/orderMock.json', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //     });
  // };

  return (
    <div className="review-create-modal">
      <section className="review-form">
        <form>
          <fieldset>
            <legend className="hidden">리뷰 작성 양식</legend>
            <section className="file-upload">
              <div className="left-area">
                <Input
                  type="text"
                  className="input"
                  name="title"
                  placeholder="리뷰 제목을 입력해 주세요."
                />
                <label className="textarea-label">
                  <textarea placeholder="내용을 입력해 주세요." />
                </label>
              </div>
              <div className="right-area">
                <div>
                  <input
                    type="text"
                    ref={nameInput}
                    value={fileName}
                    className="upload-name"
                    readOnly
                  />
                  <label htmlFor="file">이미지 선택</label>
                </div>
                <img
                  className="preview"
                  alt="업로드 사진 미리보기"
                  src={file}
                />
                <input
                  id="file"
                  type="file"
                  accept="image/*"
                  onChange={addFile}
                />
              </div>
            </section>
          </fieldset>
        </form>
        <Button
          type="submit"
          full="full"
          name="리뷰 작성 완료"
          // onClick={imageUpload}
        />
      </section>
    </div>
  );
};

export default ReviewCreateModal;
