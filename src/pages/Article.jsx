import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as api from "../api/apiFunction";

const Article = () => {
  const navigate = useNavigate(); //주소를 변경할 수 있는 함수를 return
  const { articleId } = useParams(); // useParams를 사용하여 URL 파라미터 객체를 가져온다
  const [article, setArticle] = useState(null); //초기값 설정, setArticle 함수를 이용해서 article에 데이터 할당

  // articleId가 변경될 때마다 useEffect를 실행
  useEffect(() => {
    api.getArticleById(articleId).then((res) => {
      //articleId 호출에 성공하면 해당하는 내용을 가져온다
      setArticle(res.data); //데이터를 article에 저장
      console.log(res.data); //데이터 출력
    });
  }, [articleId]);

  // Delete
  const handleDeleteClicked = () => {
    api.deleteArticle(articleId).then((_) => { //articleId에 해당하는 내용을 삭제
      navigate(-1); //바로 이전 페이지로 이동
    });
  };

  // article이 null인 경우 "로딩중"을 표시하고 아니면 article 정보 표시
  return article === null ? (
    <p>로딩중</p>
  ) : (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <p>작성일: {article.createdAt}</p>

      {/* 수정하기 버튼을 클릭하면 해당 내용의 수정 페이지로 이동 */}
      {/* 버튼은 navigate() 함수를 사용하여 /articles/${articleId}/edit 경로로 이동 */}
      <button onClick={() => navigate(`/articles/${articleId}/edit`)}>
        수정하기
      </button>
      
      {/* 제거하기 버튼을 클릭하면 해당 내용을 삭제하고 바로 이전 페이지로 이동 */}
      {/* 버튼은 handleDeleteClicked 함수를 클릭 이벤트에 연결하여 해당 내용을 삭제하고 이동 */}
      <button onClick={handleDeleteClicked}>제거하기</button>
    </>
  );
};

export default Article;