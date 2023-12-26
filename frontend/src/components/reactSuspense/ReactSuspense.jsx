import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ShimmerCard from '../shimmerCard/ShimmerCard';

const ReactSuspense = () => {
    return (
        <Suspense fallback={
            <div className='vh-100'>
                <ShimmerCard height='100%' />
            </div>
        } >
            <Outlet />
        </Suspense>
    );
};

export default ReactSuspense;