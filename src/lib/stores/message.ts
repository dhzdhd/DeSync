import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export interface Message {
  isSelf: boolean;
  content: string;
  timeStamp: string;
}

export const messages: Writable<Array<Message>> = writable([]);
