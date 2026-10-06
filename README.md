# Varstor React
Seamless integration of [Varstor state manager](https://github.com/ismorozs/varstor) into React applications, with a React-like hook-based flow.

## How to install and prepare
Install all required libraries with
```sh
npm install varstor varstor-react
```


## Usage
```varstor-react``` exports two things.  
  

First one is ```VarstorProvider``` component, and the second is ```useVarstor``` hook.
```js
import { VarstorProvider, useVarstor } from 'varstor-react';
```

## ```VarstorProvider``` component
It has one prop ```stores```, which takes an array of ```Varstor``` instances from different namespaces.  
The ```ChildComponent```s it embeds will be the consumers of the data from those stores.
```js
<VarstorProvider stores={[...Varstor[]]}>
  <ChildComponent1 />
  <ChildComponent2 />
  <ChildComponent3 />
  ...
<VarstorProvider/>
```

## ```useVarstor``` hook
This hook should be called from inside the ```ChildComponent``` to access the data of a ```Varstor``` store instance.  
  
It takes a ```Namespace``` string, which corresponds to the namespace of the said ```Varstor``` instance, and returns all its ```NamespaceValues```.
```js
const ChildComponent = () => {
  const { ...NamespaceValues } = useVarstor(Namespace string);
  ...
}
```
\
That's it... Any data mutations within the stores will be immediately sent to consumer components.  
\
[The only other thing to learn is the usage of ```Varstor```s](https://github.com/ismorozs/varstor).

## Example
```js
import Varstor from 'varstor';
import { VarstorProvider, useVarstor } from 'varstor-react';

// create value
Varstor.add({ count: 0 });
// create action
Varstor.actions({ 
  increment: ({ get, set }) => set({ count: get().count + 1 })
});

const Component = () => {
  const { count, increment } = useVarstor(); // no namespace means it is the initial namespace
  return (
    <div>
      Count: {count} <button onClick={increment}>Increment</button>
    </div>
  );
}

function App () {
  return (
    // initial Varstor instance has the initial namespace, which is an empty string
    <VarstorProvider stores={[Varstor]}>
      <Component />
    </VarstorProvider>
  );
}
```
```Varstor.actions()``` is a nice way to encapsulate details of the store usage and follow React-like action flow.


  

But you can mutate the values directly from outside components or any way you like as well.
```js
const timeStore = Varstor("time");

timeStore.add({ time: new Date() });

setInterval(() => timeStore.set({ time: new Date() }), 1000);

const Component = () => {
  const { time } = useVarstor("time");
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div>
      Time now - {hours}:{minutes}:{seconds}
    </div>
  );
};

function App () {
  return (
    <VarstorProvider stores={[timeStore]}>
      <Component />
    </VarstorProvider>
  );
}
```