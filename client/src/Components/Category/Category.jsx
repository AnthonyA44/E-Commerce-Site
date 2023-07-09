import React from 'react'
import styled from 'styled-components'
import categories from '../../fakeData/category';
import { mobile } from '../../responsive';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection:"column" })};
`

const CategoryCon = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4px;
    justify-content: space-between;
    position: relative;
`

const Info = styled.div`
    position: absolute;
    top:0;
    left:0;
    display:flex;
    align-items: center;
    width:100%;
    height:100%;
    flex-direction: column;
    justify-content: center;
`

const Image = styled.img`
    height:100%;
    width:100%;
    object-fit: cover;
`
const Title = styled.h1`
    color: white;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: white;
    color: black;
    cursor: pointer;
    opacity: 80%;
`

const Category = () => {
  return (
    <Container>
        {categories.map((item) => (
           <CategoryCon key={item.id}>
                <Image src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    <Button>Shop now</Button>
                </Info>
            </CategoryCon>
        ))}
    </Container>
  )
}

export default Category