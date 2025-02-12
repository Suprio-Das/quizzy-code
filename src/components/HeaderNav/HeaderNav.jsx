import { Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <nav className="navbar bg-blue-500 text-white sticky top-0 z-10">
            <div className="navbar lg:ml-12">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-700 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/topics'>Topics</Link></li>
                        <li><Link to='/statistics'>Statistics</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost normal-case text-2xl">Quizzy<span className='text-primary font-bold'>Code</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex mr-12">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/topics'>Topics</Link></li>
                    <li><Link to='/statistics'>Statistics</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default HeaderNav;