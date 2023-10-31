import { useState } from 'react';

const useModal = () => {
    const [visible, setVisible] = useState(true);

    const handleCloseModal = () => {
        setVisible(false);
    };

    const showAgain = () => {
        setVisible(true);
    };

    return { visible, handleCloseModal, showAgain };
}

export default useModal;
