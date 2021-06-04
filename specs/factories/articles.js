module.exports = (factory, Models) => {
  factory.define('Article', Models.Article, {
    title: "Moon is a lie",
    content: "whatever whatever whatever whatever whatever whatever whatever whatever buy Bitcoin",
    createdAt: new Date(),
    updatedAt: new Date()
  });
}