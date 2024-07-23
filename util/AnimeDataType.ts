type AnimePostersType = {
  url: string | null;
  raw_base64_file: string | null;
};

export type AnimeData = {
  id: number;
  code: string;
  names: {
    ru: string;
    en: string;
    alternative: string | null;
  };
  franchises: [
    {
      franchise: {
        id: string;
        name: string;
      };
      releases: [
        {
          id: number;
          code: string;
          ordinal: number;
          names: {
            ru: string;
            en: string;
            alternative: string | null;
          };
        }[],
      ];
    },
  ];
  announce: string;
  status: {
    string: string;
    code: number;
  };
  posters: {
    small: AnimePostersType;
    medium: AnimePostersType;
    original: AnimePostersType;
  };
  updated: number;
  last_change: number;
  type: {
    full_string: string;
    code: number;
    string: string;
    episodes: number | null;
    length: number;
  };
  genres: string[];
  team: {
    voice: string[];
    translator: string[];
    editing: string[];
    decor: string[];
    timing: string[];
  };
  season: {
    string: string;
    code: number;
    year: number;
    week_day: number;
  };
  description: string;
  in_favourites: number;
  blocked: {
    blocked: boolean;
    bakanim: boolean;
  };
  player: {
    alternative_player: string | null;
    host: string;
    episodes: {
      first: number;
      last: number;
      string: string;
    };
    list: {
      [episodeOrdinal: number]: {
        episode: number;
        name: string | null;
        uuid: string;
        created_timestamp: number;
        preview: string | null;
        skips: {
          opening: number[];
          ending: number[];
        };
        hls: {
          fhd: string | null;
          hd: string | null;
          sd: string | null;
        };
      };
    };
    rutube?: object;
  };
  torrents: {
    episodes: {
      first: number;
      last: number;
      string: string;
    };
    list: {
      torrent_id: number;
      episodes: {
        first: number;
        last: number;
        string: string;
      };
      quality: {
        string: string;
        type: string;
        resolution: string;
        encoder: string;
        lq_audio: string | null;
      };
      leechers: number;
      seeders: number;
      downloads: number;
      total_size: number;
      size_string: string;
      url: string;
      magnet: string;
      uploaded_timestamp: number;
      metadata: string | null;
      raw_base64_file: string | null;
    };
  };
};
