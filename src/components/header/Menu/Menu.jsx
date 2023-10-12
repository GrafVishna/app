import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {getDataApi} from '@data/getDataApi.js';
import MenuItem from './MenuItem.jsx';
import './HeaderMenu.scss';
import {MenuContext} from "@src/providers/UpdateMenuProvider.jsx";

const Menu = () => {
    const {stateMenu, setStateMenu} = useContext(MenuContext);

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDataApi.getAll('header_menu');
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            {data && data.length > 0 ?
                <nav className={`${stateMenu ? 'menu menu-open' : 'menu'}`}>
                    <ul>
                        <MenuItem data={data}/>
                    </ul>
                </nav>
                : null}
        </>
    );
};

Menu.propTypes = {
    menuClass: PropTypes.string,
    data: PropTypes.array,
};


export default Menu;
