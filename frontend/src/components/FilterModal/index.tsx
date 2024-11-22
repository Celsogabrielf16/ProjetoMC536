import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog.Root open={isOpen}>
       <Dialog.DialogTitle>aaaaaaaa</Dialog.DialogTitle>
    </Dialog.Root>
  );
};

export default FilterModal;
