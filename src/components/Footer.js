import { style } from '@mui/system'
import React from 'react'
import styled from 'styled-components'


function Footer() {
  return (
    <Container>
      <Contact>
        <Title>Entre em contato</Title>
        <ul class="contact-info">
          <li class="contact-item"><ion-icon name="logo-whatsapp"></ion-icon>
            <a href="https://wa.me/5512992317705" class="contact-link">  5512992317705</a></li>
          <li class="contact-item">	<ion-icon name="call-outline"></ion-icon>
            <a href="tel:(12)99231-7705" class="contact-link">  (12)99231-7705</a></li>
          <li class="contact-item"> <ion-icon name="mail-outline"></ion-icon>
            <a href="mailto:brechoqb.co@gmail.com" class="contact-link">  bootandmore@gmail.com</a></li>
        </ul>
      </Contact>
      <Payment>
        <Title >Formas de pagamento</Title>
        <Cards>
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" class="icon-logo lazyloaded" alt="visa" width="40" height="25" />
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" class="icon-logo lazyloaded" alt="mastercard" width="40" height="25" />
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" class="icon-logo lazyloaded" alt="amex" width="40" height="25" />
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png" class="icon-logo lazyloaded" alt="diners" width="40" height="25" />
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/aura@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/aura@2x.png" class="icon-logo lazyloaded" alt="br_aura" width="40" height="25" />
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/boleto@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/boleto@2x.png" class="icon-logo lazyloaded" alt="br_boleto" width="40" height="25" />
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/elo@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/elo@2x.png" class="icon-logo lazyloaded" alt="br_elo" width="40" height="25" />
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/hipercard@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/hipercard@2x.png" class="icon-logo lazyloaded" alt="br_hipercard" width="40" height="25" />
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/pagseguro@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/pagseguro@2x.png" class="icon-logo lazyloaded" alt="pagseguro" width="40" height="25" />
        </Cards>
      </Payment>
      <CopyRights>
        <p>Copyright Boot&More Co. - 35902441000163</p>
        <p> Todos os direitos reservados - 2022 </p>
      </CopyRights>
    </Container>
  )
}

export default Footer

const Title = styled.div`
  text-align: start;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;


const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 15px;
background-color: #AD7373;
`;
const Logo = styled.div`
display: flex;
`;
const Contact = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 15px;
`;
const Payment = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`;
const CopyRights = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
margin-bottom: 20px;
`;