import React, {useEffect, useState} from "react";
import {BannerCardWrapper, CardContent, CardImg, CardText} from "../cards/bannerCard/style";
import {CardIconsRow} from "../cards/otherElems/iconsRow";
import {Pagination} from "./paginateEl";
// import {} from "./paginationStyle";
import {CardImgPaginate, BannerCardWrapperPag, PaginateWrap} from './style';

type PostTypes = {
    id: number,
    image?: string,
    title?: string,
    text?: string,
    date?: string,
    lesson_num: number,
    author?: number,
}



export const PageListing = ()  => {

    const [posts, setPosts] = useState<PostTypes[]>([]);
    const [error, setError] = useState();
    const [count, setCount] = useState();
    const [offset, setOffset] = useState(0);

        const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=20&search=${e.target.value}`)
            .then(response => response.json())
            .then(data => setPosts(data.results))
    };

    const LIMIT_RANGE = 20;

    const getPosts = (offset: number) => {
        // return fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=20{offset ? ('&offset=' + offset) : ''}`)
        return fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=${LIMIT_RANGE}${offset ? ('&offset=' + offset) : ''}`)
    .then(response => response.json())
    }

    useEffect(() => {

            getPosts(offset)
            .then(data => {
                setCount(data.count);
                setPosts(data.results);
            })
            // .catch(error =>
            //     // console.log(error)
            //     setError(error.message)
            // })
        }, [offset])

    const handlePageClick = (event: {selected: number}) =>
        setOffset ( LIMIT_RANGE * event.selected);

        if(error) {
            return <h6>{error}</h6>
        }

        return (
            <PaginateWrap>

                <input type={"text"} onChange={handleInput} />

                <h3>Example for pagination</h3>
                <div style={{  flexDirection: "row",
                    rowGap: "40px",
                    columnGap: "30px",
                    flexWrap: "wrap",
                    display: "flex",
                    justifyContent: "space-between"}}>


                    {posts.map((card) =>
                        <BannerCardWrapperPag key={card.id}>
                            <CardContent>
                                <CardText>
                                    <span>{card.date}</span>
                                        <h2>
                                            {card.title}
                                        </h2>
                                    <p>{card.text}</p>
                                </CardText>
                                <CardImgPaginate>
                                        <img src={card.image} alt={"post"}/>
                                </CardImgPaginate>
                            </CardContent>
                            <CardIconsRow likesNumb={card.lesson_num} id={card.id}/>
                        </BannerCardWrapperPag>
                    )}
                </div>
                <Pagination count={count} handlePageClick={handlePageClick}/>
         </PaginateWrap>
    )
}