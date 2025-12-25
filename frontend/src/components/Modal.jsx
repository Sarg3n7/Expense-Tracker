// import React from 'react'

// const Modal = ({ children, isOpen, onClose, title }) => {

//     if(!isOpen) return null;
//   return (
//     <div className='fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-black/20 bg-opacity-10'>
//         <div className='relative p-4 w-full max-w-2xl max-h-full'>
//             {/* Modal Content */}
//             <div className='relative bg-white rounded-lg shadow-sm dark:bg-gray-700 '>
//                 {/* Modal header */}
//                 <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200'>
//                     <h3 className='text-lg font-medium text-gray-900 dark:text-white'>{title}</h3>
//                     <button
//                         type='button'
//                         className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-red-400 cursor-pointer'
//                         onClick={onClose}
//                     >
//                         <svg 
//                             xmlns="http://www.w3.org/2000/svg" 
//                             width="40" 
//                             height="40" 
//                             fill="currentColor" 
//                             class="bi bi-x" 
//                             viewBox="0 0 16 16">
//                             <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Modal Body */}
//                 <div className='p-4 md:p-5 space-y-4'>
//                     {children}
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Modal



import React from "react";

const Modal = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-[calc(100%-1rem)] overflow-y-auto overflow-x-hidden bg-black/20">
      <div className="relative w-full max-w-2xl p-4">
        {/* Modal Content */}
        <div className="relative bg-white rounded-lg shadow-md">
          
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-300 rounded-t">
            <h3 className="text-lg font-medium text-gray-900">
              {title}
            </h3>

            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center cursor-pointer"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-4 md:p-5 space-y-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
