import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Message } from '$lib/backend/interface';

export const messages: Writable<Array<Message>> = writable([]);
