import React, {useEffect, useState} from "react";

const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activateMode = () =>{
        setEditMode(true)
    }

    const deactivaeMode=()=>{
        setEditMode(false)
        props.updateStatus(status)
    }

   const  onStatusChange = (e) =>{
        setStatus(e.currentTarget.value)
    }

    return (

        <div>
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivaeMode} value={status} />
            </div>
            }
            {!editMode &&
                <div>
                <span onDoubleClick={activateMode} >{props.status || "--------"}</span>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHook