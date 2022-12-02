export type movie = {
    id: Number,
    title: string,
    year: Number
}

export enum GENDER  {
    MALE= "MALE",
    FEMALE= "FEMALE",
    OTHER= "OTHER"
}

    export type character = {
        id: Number,
        name: string
        gender: GENDER,
        description?: string
    }