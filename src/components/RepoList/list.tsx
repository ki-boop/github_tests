import React from 'react';

import {RepoItem} from "../RepoItem/RepoItem.tsx";
import styles from './styles.module.scss'
import {useTopTsRepo} from "../../api/RepoTS/useTopTsRepo.tsx";

const TopProjects: React.FC = () => {
    const {loading, error, repositories, loadMore} = useTopTsRepo()

    if (error) return <p>Error: {error}</p>;

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                {repositories.map((repo) => (
                    <RepoItem {...repo}/>
                ))}
            </ul>
            {(!loading && !error) && (<span onClick={loadMore} className={styles.btn}>Загрузить еще</span>)}
            {loading && <p className={styles.loader}></p>}
        </div>
    );
};

export default TopProjects;