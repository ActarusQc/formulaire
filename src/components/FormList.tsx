import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2 } from 'lucide-react';

const FormList = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    // TODO: Fetch forms from the backend
    setForms([
      { id: 1, title: 'Formulaire de satisfaction client' },
      { id: 2, title: 'Demande de congés' },
    ]);
  }, []);

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Mes formulaires</h2>
      <ul>
        {forms.map((form) => (
          <li key={form.id} className="flex justify-between items-center border-b py-2">
            <span>{form.title}</span>
            <div>
              <Link to={`/edit/${form.id}`} className="text-blue-500 mr-2">
                <Edit size={18} />
              </Link>
              <button className="text-red-500">
                <Trash2 size={18} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormList;