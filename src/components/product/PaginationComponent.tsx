import React, { useEffect, useState } from 'react';
import { localhost } from '../../variables/server';
import Pagination from 'react-bootstrap/Pagination';
import { useLocation, useNavigate, } from 'react-router';

interface PaginationProps{
  currentPage: number;
  totalPages: number;
  currentUrl: string;
}

const PaginationComponent = ({ currentPage, totalPages, currentUrl }: PaginationProps) => {
    const [curPage, setCurPage] = useState(0);
  
    const pageItems = [];
    const navigate = useNavigate();

    const onPageChange = (page: number) => {      
      let curUrl = new URL(window.location.href)
      const searchParams = new URLSearchParams(curUrl.search);
      const pageValue = searchParams.get('page')
      setCurPage(page)

      if(pageValue){
        searchParams.set('page', String(page));
      }
      else{
        searchParams.append('page', String(page));
      }
      curUrl.search = searchParams.toString()
      navigate(curUrl.pathname + curUrl.search)
    };

    useEffect(() => {
      console.log(totalPages)
      setCurPage(currentPage)
    }, [currentPage])

    for (let i = 1; i <= totalPages; i++) {
      pageItems.push(
        <Pagination.Item
          key={i}
          active={i === curPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    
  
    return (
      <div>
        { totalPages > 1 ? 
          <Pagination >
            <Pagination.First 
            onClick={() => onPageChange(1)} 
            />
            <Pagination.Prev
              onClick={() => onPageChange(Math.max(1, curPage - 1))}
            />
            {pageItems}
            <Pagination.Next
              onClick={() => onPageChange(Math.min(totalPages, curPage + 1))}
            />
            <Pagination.Last 
              onClick={() => onPageChange(totalPages)}
            />
          </Pagination>
          : <></>}
        </div>
    );
  };
  
  export default PaginationComponent;