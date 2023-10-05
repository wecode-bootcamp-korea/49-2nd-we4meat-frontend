import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../config';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import './UserInfo.scss';

const emailRegExp =
  /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
const passwordRegExp = /^[A-Za-z0-9]{6,12}$/;

function UserInfo(props) {
  const navigate = useNavigate();
  const [signUpComplete, setSignUpComplete] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState({
    first: '010',
    second: '',
    third: '',
  });

  const { first, second, third } = phoneNumber;
  const userPhoneNumber =
    phoneNumber.first + phoneNumber.second + phoneNumber.third;

  const savePhoneNumber = e => {
    const { name, value } = e.target;
    setPhoneNumber({ ...phoneNumber, [name]: value });
  };

  const checkEmailBtn = e => {
    e.preventDefault();
    if (email.includes('@')) {
      setIsEmail(true);
      fetch(`${API.CHECK_DUPLICATE}`, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then(res => res.json())
        .then(isDouble => {
          if (!isDouble.message === 'EMAIL_AVAILABLE') {
            alert('이미 사용 중인 이메일입니다.');
            setIsEmail(false);
          }
        });
    } else {
      alert('이메일에 @는 필수입니다.');
    }
  };
  const checkPhoneNumberBtn = e => {
    e.preventDefault();
    if (userPhoneNumber === '') {
      alert('휴대폰 번호를 입력하세요.');
      return;
    }

    fetch(`${API.CHECK_DUPLICATE}`, {
      method: 'POST',
      body: JSON.stringify({
        phoneNumber: userPhoneNumber,
      }),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(isDouble => {
        if (isDouble.message === 'PHONENUM_IN_USE') {
          alert('이미 사용 중인 번호입니다.');
          setIsPhoneNumber(false);
        } else {
          alert('사용 가능한 번호입니다.');
          setIsPhoneNumber(true);
        }
      })
      .catch(error => {
        console.error('휴대폰 번호 확인 중 오류 발생:', error);
      });
  };

  //유효성검사
  const [isname, setIsName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPhoneNumber, setIsPhoneNumber] = useState(false);

  //오류메세지 상태 저장
  const [nameMessage, setNameMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  const saveEmail = e => {
    setEmail(e.target.value);
  };
  const saveName = e => {
    setName(e.target.value);
  };

  const savePassword = e => {
    setPassword(e.target.value);
  };

  const saveConfirmPassword = e => {
    setConfirmPassword(e.target.value);
  };

  useEffect(() => {
    if (email.length === 0 && !emailMessage) return;
    if (!emailRegExp.test(email)) {
      setIsEmail(false);
      setEmailMessage('이메일의 형식이 올바르지 않습니다!');
    } else {
      setIsEmail(true);
      setEmailMessage('사용 가능한 이메일 입니다.');
    }
  }, [email]);

  useEffect(() => {
    if (password.length === 0 && !passwordMessage) return;
    if (!passwordRegExp.test(password)) {
      setPasswordMessage(
        '숫자와 문자 포함 형태의 6~12자리 이내로 작성해 주세요.',
      );
      setIsPassword(false);
    } else {
      setPasswordMessage('안전한 비밀번호입니다.');
      setIsPassword(true);
    }
  }, [password]);

  useEffect(() => {
    if (!password || !confirmPassword) return;

    if (password !== confirmPassword) {
      setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.');
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage('비밀번호가 일치합니다.');
      setIsPasswordConfirm(true);
    }
  }, [password, confirmPassword]);

  const postUserInfo = e => {
    e.preventDefault();
    // setIsError(false);
    fetch(`${API.SIGNUP}`, {
      // 1. 실제 통신 시 POST
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // 2. 실제 통신 시 보낼 정보
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        phoneNumber: userPhoneNumber,
      }),
    })
      .then(response => {
        return response.json();
        throw new Error('communication failure');
      })
      .then(result => {
        console.log(result);
        if (result.message === 'SIGNUP_SUCCESS') {
          setSignUpComplete(true);
        } else {
          alert('회원가입에 실패하셨습니다.');
        }
      })
      .catch(error => {
        // setIsError(true);
      });
  };

  useEffect(() => {
    if (signUpComplete === true) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signUpComplete]);

  return (
    <div className="user-info">
      <form onSubmit={postUserInfo}>
        <fieldset>
          <legend>가입정보 입력</legend>
          <table>
            <tbody>
              <tr className="user-email">
                <td>아이디(이메일주소)</td>
                <td>
                  <div className="email-check">
                    <Input id="email" type="email" onChange={saveEmail} />
                  </div>
                  <Button
                    type="submit"
                    name="중복확인"
                    scale="smallest"
                    onClick={checkEmailBtn}
                  />
                  <span className={isEmail ? 'black' : 'red'}>
                    {emailMessage}
                  </span>
                </td>
              </tr>
              <tr>
                <td>비밀번호</td>
                <td>
                  <Input
                    id="password"
                    type="password"
                    onChange={savePassword}
                  />
                  <span className={isPassword ? 'black' : 'red'}>
                    {passwordMessage}
                  </span>
                </td>
              </tr>
              <tr>
                <td>비밀번호 확인</td>
                <td>
                  <Input
                    id="confirmPassword"
                    type="password"
                    onChange={saveConfirmPassword}
                  />
                  <span className={isPasswordConfirm ? 'black' : 'red'}>
                    {passwordConfirmMessage}
                  </span>
                </td>
              </tr>
              <tr>
                <td>이름</td>
                <td>
                  <Input id="userName" type="text" onChange={saveName} />
                </td>
              </tr>
              <tr className="user-phone">
                <td>휴대폰번호</td>
                <td>
                  <div className="phone-box">
                    <select name="first" onChange={savePhoneNumber}>
                      <option value="010">010</option>
                      <option value="011">011</option>
                      <option value="017">017</option>
                      <option value="016">016</option>
                      <option value="019">019</option>
                    </select>
                  </div>
                  <div className="phone-box">
                    <div className="bar" />
                    <Input
                      type="tel"
                      maxLength="4"
                      className="input-box sign-up"
                      onChange={savePhoneNumber}
                      name="second"
                    />
                  </div>
                  <div className="phone-box">
                    <div className="bar" />
                    <Input
                      type="tel"
                      maxLength="4"
                      className="input-box sign-up"
                      onChange={savePhoneNumber}
                      name="third"
                    />
                  </div>
                  <div className="phone-box">
                    <Button
                      type="submit"
                      name="중복확인"
                      scale="smallest"
                      onClick={checkPhoneNumberBtn}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <Button
            type="submit"
            full="full"
            name="가입하기"
            onClick={postUserInfo}
          />
        </fieldset>
      </form>
    </div>
  );
}

export default UserInfo;
