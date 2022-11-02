import styled from 'styled-components';

export const FormBlock = styled.div`
    margin: 100px auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InputWrapper = styled.input<{ error: boolean }>`
    width: 500px;
    height: 50px;
    padding-left: 10px;
    border-radius: 10px;
    border: 2px solid ${props => props.error ? 'red' : 'grey'}
`

export const SpanBlock = styled.span`
    font-size: 24px;
    color: red;
`