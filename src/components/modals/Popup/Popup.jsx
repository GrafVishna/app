import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './Popup.module.scss'

const Popup = ({ action, set }) => {
   return (
      <Transition appear show={set} as={Fragment}>
         <Dialog onClose={action}>
            <Transition.Child
               as={Fragment}
               enter="ease duration-300"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease duration-300"
               leaveFrom="opacity-100"
               leaveTo="opacity-0">

               <div className={styles.popup}>
                  <div >
                     <Dialog.Panel className={styles.popup_content}>
                        <div className={styles.popup_header}>
                           <button
                              type="button"
                              onClick={action}>
                              <AiOutlineClose size="22px" />
                           </button>
                        </div>
                        <Dialog.Title
                           as="h3"
                           className="text-lg font-medium leading-6">
                           Payment successful
                        </Dialog.Title>
                        <div className="mt-2">
                           <p className="text-sm text-center text-gray-400">
                              Your payment has been successfully submitted. We’ve sent
                              you an email with all of the details of your order.
                           </p>
                        </div>
                     </Dialog.Panel>
                  </div>
               </div>
            </Transition.Child>
         </Dialog>
      </Transition>
   )
}

Popup.propTypes = {
   action: PropTypes.func,
   set: PropTypes.bool
}

export default Popup