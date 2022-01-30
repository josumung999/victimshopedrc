import styled from 'styled-components'

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  padding: 0rem;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  /* overflow-x: hidden; */
  margin-left: 32px;
  &:first-of-type{
    margin-left: 0px;
  }
  margin-bottom: 80px;
  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }
  @media screen and (max-width: 640px) {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`
export const CarouselMobileScrollNode = styled.div`
  @media screen and (max-width: 640px) {
    display: flex;
    min-width: ${({ final }) => final ? `120%;` : `min-content`}
  }
`

export const CarouselItem = styled.div`
  border-radius: 3px;
  max-width: 196px;
  margin-left: 24px;
  @media screen and (max-width: 768px) {
    max-width: 124px;
  }
  
  @media screen and (max-width: 640px) {
    margin-left: 32px;
    min-width: 150px;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
    
    ${(props) => props.active === props.index ? `opacity: 1` : `opacity: 0.5`}; 
  }
`

export const CarouselLogo = styled.img`
  width:100%;
  object-fit:cover;
`


export const CarouselButtons = styled.div`
  width: 288px;
  display: none;
  visibility: hidden;
  @media screen and (max-width: 640px) {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => props.active === props.index ? `1` : `.33`};
  transform: ${(props) => props.active === props.index ? `scale(1.6)` : `scale(1)`};
  &:focus {
    outline: none;
  }
`

export const CarouselButtonDot = styled.div`
  background-color: grey;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`