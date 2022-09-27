import { FormEvent, FormEventHandler, useState } from "react";
import { linkObj } from "./Links";

type LinkFormArgs = {
  saveLink: (link: linkObj) => void,
}

export const LinkForm = ({ saveLink }: LinkFormArgs) => {

  const initialValues = {
    url: '',
    description: '',
    name: ''
  }

  const [input, setInput] = useState(initialValues);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveLink(input);
    setInput(initialValues);
  }

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInput({ ...input, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="container mx-auto py-2">
        <div className="flex align-middle justify-center gap-2">
          <i className="material-icons">insert_link</i>
          <input value={input.url} onChange={handleInputChange} className="p-1" type="text" placeholder="https://someurl.com" name="url" />
        </div>
      </div>
      <div className="container mx-auto py-2">
        <div className="flex align-middle justify-center gap-2">
          <i className="material-icons">create</i>
          <input value={input.name} onChange={handleInputChange} className="p-1" type="text" placeholder="website name" name="name" />
        </div>
      </div>
      <div className="container mx-auto py-2">
        <div className="flex align-middle justify-center gap-2">
          <i className="material-icons">description</i>
          <input value={input.description} onChange={handleInputChange} className="p-1" placeholder="write a description..." name="description" />
        </div>
      </div>
      <button className="hover:bg-green-500">Save</button>
    </form>
  )
}