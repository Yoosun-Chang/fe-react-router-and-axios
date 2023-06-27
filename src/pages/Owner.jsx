import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as api from "../api/apiFunction";

  const Owner = () => {
  const navigate = useNavigate(); // 주소를 변경할 수 있는 함수를 return
  const { ownerId } = useParams(); // useParams를 사용하여 URL 파라미터 객체를 가져옴
  const [articles, setArticles] = useState([]); // 초기값 설정, setArticles 함수를 이용해서 articles에 데이터 할당

    // ownerId가 변경될 때마다 useEffect를 실행
  useEffect(() => {
    // ownerId 호출에 성공하면 해당하는 내용을 가져온다
    api.getArticleByOwnerId(ownerId).then((res) => {
      setArticles(res.data); //데이터를 article에 저장
    });

    console.log(articles); // articles 출력
  }, [ownerId]);


  return (
    <>
      {/* ownerId와 함께 제목을 표시 */}
      <h1>{ownerId}님의 방명록</h1>

      {/* articles 배열에 값이 있으면 */}
      {articles.length ? (
        <ul>
          {/* articles.map()을 사용하여 articles 배열을 순회하며 각 방명록에 대한 링크를 생성 */}
          {articles.map((article) => {
            return (
              <li key={article.id}>
                {/* 해당 방명록으로 이동하는 링크 */}
                <Link to={`/articles/${article.id}`}>{article.title}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>방명록이 없습니다.</p>
      )}

      {/* 방명록을 작성하는 페이지로 이동하는 버튼 */}
      <button onClick={() => navigate(`/${ownerId}/create`)}>
        방명록 남기기
      </button>
    </>
  );
};

export default Owner;