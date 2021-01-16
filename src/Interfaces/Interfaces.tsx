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
    sessionUser: SessionUserInterface,
    password: string
}

export interface SessionUserInterface {
    id: number,
    username: string,
    name: string,
    email: string,
    isAdmin: boolean
}