import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Architectures = ({data}) => {
    return(
        <ArchitecturesContainer>
            <div className='container'>
            {data.allSanityArchitecture.nodes.map(({ _id, thumbnail, title, slug, thumbnailMetadescription }) => {
                            const bgGetDataImage = getImage(thumbnail.asset)
                            const bgGetDataImageAlt = thumbnail.alt
                    return (
                        <div className='project' key={_id}>
                            <AniLink fade top="entry" bg="#FFF" to={`/${slug.current}`}>
                                <div className='image'>
                                    <GatsbyImage
                                        image={bgGetDataImage}
                                        alt={bgGetDataImageAlt}
                                    />
                                    <div className='cont'>
                                        <div className='overlay'></div>
                                        <div className='text'>
                                            <h2>{title}</h2>
                                            <p>{thumbnailMetadescription}</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </AniLink>
                        </div>
                    );
                })}
            </div>
        </ArchitecturesContainer>
    )
}

const ArchitecturesContainer = styled.section`
    margin-top: 320px;
    position: relative;
    @media (max-width: 850px) {
        margin-top: 50px;
    }
    @media (max-width: 680px) {
        display: none;
    }
    .container {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        margin-bottom: 0px;
        @media (max-width: 950px) {
            margin-bottom: 100px;
        }
        .project {
            width: 100%;
            position: relative;
            .image {
                position: relative;
            }
            a {
                position: relative;
                &:hover {
                    .cont {
                        display: block;
                    }
                }
                .cont {
                    display: none;
                    .overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        right: 0;
                        z-index: 1;
                        background-color: white;
                        transform: scale(1.19);
                        filter: blur(10px);
                    }
                    .text {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        z-index: 1;
                        padding: 50px 20px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        height: 100%;
                        text-align: center;
                        h2 {
                            font-size: 30px;
                            color: white;
                            text-transform: uppercase;
                        }
                        p {
                            font-size: 18px;
                            color: white;
                        }
                    }
                }
            }
            
            &:nth-child(10n - 9) {
                grid-column: 1/span 4;
                grid-row: auto;
                .overlay {
                    background-image: linear-gradient(rgba(241, 115, 56, .5), rgba(244, 8, 244, .5));
                }
                @media (max-width: 950px) {
                    grid-column: 1/span 5;
                }
            }
            &:nth-child(10n - 8) {
                grid-column: 7/span 4;
                grid-row: auto;
                margin-bottom: -100px;
                margin-top: 150px;
                .overlay {
                    background-image: linear-gradient(rgba(51, 51, 255, .5), rgba(244, 8, 244, .5));
                }
            }
            &:nth-child(10n - 7) {
                margin-top: 150px;
                grid-column: 3/span 3;
                grid-row: auto;
                margin-bottom: 200px;
                .overlay {
                    background: linear-gradient(180deg, rgba(191, 170, 145, 0.5) 41.15%, rgba(244, 8, 244, 0.5) 100%);
                    filter: blur(50px);                }
                @media (max-width: 950px) {
                    grid-column: 2/span 4;
                    margin-top: 100px;
                    margin-bottom: 100px;
                }
            }
            &:nth-child(10n - 6) {
                grid-column: 2/span 8;
                grid-row: auto;
                margin-bottom: 200px;
                .overlay {
                    background-image: linear-gradient(rgba(51, 51, 255, .5), rgba(244, 8, 244, .5));
                }
                @media (max-width: 950px) {
                    grid-column: 1/span 10;
                    margin-bottom: 100px;
                }
            }
            &:nth-child(10n - 5) {
                grid-column: 1/span 4;
                grid-row: auto;
                .overlay {
                    background-image: linear-gradient(rgba(241, 115, 56, .5), rgba(244, 8, 244, .5));
                }
                @media (max-width: 950px) {
                    grid-column: 1/span 5;
                }
            }
            &:nth-child(10n - 4) {
                grid-column: 7/span 4;
                grid-row: auto;
                margin-top: 200px;
                margin-bottom: 200px;
                .overlay {
                    background-image: linear-gradient(rgba(51, 51, 255, .5), rgba(244, 8, 244, .5));
                }
                @media (max-width: 950px) {
                    margin-bottom: 100px;
                }
            }
            &:nth-child(10n - 3) {
                grid-column: 4/span 4;
                grid-row: auto;
                margin-bottom: 200px;
                .overlay {
                    background-image: linear-gradient(rgba(191, 170, 145, .5), rgba(244, 8, 244, .5));
                }
                @media (max-width: 950px) {
                    grid-column: 3/span 6;
                    margin-bottom: 100px;
                }
            }
            &:nth-child(10n - 2) {
                grid-column: 2/span 4;
                grid-row: auto;
                margin-top: 200px;
                margin-bottom: 200px;
                .overlay {
                    background-image: linear-gradient(rgba(191, 170, 145, .5), rgba(244, 8, 244, .5));
                }
                @media (max-width: 950px) {
                    grid-column: 1/span 4;
                    margin-bottom: 100px;
                }
            }
            &:nth-child(10n - 1) {
                grid-column: 7/span 4;
                grid-row: auto;
                .overlay {
                    background-image: linear-gradient(rgba(191, 170, 145, .5), rgba(244, 8, 244, .5));
                }
                @media (max-width: 950px) {
                    grid-column: 6/span 5;
                }
            }
            &:nth-child(10n) {
                grid-column: 2/span 8;
                grid-row: auto;
                margin-bottom: 200px;
                .overlay {
                    background-image: linear-gradient(rgba(51, 51, 255, .5), rgba(244, 8, 244, .5));
                }
                @media (max-width: 950px) {
                    grid-column: 1/span 10;
                    margin-bottom: 100px;
                }
            }
        }
    }
`

export default Architectures