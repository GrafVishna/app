import React, {useContext, useEffect, useState} from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import styles from "./Table.module.scss";
import {MenuContext} from "@src/providers/UpdateMenuProvider.jsx";
import {getDataApi} from "@data/getDataApi.js";

const Table = () => {

    const [dataTitles, setDataTitles] = useState([]);
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataTitles = await getDataApi.getAll('availability_titles');
                setDataTitles(dataTitles);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataRows = await getDataApi.getAll('availability');
                setDataRows(dataRows);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.table_body}>
            <SimpleBar className={styles.table_scroll}>
                <div className={styles.table_wrapper}>
                    <table className={styles.table}>

                        <thead>
                        <tr>
                            {dataTitles?.map((el, index) => <th key={index}>{el.title}</th>)}
                        </tr>
                        </thead>

                        <tbody>

                        {dataRows?.map((el, rowIndex) => (
                            <tr key={rowIndex}>

                                {Object.values(el).map((value, index) => (
                                    index === Object.values(el).length - 1 ? null : (
                                        index !== Object.values(el).length - 2 ? (
                                            <td key={index}>{value}</td>
                                        ) : (
                                            <td key={index}>
                                                <a href={value} target="_blank" rel="noopener noreferrer">VIEW NOW</a>
                                            </td>
                                        )
                                    )
                                ))}


                            </tr>
                        ))}

                        </tbody>

                    </table>
                </div>
            </SimpleBar>
        </div>
    )
}

export default Table;
