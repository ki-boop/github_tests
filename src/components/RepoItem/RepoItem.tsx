import React, {FC} from "react";
import styles from './styles.module.scss'
import {Repository} from "../../api/RepoTS/types.ts";

export const RepoItem:FC<Repository> = ({url, name, description, stargazers, login, owner}) => {
    return (
        <li className={styles.item}>
            <div className={styles.stats}>
                <span className={styles.sub_title}>
                <img src={owner.avatarUrl} className={styles.owner_img}/>
                    <a href={url} target="_blank">
                        {name}/{owner.login}
                    </a>
                </span>
                <span className={styles.description}>{description}</span>
            </div>
            <span className={styles.star}>{stargazers.totalCount} ⚝</span>

        </li>
    )
}