# Objects School Catalogue

This was another Codecademy project focused around object and class building with a focus on inheritence. Similar to the last one I tried to do as much as I could without any sort of guidance and I actually got roughly ~90% right! As I mentioned previously there's something about JavaScript just clicks with me, it's quickly become my favorite language.

The only thing that tripped me up was the method of using super and setting the 'level' of schooling. I knew that I needed to set the school level but I was getting a little confused between:

- Do I have call this.level and set the level that way?
- Or is there an intended way to do this via super? I mean it's part of the parent class so it should be part of super...

I kind of went in a few circles and whilst logically I could set level manually I felt that super was the right option. Then I kind of realized that in the super call, you're referring to the parent constructor - in the order that it's parameters are set:

```
class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
```

So then I tried: 

```
class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
```

And did a quick console log and it worked!

I recognize this is a small project but sometimes those are the ones where you make the biggest strides.
