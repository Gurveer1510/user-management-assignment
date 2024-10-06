
interface ConfirmModalProps {
    deleteHandler: () => void
    closeModal: () => void
    closeConfirmModal: () => void
}

const ConfirmModal : React.FC<ConfirmModalProps> = ({
    deleteHandler,
    closeConfirmModal,
    closeModal
}) => {

    const onClose = () => {
        closeConfirmModal()
        closeModal()
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
            <div className='p-4 bg-white flex flex-col gap-y-2 rounded-lg max-w-xl w-full'>
                <h2 className='text-xl font-semibold'>Are you sure ?</h2>
                <div className='flex flex-row-reverse gap-x-2'>
                    <button 
                        onClick={deleteHandler}
                        className='bg-red-500 text-white px-2 py-1 rounded-lg font-semibold '
                    >
                        Delete
                    </button>
                    <button onClick={onClose} className='font-semibold rounded-lg bg-slate-200 px-2 py-1'>
                        Cancel
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal