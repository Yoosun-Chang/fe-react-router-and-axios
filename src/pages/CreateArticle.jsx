import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as api from "../api/apiFunction";

const CreateArticle = () => {
  const navigate = useNavigate(); //주소를 변경할 수 있는 함수를 return
  const { ownerId } = useParams(); // useParams를 사용하여 URL 파라미터 객체를 가져온다
  const [title, setTitle] = useState(""); //초기값 설정, setTitle 함수를 이용해서 title에 데이터 할당
  const [body, setBody] = useState(""); //초기값 설정, setBody 함수를 이용해서 body에 데이터 할당

  // 제목 입력 시 호출
  //e.target.value를 사용하여 입력된 제목을 가져옴.
  // setTitle 함수를 호출하여 title에 해당 데이터 저장
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // 내용 입력 시 호출
  //e.target.value를 통해 입력된 내용을 가져옴.
  //setBody 함수를 호출하여 body에 해당 데이터 저장
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  // 방명록 제출 시 호출되는 함수
  const handleSubmit = () => {
    api
      .createArticle(ownerId, title, body) // api.createArticle 함수를 호출하여 방명록 생성 요청을 보냄
      .then((_) => {
        navigate(-1); // 성공적으로 방명록이 생성되면 이전 페이지로 이동
      })
      .catch((err) => {
        alert(err); // 에러 발생
      });
  };

  return (
    <>
      <h1>{ownerId}님의 방명록</h1>
  
      {/* 제목 입력 */}
      <input
        type="text"
        placeholder="제목"
        onChange={handleTitleChange}
        value={title}
      />
      <br />
  
      {/* 내용 입력 */}
      <textarea
        type="text"
        placeholder="내용"
        onChange={handleBodyChange}
        value={body}
      />
      <br />
  
      {/* 방명록 남기기 버튼 */}
      <button onClick={handleSubmit}>방명록 남기기!</button>
    </>
  );
  }
export default CreateArticle;