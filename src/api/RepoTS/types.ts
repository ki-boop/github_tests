export type Repository = {
    url: string;
    name: string;
    description: string;
    stargazers: {
        totalCount: string;
    }
    login: string;
    owner: {
        avatarUrl: string;
        login: string;
    }
}