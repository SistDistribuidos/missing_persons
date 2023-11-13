import { useState } from 'react';

const FormIncomplete = () => {
    const [visible, setVisible] = useState(false);

    const handleCloseModal = () => {
        setVisible(false);
    };

    const showAgain = () => {
        setVisible(true);
    };

    return { visible, handleCloseModal, showAgain };
}

export default FormIncomplete;
