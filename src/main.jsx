import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Home from '@src/pages/home/Home'
import {UpdateMenuProvider} from "@src/providers/UpdateMenuProvider";
import {CursorProvider} from "@src/providers/CursorProvider.jsx";
import Light from "@src/components/Light/Light.jsx";
import FullScreen from "@src/functions/FullScreen.jsx"

FullScreen()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CursorProvider>
            <UpdateMenuProvider>
                <Light/>
                <div className="body_block">
                    <Home/>
                </div>
            </UpdateMenuProvider>
        </CursorProvider>
    </React.StrictMode>,
)

