import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppHeader } from '../common/AppHeader'


type Props = {}

const AppLayout = (props: Props) => {
    return (
        <React.Fragment>
            {/* Toolbar */}
            <AppHeader />

            <React.Suspense>
                <Outlet />
            </React.Suspense>
        </React.Fragment>
    )
}

export default AppLayout