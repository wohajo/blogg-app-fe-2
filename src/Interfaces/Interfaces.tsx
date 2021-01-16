export interface PostInterface {
    id: number,
    contents: string
}

export interface PostAreaProps {
    userId?: number
}

export interface PostResponseInterface {
    id: number,
    userId: number,
    contents: string,
    name: string
}

export interface RootState {
    posts: Array<PostResponseInterface>,
    isSpinnerInPosts: boolean,
    sessionUser: SessionUserInterface
}

export interface SessionUserInterface {
    id: number,
    name: string,
    email: string,
    isAdmin: boolean
}