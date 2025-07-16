export type FeedItem =
    | {
        id: number;
        type: 'article'
        title: string;
        content: string;
        createdAt: number
        comments: string[];
    }
    | {
        id: number;
        type: 'gif'
        title: string;
        url: string;
        createdAt: number
        comments: string[];
    }