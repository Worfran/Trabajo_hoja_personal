export class Serie {
    name: string;
    channel: string;
    seasons: number;
  
    constructor(name: string, channel: string, seasons: number) {
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
    }
  }