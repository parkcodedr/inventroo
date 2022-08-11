import React from 'react'
import { useTitle } from 'components/hooks/useTitle';
import { Link } from 'react-router-dom';

const SalesReturn=()=>{
    useTitle("Inventroo | Sales Return");
  return (
    <div className='content-body mt-5'>
        <div className='row mx-auto justify-content-center'>
            <section className='col-md-8 text-center'>
            <h4 className='font-weight-bold'>Sales Returns</h4>
            <p className='mt-2 hero-text'>Process your product returns in few simple steps and get your inventory automatically 
                sorted out. Start creating sales returns from sales orders.</p>
                <Link to={'/dashboard/sales-order/all'}>
                <button className='btn btn-main mt-2'>
                    GO TO SALES ORDERS
                </button> 
                </Link>
            </section>
        </div>

    </div>
  )
}

export default SalesReturn