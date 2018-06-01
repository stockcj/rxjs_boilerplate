import { Subject } from 'rxjs';

const subject:Subject<any> = new Subject();

subject.subscribe(
    data => addItem('Observer 1: ' + data),
    err => addItem(err),
    () => addItem('Observer 1 Completed')
)

subject.next('The first thing has been sent');

const observer2 = subject.subscribe(
    data => addItem('Observer 2: ' + data)
)

subject.next('The second thing has been sent');
subject.next('A third thing has been sent');


function addItem(val:any) {
    const node = document.createElement("li");
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}