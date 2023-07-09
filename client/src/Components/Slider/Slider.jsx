import React from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import sliderItems from '../../fakeData/data';
import './Slider.scss'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow =  styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 1;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s;
    transform: translateX(${props => props.index * -100}vw)
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    bg: #${props => props.bg}
`

const Img = styled.img`
    height:80%;
    width:100%;
    object-fit: cover;
`

const Title = styled.h1`
    font-size: 70px;
`

const Description = styled.h1`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [index, setIndex] = React.useState(0)
    const handleClick = (direction) => {
        if (direction === "left"){
            setIndex(index > 0 ? index - 1 : sliderItems.length - 1)
        } else if (direction === "right"){
            setIndex(index < sliderItems.length - 1 ? index + 1 : 0)
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick('left')}>
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper index={index}>
            {sliderItems.map((item) => (
                <Slide key={item.id} bg={item.bg}>
                    <div className='image-container'>
                        {/* add images to data.json file */}
                        <Img src={item.img} loading="lazy"/>
                    </div>
                    <div className='info-container'>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Button>SHOP NOW</Button>
                    </div>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick('right')}>
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider