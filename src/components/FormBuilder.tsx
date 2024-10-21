import React, { useState } from 'react';
import { PlusCircle, Save } from 'lucide-react';

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);
  const [formTitle, setFormTitle] = useState('');
  const [recipients, setRecipients] = useState('');

  const addField = (type) => {
    setFormFields([...formFields, { type, label: '', options: [] }]);
  };

  const handleSave = () => {
    // TODO: Implement form saving logic
    console.log('Form saved:', { title: formTitle, fields: formFields, recipients });
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Créer un nouveau formulaire</h2>
      <input
        type="text"
        placeholder="Titre du formulaire"
        value={formTitle}
        onChange={(e) => setFormTitle(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      {formFields.map((field, index) => (
        <div key={index} className="mb-4">
          {/* Render form field based on type */}
        </div>
      ))}
      <div className="flex space-x-2 mb-4">
        <button onClick={() => addField('text')} className="bg-blue-500 text-white px-4 py-2 rounded">
          <PlusCircle className="inline-block mr-1" size={18} />
          Ajouter un champ texte
        </button>
        {/* Add more field type buttons */}
      </div>
      <input
        type="text"
        placeholder="Adresses e-mail des destinataires (séparées par des virgules)"
        value={recipients}
        onChange={(e) => setRecipients(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded">
        <Save className="inline-block mr-1" size={18} />
        Enregistrer le formulaire
      </button>
    </div>
  );
};

export default FormBuilder;