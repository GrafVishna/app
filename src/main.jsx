import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Home from '@src/pages/home/Home'
import {UpdateMenuProvider} from "@src/providers/UpdateMenuProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UpdateMenuProvider>
            <Home/>
        </UpdateMenuProvider>
    </React.StrictMode>,
)

