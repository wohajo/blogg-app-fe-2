export interface PostAreaProps {
    userId: number
}

export interface PostResponseInterface {
    id: number,
    userId: number,
    contents: string,
    name: string
}

export interface DeleteProps {
    id: number
}

export interface EditDialogProps {
    id: number,
    contents: string
}

export interface RootState {
    posts: Array<PostResponseInterface>,
    postsSpinner: boolean,
    sessionUser: SessionUserInterface,
    password: string,
    bestUsers: Array<BestUserInterface>
}

export interface BestUserInterface {
    id: number,
    name: string,
    count: number
}

export interface SessionUserInterface {
    id: number,
    username: string,
    name: string,
    email: string,
    isAdmin: boolean
}