import styled from 'styled-components' 

const StyledBtn=styled.button`
        background: #333333;
        height: 35px;
        border:none;
        border-radius: 0px;
        color:white;

        font-family: var(--font-mono);
        font-size: 9px;
        font-weight: 400;
        line-height: 10px;
        letter-spacing: 0em;
        text-align: center;
        
        cursor: pointer;

        /* margin: 0 32px; */
        padding: 0px 36px;
        align-self: center;
        &:hover {
            background-color: #000;
            transition: 0.8s;
        }
        // @media (max-width: 975px) {
        //     
        //   }
        `

export const BtnSquare=(props)=>{
    return (<StyledBtn>{props.name}</StyledBtn>)
}