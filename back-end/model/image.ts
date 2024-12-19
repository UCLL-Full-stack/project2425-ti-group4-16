import { Image as imagePrisma } from '@prisma/client';

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

    static from({ id, path, altText }: imagePrisma): Image {
        return new Image({
            id,
            path,
            altText
        });
    }
}
