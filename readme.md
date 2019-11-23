# Info
- unique.js is to remove duplicate obj from an Array by obj's value
  
# How to use
- First Way
```
let b = [
  {
    key: "01",
    value: "乐乐"
  },
  {
    key: "02",
    value: "博博"
  },
  {
    key: "03",
    value: "淘淘"
  },
  {
    key: "04",
    value: "乐乐"
  },
  {
    key: "01",
    value: "轻轻"
  }
];
console.log(unique(b, "key"));
console.log(unique(b, "value"));
```
- Second Way

```
console.log(b.unique("key").unique("value"));
```