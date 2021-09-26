import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import styled from 'styled-components';

const Container = styled.div`
    padding-top: 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Window = styled.div`
    width: 300px;
    height: 300px;
    line-height: 300px;
    margin-bottom: 34px;

    background: #FFFFFF;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    text-align: center;
`

const Number = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 150px;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

//Buttons
const Button = styled.button.attrs(({type}) => ({
    type:  type || "button"
  }))`
    width: 65px;
    height: 65px;
    margin-right: 38px;
    margin-bottom: 34px;

    border: none;
    border-radius: 4px;

    cursor: pointer;

    :hover,
    :focus {
        opacity: 0.8;
    }

    :active {
        opacity: 0.6;
    }

    :last-child {
        margin-right: 0;
    }
`

const Plus = styled(Button)`
    background: #089C20;
`

const Minus = styled(Button)`
    background: #E7AA10;
`

const Reset = styled(Button)`
    background: #CF1C1C;
`

const Upload = styled(Button)`
    background: #30D9CF;
`

const Download = styled(Button)`
    background: #9B0F9E;
`

const Svg = styled.svg`
    width: 45px; 
    height: 45px;
`

const Counter = ({counter, inc, dec, res}) => {
    return (
        <Container>
            <Window>
                <Number>
                {counter}
                </Number>
            </Window>
            <div>
                <Plus onClick={inc}>
                    <Svg>
                        <use xlinkHref="#plus"></use>
                    </Svg>
                </Plus>
                <Minus onClick={dec}>
                    <Svg>
                        <use xlinkHref="#minus"></use>
                    </Svg>
                </Minus>
                <Reset onClick={res}>
                    <Svg>
                        <use xlinkHref="#reset"></use>
                    </Svg>
                </Reset>
            </div>
            <div>
                <Upload>
                    <Svg>
                        <use xlinkHref="#upload"></use>
                    </Svg>
                </Upload>
                <Download>
                    <Svg>
                        <use xlinkHref="#download"></use>
                    </Svg>
                </Download>
            </div>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);