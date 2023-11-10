import React, {useState} from 'react';
import styled from "styled-components";

type PaginationType = {
    pageSize: number;
    totalItemsCount: number;
    currentPage: number;
    changeCurrentPage: (pageNumber: number) => void;
};

export const Pagination: React.FC<PaginationType> = (
    {pageSize, totalItemsCount, currentPage, changeCurrentPage}
) => {
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionSize = 10 //количество отображаемых кнопок пагинации на странице
    const paginationPortion = Math.ceil(pagesCount / portionSize) //сколько всего порций получится
    const firstPortionPageNumber = (portionNumber - 1) * portionSize + 1 //первая страница в порции
    const lastPortionPageNumber = portionNumber * portionSize //последняя

    return (
        <RootPagination>
            <ButtonPagination
                disabled={portionNumber <= 1}
                onClick={() => setPortionNumber(portionNumber - 1)}
            > -10 </ButtonPagination>

            {pages
                .filter((page) => page >= firstPortionPageNumber && page <= lastPortionPageNumber)
                .map((page) => (
                    <Item
                        key={page}
                        onClick={() => changeCurrentPage(page)}
                        active={currentPage === page}
                    > {page} </Item>
                ))
            }

            <ButtonPagination
                disabled={portionNumber >= paginationPortion}
                onClick={() => setPortionNumber(portionNumber + 1)}
            > +10 </ButtonPagination>
        </RootPagination>
    )
}

const RootPagination = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  gap: 5px;
`
const ButtonPagination = styled.button`
  padding: 7px 10px;
  background-color: var(--main-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  color: var(--block-color);
  font-weight: 700;
  cursor: pointer;
  user-select: none;

  &:not([disabled]):hover {
    background-color: var(--hover-btn-color);
  }

  &:disabled {
    opacity: 0.5;
  }
`
const Item = styled.span <{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px 8px;
  cursor: pointer;
  border-radius: 5px;
  user-select: none;
  background-color: ${props => props.active ? 'var(--block-color)' : ''};

  &:hover {
    outline: 2px solid var(--block-color);
  }

  &:active {
    outline: 2px solid var(--hover-btn-color);
  }
`

