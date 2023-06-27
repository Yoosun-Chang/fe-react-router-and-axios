# ✨ 멋쟁이사자처럼 11기 FE - REACT ROUTER X AXIOS ✨

![image](https://github.com/Likelion-Inha-11/fe-react-router-and-axios/assets/79556112/5f71b9db-4147-4684-b867-44907a361e46)

> 여러분, 기말고사 기간 정말 고생 많으셨습니다! 이번 세션과 과제를 통해 React Router를 이용한 Client Side Routing과 Axios를 활용한 REST API 사용에 대해 학습할 예정입니다.

<br/>

## 🌿 잠깐! 세션이 이해가 가지 않았나요? 🌿

세션 내용이 이해가 잘 가지 않은 여러분들을 위한 자료를 정리했어요. 아래를 참고해주세요.

<br/>

> [얄팍한 코딩사전 - REST API가 뭔가요?](https://www.youtube.com/watch?v=iOueE9AXDQQ)  
> REST API와 관련된 개념을 파악할 수 있는 영상입니다.

<br/>

> [LIKELION FE - React Router + REST API](https://velog.io/@pexe99/LIKELION-FE-React-Router-REST-API)  
> 이번 세션에 대한 내용을 정리한 포스팅입니다.

<br/>

> [React Router v6 튜토리얼](https://velog.io/@velopert/react-router-v6-tutorial)  
> React Router와 관련된 velog 트렌딩 포스팅입니다.

<br/>

> [REST(Representational State Transfer) API](https://hudi.blog/rest-api/)  
> REST API와 관련된 블로그 포스팅입니다.

<br/>

> [Axios 공식 문서](https://axios-http.com/kr/docs/intro)  
> Axios 한글화 공식 문서입니다.

<br/>

> [Axios 러닝 가이드](https://yamoo9.github.io/axios/guide/usage.html#get-%EC%9A%94%EC%B2%AD)  
> 기본적인 Axios 관련 사용법들이 정리되어 있습니다.

<br/>

## 🔥 실습 시작하기 🔥

> 아래 설명을 잘 읽고, 세션 과제를 제출해주세요.  
> 제출은 [아기사자의 길 - React router x Axios] **Lionz 홈페이지에서 진행**해주세요.  
> 제출은 **2023년 6월 25일 오후 11시 59분까지 진행**해주세요.  

<br/>

1. 현재 이 repository를 `Fork` 합니다.
2. `Fork`한 repository를 vsCode 터미널을 이용하여 `Clone` 합니다.
3. `Clone`받은 이후, `npm install` 을 실행하여 의존성 모듈을 설치합니다.
4. 터미널에서 `npm start` 을 실행하여 로컬 개발 서버를 실행합니다.
5. 아래 설명에 따라 개발을 진행한 이후, 결과물을 `Push`한 repository 링크를 제출합니다.

<br/>

## 💫 이번에 개발할 것은? 💫

이번 세션 과제로 개발할 것은 **여러 페이지로 이루어진 웹 애플리케이션**입니다. 아래와 같이 다양한 페이지로 구성된 간단한 방명록 웹 애플리케이션을 개발합니다.    

이전과는 달리 지금부터는 실제로 동작하는 백엔드 서버가 제공됩니다. 사전에 개발된 API 서버와 여러분의 웹 애플리케이션을 연동하여 페이지를 완성해주세요!  

<br/>

## ✔️ 구현 요구 사항 ✔️

총 5개의 페이지로 이루어진 방명록 웹 애플리케이션을 완성해주세요. 각 페이지별 구성과 주소는 아래와 같습니다.  

<br/>

![Frame 1](https://github.com/Likelion-Inha-11/fe-react-router-and-axios/assets/79556112/d30da500-f0f6-4ba6-9323-64374ad0ba17)

<br/>

> http://localhost:3000/:ownerId    
> `ownerId` Param에 해당하는 유저의 모든 방명록 목록을 보여주는 페이지  
> 해당 유저의 방명록이 존재하지 않으면 `방명록이 없습니다.` 등의 메세지를 표시하여 유저에게 피드백을 제공해주세요.   
> 방명록 목록은 제목만 출력하며, 제목을 클릭하면 방명록 상세 페이지로 이동합니다.  

<br/>

> http://localhost:3000/articles/:articleId     
> 방명록 상세 페이지  
> 제목과 내용, 작성일까지 확인할 수 있습니다.  
> `제거하기` 버튼이 클릭 시에 방명록을 삭제하고 이전 페이지로 돌아갑니다.  
> `수정하기` 버튼 클릭 시에 방명록 수정 페이지로 이동합니다.  

<br/>

> http://localhost:3000/:ownerId/create   
> `ownerId` Param에 해당하는 유저에게 방명록을 작성하는 페이지  
> 방명록 작성을 완료하면 이전 페이지로 이동합니다.  

<br/>

> http://localhost:3000/articles/:articleId/edit  
> 방명록을 수정할 수 있는 페이지  
> 수정을 완료하면 이전 페이지로 이동합니다.  

<br/>

> [기타 라우트](https://github.com/faewafewaefw)  
> 올바르지 않은 주소로 접근 시에 `페이지를 찾을 수 없습니다.` 등의 메세지로 유저에데 패드백을 제공해주세요.  

<br/>

> 예시 페이지는 https://fe-react-router-and-axios-solution.pages.dev/likelion 를 참고해보세요!

<br/>

## 📚 API 정보 📚

상단에 기재된 웹 애플리케이션을 개발하며 여러분들이 직접 사용할 API입니다. 이에 대한 정보는 아래와 같습니다.

<br/>

`API HOST` : https://guestbook.jmoomin.com

`API DOCS` : https://guestbook.jmoomin.com/swagger-ui/#/ArticleController

<br/>

![Group 25](https://github.com/Likelion-Inha-11/fe-react-router-and-axios/assets/79556112/6220a8a2-7415-4b46-b575-6f04f329cd8e)

> **API 호출 방법을 확인하기 위해 상단의 `API DOCS`를 반드시 확인해주세요!!**
> API DOCS 페이지는 `Swagger`를 사용하여 빌드되었습니다.
> API의 상세 내용을 확인할 수 있습니다.
> `Tri it out` 버튼으로 실제로 API를 호출하여 결과를 확인해볼 수 있습니다.

<br/>

## 💻 너무 어렵나요? 💻

이번 과제는 이전 과제들에 비해 상당히 난이도가 높습니다. 따라서 이에 대한 예제를 여러분들에게 제공합니다. 과제 진행에 어려움을 겪는 분들께서는 아래 링크에서 완성된 예제 코드를 참고하여 과제를 완성해보세요!

<br/>

https://github.com/Likelion-Inha-11/fe-react-router-and-axios-solution

<br/>

---
@lellow_mellow
