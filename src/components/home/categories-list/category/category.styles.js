import styled from "styled-components";

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
`

export const CategoryBodyContainer = styled.div`
    opacity: 0.5;
    position: absolute;
    background-color: white;
    width: 12%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
`

export const CategoryContainer = styled.div`
    border: 1px solid black;
    width: 30%;
    margin: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(50vh - 2em);
    overflow: hidden;

    :last-child, :nth-child(4) {
        width: 46%;
    }

    :hover {
        cursor: pointer;

        ${BackgroundImage} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        ${CategoryBodyContainer} {
            opacity: 0.8;
        }
    }
`