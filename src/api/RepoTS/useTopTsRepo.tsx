import {useCallback, useEffect, useState} from "react";
import {Repository} from "./types.ts";
import {repoTs} from "./querys.ts";
import { request } from 'graphql-request';
export const useTopTsRepo = () => {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [countRepos, setCountRepos] = useState<number>(10)

    const loadMore = useCallback(() => {
        setLoading(true);
        setError(null);
        setCountRepos(prev => prev + 10)
    }, [])

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const headers = {
                    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
                };

                const data = await request(import.meta.env.VITE_GRAPHQL_GITHUB_ENDPOINT, repoTs(countRepos), {}, headers);
                setRepositories(data.search.edges.map((edge) => edge.node));
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

       void fetchRepositories();
    }, [countRepos]);

    return {
        repositories,
        loading,
        error,
        loadMore
    }
}