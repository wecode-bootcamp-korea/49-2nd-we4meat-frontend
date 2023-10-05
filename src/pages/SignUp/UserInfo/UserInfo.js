import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const savePhoneNumber = e => {
    const { name, value } = e.target;
    setPhoneNumber({ ...phoneNumber, [name]: value });
  };
  //유효성검사
  const [isname, setIsName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

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
  const userPhoneNumber =
    phoneNumber.first + phoneNumber.second + phoneNumber.third;

  const postUserInfo = e => {
    e.preventDefault();
    // setIsError(false);
    fetch('/data/responseData.json', {
      // 1. 실제 통신 시 POST
      // method: 'POST',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // 2. 실제 통신 시 보낼 정보
      // body: JSON.stringify({
      //   email: email,
      //   password: password,
      //   name: name,
      //   phoneNumber: userPhoneNumber
      // }),
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('communication failure');
      })
      .then(result => {
        console.log(result);
        if (result.message === 'signUp success') {
          localStorage.setItem('accessToken', result.accessToken);
          // 3. 실제 통신 시 로그인 완료 상태 관리
          // setSignUpComplete(true);
        } else {
          alert('회원가입에 실패하셨습니다.');
        }
      })
      .catch(error => {
        // setIsError(true);
      });
  };

  // 4. 실제 통신 시 페이지 이동 처리
  // useEffect(() => {
  //   if (signUpComplete === true) {
  //     navigate('/');
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [signUpComplete]);

  console.log(name);

  return (
    <div className="user-info">
      <form onSubmit={postUserInfo}>
        <fieldset>
          <legend>가입정보 입력</legend>
          <table>
            <tbody>
              <tr>
                <td>아이디(이메일주소)</td>
                <td>
                  <Input id="userId" type="text" onChange={saveEmail} />
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
                    <Button type="submit" name="중복확인" scale="smallest" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </form>
    </div>
  );
}

export default UserInfo;
