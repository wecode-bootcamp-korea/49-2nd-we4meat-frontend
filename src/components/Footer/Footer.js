import React from 'react';
import './Footer.scss';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="inner-wrap">
          <div className="footer-navigation">
            <span>인재채용</span>
            <span>이용약관</span>
            <span className="bold">개인정보처리방침</span>
          </div>

          <div className="sns-link">
            <button className="app-button">정사각 앱 설치</button>
            <img src="/images/kakao-talk.png" alt="카카오채널 링크" />
            <img src="/images/instagram.png" alt="인스타그램 링크" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="inner-wrap">
          <div className="info">
            <div className="company">
              <img src="/images/logo.png" alt="정사각 로고" />
              <span>정사각</span>
            </div>
            <div className="info-company">
              <div>
                <span>(주)정사각</span>
                <span>대표이사: 류창선</span>
                <span>|</span>
                <span>주소: 서울시 선릉</span>
              </div>
              <div>
                <span>
                  사업자등록번호: 220-87-00000
                  <span className="blue"> [조회]</span>
                </span>
                <span>|</span>
                <span>통신판매업신고번호: 2023-서울선릉-1003</span>
              </div>
              <div>
                <span>개인정보관리책임자: 이동훈(privacy@sagak.com)</span>
                <span />
              </div>
            </div>
            <p className="copywriter">
              © 2021 Jeongsagak Inc. All rights reserved.
            </p>
          </div>
          <div className="cs">
            <div className="bold">
              <strong className="small">고객센터</strong>
              <strong className="big">1800-0658</strong>
            </div>

            <p className="business-day">
              월-토요일 : 08:30 - 17:30
              <br />
              점심 : 12:30 - 13:30
              <br />
              (일요일 및 공휴일 휴무)
            </p>
            <div className="cs-info">
              <p>
                카카오톡: <span className="blue">@정사각</span>
              </p>
              <p>
                이메일: <span className="blue">help@sagak.com</span>
              </p>
            </div>
            <button>자주묻는질문</button>
            <button>1:1문의</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
