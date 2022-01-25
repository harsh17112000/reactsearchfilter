import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Set = ({sdata}) => {
    return <>
        {
            sdata.map((e) => {
                return (
                    <>
                        <Stack spacing={1} style={{ width: '22rem'}} key={e.id} className='mb-4'>
                            <Skeleton variant="rectangular" animation="wave" width={"21rem"} height={200} className='rounded' />
                            <div className='d-flex justify-content-between'>
                                <Skeleton variant="text" animation="wave" width={"12rem"} />
                                <Skeleton variant="text" animation="wave" width={"5rem"} />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <Skeleton variant="text" animation="wave" width={"12rem"} />
                                <Skeleton variant="text" animation="wave" width={"5rem"} />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <Skeleton variant="circular" animation="wave" width={20} height={20} />
                                <Skeleton variant="text" animation="wave" width={"18rem"} />
                            </div>
                        </Stack>
                    </>
                )
            })
        }
    </>;
};

export default Set;
