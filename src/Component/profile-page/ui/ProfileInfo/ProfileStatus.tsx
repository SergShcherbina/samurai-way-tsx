import React, {ChangeEvent} from "react";
import {AppStateType} from "../../../../app/model/store";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faR, faSignOut} from "@fortawesome/free-solid-svg-icons";

type ProfileStatusType = {
    status: string;
    updateStatus: (statue: string) => void;
    isMyPage: boolean;
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
        if (!this.props.isMyPage) return

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
            <>
                {this.state.editMode ? (
                    <Status
                        onDoubleClick={this.onEditableSpan}
                        isMyPage={this.props.isMyPage}
                    >{this.state.status || "..."}
                        {this.props.isMyPage && <ReplaceIcon icon={faPen} /> }
                    </Status>
                ) : (
                    <StatusField
                        onChange={this.onChangeStatusHandler}
                        onBlur={this.ofEditMode}
                        autoFocus={true}
                        value={this.state.status}
                    />
                )}
            </>
        );
    }
}

const Status = styled.div<{ isMyPage: boolean }>`
  grid-column: 1/4;
  cursor: ${props => props.isMyPage ? 'pointer' : 'auto'};
  overflow: hidden;

  padding-bottom: 5px;
  border-bottom: 1px solid var(--border-color);

  &:first-letter {
    text-transform: uppercase;
  }
  
  &:hover svg path{
    fill: var(--main-color)
  }

`
const StatusField = styled.input`
  grid-column: 1/4;
  outline: 1px solid var(--main-color);
  padding: 3px;
  border-radius: 5px;
  margin-bottom: 5px;
`
const ReplaceIcon = styled(FontAwesomeIcon)`
  margin-left: 20px;
`