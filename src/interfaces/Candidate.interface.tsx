// TODO: Create an interface for the Candidate objects returned by the API

export interface Candidate {
    id?: number;
    name?: string ;
    login?: string | undefined ;
    location?: string ;
    email?: string ;
    company?: string;
    bio?: string;
    avatar_url?: string;
}