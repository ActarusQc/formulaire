import React from 'react';
import { Link } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';
import { ClipboardList, LogOut } from 'lucide-react';

const Header = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect();
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <ClipboardList className="mr-2" />
          FormApp
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-200">Mes formulaires</Link>
            </li>
            <li>
              <Link to="/create" className="hover:text-blue-200">Créer un formulaire</Link>
            </li>
            <li>
              <button onClick={handleLogout} className="flex items-center hover:text-blue-200">
                <LogOut className="mr-1" size={18} />
                Déconnexion
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;