import { useState } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function Example() {
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    projectImages: []
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'project-images') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('backend_endpoint_url', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        // Handle success
        console.log('Form data sent successfully');
      } else {
        // Handle errors
        console.error('Failed to send form data');
      }
    } catch (error) {
      console.error('Error occurred while sending form data:', error.message);
    }
  };

  return (
    <form className="px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Share Your Project</h1>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Project Details</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Provide information about your project.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="project-name" className="block text-sm font-medium leading-6 text-gray-900">
                Project Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="projectName"
                  id="project-name"
                  autoComplete="off"
                  value={formData.projectName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="project-description" className="block text-sm font-medium leading-6 text-gray-900">
                Project Description
              </label>
              <div className="mt-2">
                <textarea
                  id="project-description"
                  name="projectDescription"
                  rows={5}
                  value={formData.projectDescription}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Describe your project in detail.</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="project-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Project Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Upload
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="project-images" className="block text-sm font-medium leading-6 text-gray-900">
                Project Images
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="image-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload images</span>
                      <input
                        id="image-upload"
                        name="project-images"
                        type="file"
                        className="sr-only"
                        multiple
                        onChange={handleChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
