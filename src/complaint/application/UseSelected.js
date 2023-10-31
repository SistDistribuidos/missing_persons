import { useState } from 'react';

const useSelected = () => {
    const [selectedOption, setSelectedOption] = useState({ id: 0, label: 'Seleccione' });

    const handleOptionSelect  = (option) => {
        console.log('ingresa a', option);
        setSelectedOption(option);
    };

    return { selectedOption, handleOptionSelect };
}

export default useSelected;