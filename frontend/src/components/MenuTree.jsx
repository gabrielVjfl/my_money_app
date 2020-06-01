import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft , faEdit} from '@fortawesome/free-solid-svg-icons'

let MenuTree= (props) => {
    return (
        <div>
<li className="treeview">
    <a href>
<FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
<FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>

        </a>
        <ul className="treeview-menu">
                {props.children}
        </ul>
</li>
        </div>
    )
}
export default MenuTree