import { Link, useNavigate } from 'react-router-dom'
import s from './header.module.scss'
import { UserMenu } from '../userMenu/UserMenu';

export const Header = () =>{
    const navigate = useNavigate();

    const goHome = () => navigate('/');

    return(
        <header className={s.header}>
            <section className={s.box_header}>
                <div className={s.box_header_logo}>
                    <img src="./logo.png" alt="logo" onClick={goHome} />
                </div>
                <div className={s.box_header_nav}>
                    <nav>
                        <ul>
                            <li><Link to="/donation">Doação</Link></li>
                            <li><Link to="/volunteer">Voluntariado</Link></li>
                            <li><Link to="/mentoring">Mentoria</Link></li>
                            <li><Link to="/lectures">Eventos & Palestras</Link></li>
                        </ul>
                    </nav>
                </div>
            </section>
            <section className={s.box_header_user}>
                <UserMenu/>
            </section>
        </header>
    )
}