import React, { useState, useEffect } from "react";
import Loader from "../assets/loading.gif";
import { Link } from "react-router-dom"; //Link를 쓰려면 import 해줘야 함

import "../style/Movie.css";

const Movie = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  //loading에 true로 상태값 초기화 해놓고
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    //일반적으로 fetch를 사용할 때는 두 단계를 거친다
    //1.요청 주소에서 객체 데이터를 받아옴 (data)
    //2.받아온 객체 데이터를 json() 객체로 변환함 (dataObj)
    //위 일련의 단계들을 동시에 모두 진행 시킬 수 있는 모듈이 axios 이다.

    //async - await : 비동기방식으로 외부 데이터 읽어오는 과정
    const data = await fetch("https://yts.mx/api/v2/list_movies.json?limit=5");
    //console.log(data); //결과 : 데이터 자체가 아니라 로직들만 가져와짐
    const dataObj = await data.json(); //json데이터 그대로 가져와라(json 형태로 파싱하는 과정)
    //console.log(dataObj);
    const movies = dataObj.data.movies; //원하는 데이터만 빼오는 과정
    //console.log(movies);

    //받아온 결과를 반복문을 통해 태그 작성
    const movieCon = movies.map((movie) => (
      <div key={movie.id}>
        <h2>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </h2>
        <img src={movie.medium_cover_image} alt='' />
      </div>
    ));

    setItems(movieCon);
    //로직 실행이 끝났을 때 상태값을 false로 바꿔준다
    setLoading(false);
  };

  return (
    <div className='section movie'>
      {loading ? (
        <div className='Loader'>
          <img src={Loader} className='Loading_img' alt='' />
        </div>
      ) : (
        <div className='center'>{items}</div>
      )}
    </div>
  );
};

export default Movie;
