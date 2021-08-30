import React, { useState, useEffect } from "react";
import Loader from "../assets/loading.gif";
import "../style/Detail.css";

const Detail = ({ match }) => {
  //console.log(match); 콘솔에 찍으면 사용할 수 있는 값들이 나옴
  const movie_id = match.params.id;

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});
  const [genres, setGenres] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchItem = async () => {
    const details = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${movie_id}`
    );
    const detailObj = await details.json();
    const detailElm = detailObj.data.movie;
    console.log(detailObj);
    setItem(detailElm); //상태 변화 변수에 담아줬으니 item(기본값)도 변화함

    //장르 반복문 처리
    const getGenres = detailElm.genres.map((gen) => <li>{gen}</li>);
    setGenres(getGenres);
    setLoading(false);
  };
  return (
    <div className='section detail'>
      {loading ? (
        <div className='Loader'>
          <img src={Loader} className='Loading_img' alt='' />
        </div>
      ) : (
        <div className='center'>
          <h2 className='title'>{item.title}</h2>
          <img src={item.medium_cover_image} className='movie_img' alt='' />
          <ul className='genres'>Genre : {genres}</ul>
          <p className='desc'>{item.description_intro}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
