export type BlogContentType = {
    text: string,
    image?: File | undefined
}

export interface IBlog {
    _id?: string
    title: string
    content: BlogContentType[]
    dateCreation?: string
}