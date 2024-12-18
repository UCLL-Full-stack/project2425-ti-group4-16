export class Image {
    id? : number;
    path: string;
    altText: string;

    constructor(image: {id?: number; path: string; altText: string }) {
        this.id = image.id;
        this.path = image.path;
        this.altText = image.altText;
    }


    getPath(): string {
        return `/uploads/${this.path}`;
    }

    getId(): number | undefined {
        return this.id;
    }

    getAltText(): string{
        return this.altText;
    }
}
