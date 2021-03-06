import * as React from 'react';
import styled from 'styled-components';

export namespace Select {
    export interface Props {
        text?: string;
        id: string;
        options?: any
    }

    export interface State {
    }

    export interface Callbacks {
        onChange
    }

    export interface IProps extends Props, Callbacks {

    }
}

export default class Select extends React.Component<Select.IProps, Select.State> {
    constructor(props?: Select.IProps, context?: any) {
        super(props, context);

    }

    generateSelect = () => {
        let selectOptions = [];

        this.props.options.map((option, index) => {
            selectOptions.push(<option key={index} value={option.value}>{option.label}</option>);
        })

        return selectOptions;

    }

    render() {

        return (
            <Input className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">{this.props.text}</span>
                </div>
                <select defaultValue="default" className="custom-select" id={this.props.id} onChange={this.props.onChange}>
                    <option value="default" disabled>Please choose a {this.props.text}</option>
                    {this.generateSelect()}
                </select>
            </Input>
        );
    }
}

const Input = styled.div`

    margin:15px 0;
    border-radius:0;
    text-transform:uppercase;
    & {align-items:center;}

    & .input-group-text {
        background: ${props => props.theme.bgMain};
        border: 0;
        color: white;
        padding: 15px 10px;
        font-size:0.7em;
        border-radius: 0;
        width:140px;
        white-space:normal;
        justify-content:center;
    }

    & select {
        height: 50px;
        border-left: 0;
        border-radius: 0;
    }
`;