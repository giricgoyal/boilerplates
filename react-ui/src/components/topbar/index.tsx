import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as naviagtionActions from '../../models/navigation/actions';
import * as userActions from '../../models/user/actions';
import * as userSelectors from '../../models/user/selectors';
import Link from '../../components/link'

function Topbar() {
    const history = useHistory();
    const dispatch = useDispatch();

    dispatch(userActions.fetchUser());

    const userName = useSelector(userSelectors.getUserName);
    
    const onNavigate = (path) => {
        dispatch(naviagtionActions.navigate(path))
        history.push(path)
    }

    return (
        <div>
            <nav>
                <div className='nav-wrapper'>
                    <ul>
                        <li>
                            <Link onClick={() => onNavigate('/')}>Home</Link>
                        </li>
                        <li>
                            <Link onClick={() => onNavigate('/page1')}>Page 1</Link>
                        </li>
                        <li>
                            <Link onClick={() => onNavigate('/page2')}>Page 2</Link>
                        </li>
                    </ul>
                    <div>{userName}</div>
                </div>
            </nav>
        </div>
    )
}

export default Topbar;