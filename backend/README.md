Fake data
```
100.times {Book.create!(title: FFaker::Book.title, url_cover: FFaker::Book.cover, description: FFaker::Book.description, progress: rand(0..100))}
```
