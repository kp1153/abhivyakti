export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('epub').title('ई-पुस्तक'),
      S.documentTypeListItem('post').title('Post'),
      S.documentTypeListItem('category').title('Category'),
    ])