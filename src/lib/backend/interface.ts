export interface Message {
  content: string;
  author: string;
  timestamp: string;
}

export interface DirectMessage extends Message {
  channel: string;
}

export interface User {
  username?: string;
  password?: string;
}

export interface Guild {
  id: bigint;
  name: string;
  desc: string;
  icon?: string;
}
