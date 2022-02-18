import { from } from 'rxjs';
import { runCapitalizar } from './01-capitalizar';
import { runReduce } from './02-reduce';
import { runRandoms } from './03-randoms';
import { runCountRegressive } from './04-cuenta-regresiva';
import { runCombine } from './05-combinar';
import { runSkyWalker } from './06-luke-skywalker';

interface Runner {
    start(): void
}

const runners: Array<Runner> = [ 
    { start: runCapitalizar }, 
    { start: runReduce },
    { start: runRandoms },
    { start: runCountRegressive },
    { start: runCombine },
    { start: runSkyWalker },
]

from(runners).subscribe(runner => {
    runner.start();
});






