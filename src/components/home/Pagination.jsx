import React,{useState} from 'react'
import { FiChevronsLeft,FiChevronsRight} from "react-icons/fi";
import { useTheme } from '../../context/ThemeContext';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const { theme, toggleTheme } = useTheme();
    const pageNumbers = [];
    const maxPageNumbersToShow = 5;

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const [currentSet, setCurrentSet] = useState(0);

    const currentPages = pageNumbers.slice(currentSet, currentSet + maxPageNumbersToShow);

    const handleLeftClick = () => {
        if (currentSet > 0) {
            setCurrentSet(currentSet - maxPageNumbersToShow);
        }
    };

    const handleRightClick = () => {
        if (currentSet < pageNumbers.length - maxPageNumbersToShow) {
            setCurrentSet(currentSet + maxPageNumbersToShow);
        }
    };

    return (
        <nav>
            <ul className='flex justify-center items-center space-x-4 mt-6'>
                <li>
                    <button onClick={handleLeftClick} className='px-4 py-2 disabled:text-gray-500 disabled:cursor-not-allowed' disabled={currentSet === 0}>
                        <FiChevronsLeft size={30} />
                    </button>
                </li>
                {currentPages.map(number => (
                    <li key={number} className={`border rounded-md px-2 py-1 text-base ${theme === 'dark' ? `text-white ${number === currentPage && ' border-gray-100 bg-gray-100 text-gray-900 font-bold'}` : `border-dark-gray text-black ${number === currentPage && 'bg-very-dark-blue text-white font-bold'}`} `}>
                        <button onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button onClick={handleRightClick} className='px-4 py-2 disabled:text-gray-500 disabled:cursor-not-allowed' disabled={currentSet >= pageNumbers.length - maxPageNumbersToShow}>
                        <FiChevronsRight size={30} />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination