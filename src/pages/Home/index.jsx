import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #121c29;
`

const ServicesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: x-large;
  font-weight: 600;
  &>div{
    width: 90%;
    padding: 5%;
    margin-bottom: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &>img, div{
      width: 40%;
    }
    &>img{
      box-shadow: 0 0 5px gray;
    }
    &:first-child{
      flex-wrap: wrap;
    }
    &:last-child{
      flex-wrap: wrap-reverse;
    }
  }
`

const ModelStyledLink = styled(Link)`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6741d9;
  color: white;
  padding: 7px 21px 7px 21px;
  border-radius: 25px; 
  font-size: x-large;
  font-weight: bold;
  transition: 0.5s;
  &:hover{
    transform: scale(1.2);
  }
`

function Home(){
  return(
    <HomeWrapper>
      <ServicesWrapper>
        <div>
          <img src="#" alt="service1" />
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum veritatis alias quis voluptatem magnam ab quibusdam corporis, delectus porro rerum ipsa esse maiores perspiciatis dolores magni neque quisquam numquam.</div>
        </div>
        <div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum veritatis alias quis voluptatem magnam ab quibusdam corporis, delectus porro rerum ipsa esse maiores perspiciatis dolores magni neque quisquam numquam.</div>
          <img src="#" alt="service2" />
        </div>
      </ServicesWrapper>

      <ModelStyledLink to='/catalog'>nos modeles</ModelStyledLink>
    </HomeWrapper>
  );
}

export default Home;