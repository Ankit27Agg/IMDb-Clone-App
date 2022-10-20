import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import '../MoviesList/MoviesList.css';

export default function MoviesList() {
    const [err, setErr] = useState();
    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();


    useEffect(() => {
        setErr();
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => {
                setMovieList(data.results)
                console.log(data.results)
            })
            .catch(error=>setErr(error))
            // console.log(type);

    }, [type])
    

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {   (err ? <h5>TECHNICAL ISSUE: unable to process request</h5> : movieList.map(movie => (
                        <Card movie={movie} />
                    )) )
                    
                }
            </div>
        </div>
    )
}
