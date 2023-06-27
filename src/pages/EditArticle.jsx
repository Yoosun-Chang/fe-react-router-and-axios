import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as api from "../api/apiFunction";

  const EditArticle = () => {
  const navigate = useNavigate(); // 주소를 변경할 수 있는 함수를 return
  const { articleId } = useParams(); // useParams를 사용하여 URL 파라미터 객체를 가져옴
  const [title, setTitle] = useState(""); // 초기값 설정, setTitle 함수를 이용해서 title에 데이터 할당
  const [body, setBody] = useState(""); // 초기값 설정, setBody 함수를 이용해서 body에 데이터 할당

   // articleId가 변경될 때마다 useEffect를 실행
  useEffect(() => {
    //해당 데이터를 title과 body에 설정
    api.getArticleById(articleId).then((res) => {
      setTitle(res.data.title);
      setBody(res.data.body);
    });
  }, [articleId]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value); // 제목을 title에 저장
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value); // 내용을 body에 저장
  };

      // 수정시 호출되는 함수
  const handleSubmit = () => {
    api
      .updateArticle(articleId, title, body)
      .then((_) => {
        navigate(-1); // 이전 페이지로 이동
      })
      .catch((err) => {
        alert(err); // 에러 발생
      });
  };

  return (
    <>
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

      {/* 방명록 수정하기 버튼 */}
      <button onClick={handleSubmit}>방명록 남기기!</button>
    </>
  );
};

export default EditArticle;