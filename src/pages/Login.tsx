import styled from 'styled-components'


function Login() {


  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp>GET ALL THERE</SignUp>
            <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione aliquam cupiditate sed et! Autem, perspiciatis. Dignissimos laudantium natus quisquam eius. Eius magnam delectus non harum animi sed eum? Numquam, debitis.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(99vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.7;
        z-index: -1;
    }
`
const CTA = styled.div`
    max-width: 850px ;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 200px;
    align-items: center;
    
`

const CTALogoOne = styled.img`
    
`

const SignUp = styled.a`
    margin-top: 8px;
    margin-bottom: 12px;
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;

    &:hover {
        background: #0483ee;
        transform: scale(1.01);
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
    width: 90%;
`