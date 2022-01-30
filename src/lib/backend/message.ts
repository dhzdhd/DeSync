import Gun from 'gun';
import { SEA } from 'gun';

const gun = Gun(['http://localhost:8765/gun']);
gun.auth('bro', 'broo');
