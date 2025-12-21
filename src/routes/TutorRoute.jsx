import React from 'react';
import ForbiddenPage from '../components/ForbiddenPage';
import useRole from '../hooks/useRole';
import LoadingSpinner from '../components/LoadingSpinner';

const TutorRoute = ({ children }) => {
    const {role,isLoading} = useRole()
    if(isLoading) return <LoadingSpinner/>
    if(role === 'tutor') return children
    return <ForbiddenPage/>
};

export default TutorRoute;