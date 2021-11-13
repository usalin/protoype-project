export interface Message {
  message: string;
}

export interface BaseEntity {
  id: string | null;
}

export interface Artist extends BaseEntity {
  artistName: string;
  description: string;
}