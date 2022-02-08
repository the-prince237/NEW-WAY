import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {HiShoppingCart} from 'react-icons/hi';
import {IoLogoSlack} from 'react-icons/io'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px gray;
  margin-bottom: 30px;
  padding: 2% 1.5% 2% 1.5%;
`

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  color: #6741d9;
  font-weight: 600;
  font-size: 200%;
  &>*{
    margin-right: 5px;
  }
  >span{
    color: #121c29;
    font-weight: 1000;
  }
`

const MenuWrapper = styled.nav`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 600;
  color: gray;
  &>.menu-link{
    margin: 0 5% 0 5%;
    transition: 0.3s;
    &:hover{
      transform: scale(1.2);
    }
  }
  &>.models-link{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6741d9;
    color: white;
    padding: 5px 15px 5px 15px;
    border-radius: 25px;
  }
`

const CartButton = styled.div`
  display: flex;
  justi-content: space-evenly;
  &>span{
    color: #6741d9;
  }
  cursor: pointer;
`

function Header(){
  return(
    <HeaderWrapper>
      <LogoWrapper to='/NEW-WAY/'>
        <IoLogoSlack color='#6741d9' size='2em' alt="NEW WAY" /> <span>new</span> way
      </LogoWrapper>

      <MenuWrapper>
        <Link className='menu-link' to='/NEW-WAY/'>accueil</Link>
        <Link className='menu-link models-link' to='/NEW-WAY/catalog'>modèles</Link>
        <Link className='menu-link' to='/NEW-WAY/about'>à propos</Link>
      </MenuWrapper>

      <CartButton>
        <HiShoppingCart size='1.5em' color='#121c29' alt="cart" />
        <span>0</span>
      </CartButton>
    </HeaderWrapper>
  );
}

export default Header;