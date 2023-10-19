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
        const status = this.state.status.length > 59 ? this.state.status.slice(0, 59) + '...' : this.state.status
        return (
            <div>
                {this.state.editMode ? (
                    <><Status onDoubleClick={this.onEditableSpan}>{status || "...😶"}</Status> <hr/></>
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
  cursor: pointer;
  font-size: 0.9rem;
`

const StatusField = styled.input`
  outline : 1px solid var(--main-color);
  padding: 3px;
  width: 200px;
  border-radius: 5px;
  min-width: 250px;
  margin-bottom: 5px;
`
