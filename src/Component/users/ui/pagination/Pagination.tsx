import React, {useState} from 'react';
import s from './pagination.module.css'

type PaginationType = {
    pageSize: number;
    totalItemsCount: number;
    currentPage: number;
    changeCurrentPage: (pageNumber: number) => void;
};

export const Pagination: React.FC<PaginationType> = ({pageSize, totalItemsCount, currentPage, changeCurrentPage}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionSize = 10 //количество отображаемых кнопок пагинации на странице
    const paginationPortion = Math.ceil(pagesCount / portionSize) //сколько всего порций получится
    const [portionNumber, setPortionNumber] = useState(1)
    const firstPortionPageNumber = (portionNumber - 1) * portionSize + 1 //первая страница в порции
    const lastPortionPageNumber = portionNumber * portionSize //последняя

    return (
        <div className={s.wrapperPagination}>
            <button
                disabled={portionNumber <= 1}
                onClick={() => setPortionNumber(portionNumber - 1)}
            >-10
            </button>

            {pages
                .filter((page) => page >= firstPortionPageNumber && page <= lastPortionPageNumber)
                .map((page) => (
                    <span
                        key={page}
                        onClick={() => changeCurrentPage(page)}
                        className={currentPage === page ? s.selectedPage : ""}
                    > {page} </span>
                ))}

            <button
                disabled={portionNumber >= paginationPortion}
                onClick={() => setPortionNumber(portionNumber + 1)}
            >+10
            </button>
        </div>
    )
}



