import { useState, useRef, useEffect } from "react"
import s from "./userMenu.module.scss"
import { Link } from "react-router-dom"

export const UserMenu = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef()

  const toggleMenu = () => setOpen(!open)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className={s.container} ref={menuRef}>
      <img
        src="https://avatars.githubusercontent.com/EwertonHecsley"
        alt="Foto do usuário"
        className={s.avatar}
        onClick={toggleMenu}
      />

      {open && (
        <div className={s.menu}>
          <Link className={s.name} to="/perfil">Ewerton Hecsley</Link>
          <button>Voluntariados</button>
          <button>Configurações de conta</button>
          <button className={s.logout}>Sair</button>
        </div>
      )}
    </div>
  )
}
