import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export interface User {
  username?: string;
  password?: string;
}

export const userDetails: Writable<User> = writable({});

export const db = GUN();
export const user = db.user().recall({ sessionStorage: true });

user.get('alias').on((value) => userDetails.set({ username: value }));

db.on(async (data, key) => {
  if (key == 'auth') {
    const alias = await user.get('alias'); // username string
    userDetails.set({ username: alias.toString() });

    console.log(`signed in as ${alias}`);
  }
});
