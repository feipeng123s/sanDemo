import {router, Link} from 'san-router';
import Hello from '../components/Hello.san'

router.add({
    rule:'/',
    Component: Hello,
    target:'#app'
});

let startRouter = function(){
    router.start();
}

export default startRouter;



