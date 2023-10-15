import { TrashIcon } from '../../assets/icons/TrashIcon';
import { Button } from './Button';
import { Modal } from './Modal';

interface ConfirmDeleteModalProps {
  onClose: () => void;
  title: string;
  description?: string;
  onConfirm: () => void;
  onCancel: () => void;
  isDeleting: boolean;
}

export function ConfirmDeleteModal({ onClose, title, description, onConfirm, onCancel, isDeleting }: ConfirmDeleteModalProps) {

  return (
    <Modal
      title="Excluir"
      open
      onClose={onClose}
    >
      <div className='space-y-10'>

        <div className='flex flex-col gap-6 items-center'>
          <div className='rounded-full bg-red-100/20 p-3.5'>
            <TrashIcon className='text-red-900 h-6 w-6' />
          </div>
          <p className='w-44 text-gray-800 tracking-[-0.5px] font-medium text-center'>{title}</p>
          {description && (
            <p className='text-center text-gray-800 tracking-[-0.5px]'>{description}</p>
          )}
        </div>


        <div className='space-y-3'>
          <Button
            variant="DANGER"
            onClick={onConfirm}
            disabled={isDeleting}
            isLoading={isDeleting}
          >Sim, desejo excluir</Button>
          <Button
            variant="GHOST"
            onClick={onCancel}
            disabled={isDeleting}
            isLoading={isDeleting}
          >Cancelar</Button>
        </div>

      </div>
    </Modal>
  );
}
