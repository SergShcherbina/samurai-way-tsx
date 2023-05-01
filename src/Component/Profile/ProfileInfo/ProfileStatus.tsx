import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (statue: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: true,
        status: this.props.status
    }

    onEditableSpan = () => {
        this.setState({
            editMode: false
        })
    }
    ofEditMode = () => {
        this.setState({
            editMode: true
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
                editMode: false,
                status: e.currentTarget.value
            })

    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ?
                    <div>
                    <span
                        onDoubleClick={this.onEditableSpan}
                    >{this.props.status || "..."}</span>
                    </div>
                    :
                    <div>
                        <input
                            onChange={this.onChangeStatusHandler}
                            onBlur={this.ofEditMode}
                            autoFocus={true}
                            value={this.state.status}/>
                    </div>
                }

            </div>
        );
    }


};

