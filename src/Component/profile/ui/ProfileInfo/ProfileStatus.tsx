import React, {ChangeEvent} from "react";
import {AppStateType} from "../../../../app/model/store";
import styled from "styled-components";

type ProfileStatusType = {
    status: string;
    updateStatus: (statue: string) => void;
};

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: true,
        status: this.props.status,
    };

    componentDidUpdate(prevProps: ProfileStatusType, prevState: AppStateType) {
        //setState внутри componentDidUpdate делать только при условии сравнения, иначе зациклим

        //если статус пришел и не равен предыдущему
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    onEditableSpan = () => {
        this.setState({
            editMode: false,
        });
    };
    ofEditMode = () => {
        this.setState({
            editMode: true,
        });
        this.props.updateStatus(this.state.status);
    };
    onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value,
        });
    };

    render() {
        return (
            <div>
                {this.state.editMode ? (
                    <Status onDoubleClick={this.onEditableSpan}>{this.props.status || "...😶"}</Status>
                ) : (
                    <StatusField
                        onChange={this.onChangeStatusHandler}
                        onBlur={this.ofEditMode}
                        autoFocus={true}
                        value={this.state.status}
                    />
                )}
            </div>
        );
    }
}

const Status = styled.div`
  //border-bottom: 2px solid #22b9f6;
`

const StatusField = styled.input`
  outline : 1px solid red;
  min-width: 300px;
`
