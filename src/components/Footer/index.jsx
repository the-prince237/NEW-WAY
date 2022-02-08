import styled from 'styled-components';

const FooterWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #121c29;
  color: white;
  padding: 5% 0 5% 0;
`

const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
`

function Footer(){
  return(
    <FooterWrapper>
      <FooterList>
        <li>Lorem ipsum saepe </li>
        <li>dolor sit amet consectetur</li>
        <li>adipisicing elit</li>
        <li>Eaque, quos eum vitae dolores</li>
        <li>exercitationem aspernatur alias possimus</li>
      </FooterList>
      <FooterList>
        <li>Lorem ipsum saepe </li>
        <li>dolor sit amet consectetur</li>
        <li>adipisicing elit</li>
        <li>Eaque, quos eum vitae dolores</li>
        <li>exercitationem aspernatur alias possimus</li>
      </FooterList>
      <FooterList>
        <li>Lorem ipsum saepe </li>
        <li>dolor sit amet consectetur</li>
        <li>adipisicing elit</li>
        <li>Eaque, quos eum vitae dolores</li>
        <li>exercitationem aspernatur alias possimus</li>
      </FooterList>
    </FooterWrapper>
  );
}

export default Footer;