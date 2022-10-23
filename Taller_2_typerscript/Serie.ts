export class Serie {
    name: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    image: string;
    constructor(name: string, channel: string, seasons: number, description: string, link: string, image: string) {
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.link = link;
      this.image = image;
    }
  }