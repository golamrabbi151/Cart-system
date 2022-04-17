import toast from 'react-hot-toast'

const configuration = {
    duration: 4000,
    position: 'top-center'
}

// Success toast message
const Success = (message) => { return toast.success(message, { ...configuration }) }

// Info toast message
const Info = message => { return toast.info(message, { ...configuration }) }

// Warning toast message
const Warning = message => { return toast.error(message, { ...configuration }) }

// Error toast message
const Error = message => { return toast.error(message, { ...configuration }) }

export const Toastify = {
    Success,
    Info,
    Warning,
    Error
}