import { SiJson } from "react-icons/si";
import { FaUsersLine } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { LuPackage2 } from "react-icons/lu";

import { useNavigate } from "react-router-dom";

import './header.css'

export default function Header() {

  const navigate = useNavigate();

  function navegar(link: string) {
    navigate(link);
  }

  return (
    <div className="header">
      <span className="item-menu" onClick={e => navegar('/')}>
        <SiJson size='32px' color='#048272' />
        <h1>Dummy Json UI</h1>
      </span>
      <ul className="menu">
        <li><span className="item-menu" onClick={e => navegar('/users')}><FaUsersLine color='#048272' />Usuários</span></li>
        <li><span className="item-menu"onClick={e => navegar('/tasks')}><FaTasks color='#048272' />Tarefas</span></li>
        {/* <li><span className="item-menu" onClick={e => navegar('/products')}><LuPackage2 color='#048272' />Produtos</span></li> */}
      </ul>
    </div>
  )
}