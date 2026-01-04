const { client } = require('./lib/sanity');

client.fetch('*[_type == "post" && category->slug.current == "vividh"]{_id, title, slug, "category": category->{title, slug}}')
  .then(result => console.log(JSON.stringify(result, null, 2)))
  .catch(err => console.error(err));