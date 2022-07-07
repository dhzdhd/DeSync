import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { IGunChainReference } from 'gun/types/chain';
import type { User } from './interface';

export const userDetails: Writable<User> = writable({});

export let db: IGunChainReference;
export let user: IGunChainReference;

export const initGun = () => {
  db = GUN();
  user = db.user().recall({ sessionStorage: true });

  user.get('alias').on((value) => userDetails.set({ username: value }));

  db.on(async (data, key) => {
    console.log('bro');
    console.log(data);

    if (key == 'auth') {
      const alias = await user.get('alias'); // username string
      userDetails.set({ username: alias.toString() });

      console.log(`signed in as ${alias}`);
    }
  });
};
