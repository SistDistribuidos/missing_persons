import { useState } from 'react';

const useModal = ({value_init}) => {
    const [visible, setVisible] = useState(value_init);

    const handleCloseModal = () => {
        setVisible(false);
    };

    const showAgain = () => {
        setVisible(true);
    };

    return { visible, handleCloseModal, showAgain };
}

export default useModal;
