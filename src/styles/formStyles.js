import styled from '@emotion/styled'

export const Wrapper = styled.div`
  padding-bottom: 5%;
`

export const Hero = styled.div`
  background: hsl(170, 11%, 78%);
  display: flex;
  flex-flow: column;
  place-items: center;
  padding: 5% 0;
  @media only screen and (max-width: 767px) {
    padding: 15% 0;
  }
`

export const Form = styled.form`
  min-height: 500px;
  transform: translateY(-2rem);
  background: white;
  display: flex;
  flex-flow: column;
  width: 50%;
  max-width: 800px;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
  margin: 0 auto;
  input,
  select,
  textarea {
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.9);
    padding: 0.75em 1rem;
    margin-bottom: 1.5rem;
    border-radius: 4px;
  }
  @media only screen and (max-width: 1024px) {
    width: 80%;
  }
  @media only screen and (max-width: 767px) {
    transform: translateY(0);
    margin: 1rem 0;
    width: 100%;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const SuccessContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  /* max-width: c; */
`
