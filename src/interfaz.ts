export interface Actividades {
    activity:      string;
    availability:  number;
    type:          string;
    participants:  number;
    price:         number;
    accessibility: string;
    duration:      string;
    kidFriendly:   boolean;
    link:          string;
    key:           string;
}
export interface Actividades {
    total:     number;
    totalHits: number;
    hits:      Hit[];
}

export interface Hit {
    id:              number;
    pageURL:         string;
    type:            Type;
    tags:            string;
    previewURL:      string;
    previewWidth:    number;
    previewHeight:   number;
    webformatURL:    string;
    webformatWidth:  number;
    webformatHeight: number;
    largeImageURL:   string;
    imageWidth:      number;
    imageHeight:     number;
    imageSize:       number;
    views:           number;
    downloads:       number;
    collections:     number;
    likes:           number;
    comments:        number;
    user_id:         number;
    user:            string;
    userImageURL:    string;
}

export enum Type {
    Illustration = "illustration",
    Photo = "photo",
}
