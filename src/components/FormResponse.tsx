import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Send, UserPlus } from 'lucide-react';

const FormResponse = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [responses, setResponses] = useState({});
  const [reassignEmail, setReassignEmail] = useState('');

  useEffect(() => {
    // TODO: Fetch form data from the backend
    setForm({
      id,
      title: 'Exemple de formulaire',
      fields: [
        { type: 'text', label: 'Nom' },
        { type: 'email', label: 'Email' },
        { type: 'textarea', label: 'Commentaires' },
      ],
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit form responses to the backend
    console.log('Form submitted:', responses);
  };

  const handleReassign = () => {
    // TODO: Implement reassignment logic
    console.log('Form reassigned to:', reassignEmail);
  };

  if (!form) return <div>Chargement...</div>;

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">{form.title}</h2>
      <form onSubmit={handleSubmit}>
        {form.fields.map((field, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setResponses({ ...responses, [field.label]: e.target.value })}
            />
          </div>
        ))}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <Send className="inline-block mr-1" size={18} />
            Envoyer
          </button>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Email pour réassigner"
              value={reassignEmail}
              onChange={(e) => setReassignEmail(e.target.value)}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
            />
            <button
              type="button"
              onClick={handleReassign}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              <UserPlus className="inline-block mr-1" size={18} />
              Réassigner
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormResponse;