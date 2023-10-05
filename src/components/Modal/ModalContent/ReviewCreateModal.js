import React, { useRef, useState } from 'react';
import { API } from '../../../config';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

const ReviewCreateModal = props => {
  const [review, setReview] = useState({
    title: '',
    content: '',
  });
  const { title, content } = review;
  // const [fileName, setFileName] = useState('');
  // const [file, setFile] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const nameInput = useRef();

  // const addFile = e => {
  //   setFileName(e.target.files[0]?.name);
  //   let reader = new FileReader();
  //   reader.onload = function (e) {
  //     setFile(e.target.result);
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  // };

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

  const typingSentry = e => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const reviewValidationCheck = text => {
    if (text.length >= 3) {
      return true;
    }
    return false;
  };

  const isDisabled = !(
    reviewValidationCheck(title) && reviewValidationCheck(content)
  )
    ? true
    : false;

  const postReviewCreate = e => {
    e.preventDefault();

    fetch(`${API.REVIEW}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        title: title,
        body: content,
      }),
    })
      .then(response => {
        if (response.status === 201) {
          return response.json();
        }
        throw new Error('communication failure');
      })
      .then(result => {
        console.log(result);
        setModalOpen(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="review-create-modal">
      <section className="review-form">
        <form onChange={typingSentry}>
          <fieldset>
            <legend className="hidden">리뷰 작성 양식</legend>
            <section className="file-upload">
              <div className="left-area">
                <Input
                  type="text"
                  className="input"
                  name="title"
                  placeholder="리뷰 제목을 입력해 주세요."
                  maxLength="50"
                />
                <label className="textarea-label">
                  <textarea
                    name="content"
                    placeholder="내용을 입력해 주세요."
                  />
                </label>
              </div>
              {/* <div className="right-area">
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
              </div> */}
            </section>
          </fieldset>
        </form>
        <Button
          type="submit"
          full="full"
          name="리뷰 작성 완료"
          disabled={isDisabled}
          onClick={postReviewCreate}
        />
      </section>
    </div>
  );
};

export default ReviewCreateModal;
